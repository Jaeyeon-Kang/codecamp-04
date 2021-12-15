import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;
export default function ImageUploadPreviewPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [myFiles, setMyFiles] = useState([]);
  const [imageUrl, setImgUrl] = useState("");

  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImgUrl(data.target?.result);
      setMyFiles((prev) => [...prev, file]);
    };
  }

  async function onClickSubmit() {
    let myImageUrls = ["", "", ""];
    //1.파일업로드
    if (myFiles.length) {
      //동시올리기 테스트
      const start = performance.now();
      await Promise.all([
        //promis.race 먼저끈난거 캐칭~
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
        uploadFile({ variables: { file: myFiles[0] } }),
      ]);

      const end = performance.now();
      console.log(end - start);
    }
    //2.업로드된 파일로 게시물등록
    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희2",
          password: "1234",
          title: "안녕하세요~~",
          contents: "이미지업로드연습중이에요!",
          images: [...myImageUrls],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  }

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}

// 이미지 드래그앤드롭하는 라이브러리: react-dropzone. 140만 다운로드 검색 ㄱㄱ.
// react-avatar-editor
// react-beautiful-dnd
