import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [myImages, setmyImages] = useState<string[]>([]);
  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setmyImages([result.data.uploadFile.url]);
  }
  function onClickMyimage() {
    fileRef.current?.click();
  }
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickMyimage}
      >
        이미지 선택
      </div>
      <img src={`https://storage.googleapis.com/${myImages[0]}`} />
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
      ;
    </>
  );
}
