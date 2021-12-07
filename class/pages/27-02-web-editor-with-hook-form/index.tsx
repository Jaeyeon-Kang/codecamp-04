// 리액트 훅 폼과 웹 에디터 연결시키기

// import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPate() {
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  function handleChange(value: string) {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }

  // if (process.browser) {
  //   console.log("나는 브라우저다");
  // } else {
  //   console.log("나는 프론트엔드 서버다");
  // }

  return (
    <>
      작성자: <input type="text" {...register("writer")} /> <br />
      비밀번호: <input type="password" {...register("password")} /> <br />
      제목: <input type="text" {...register("title")} /> <br />
      내용: <ReactQuill onChange={handleChange} />
      <br />
      <button> 등록하기 </button>
    </>
  );
}
