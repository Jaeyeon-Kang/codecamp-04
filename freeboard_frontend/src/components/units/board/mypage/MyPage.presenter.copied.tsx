import { ChangeEvent } from "react";

interface IMyPage {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
}

export default function MyPagePresenter(props: IMyPage) {
  return (
    <>
      <div>회원가입</div>
      <div>
        email
        <input type="text" name="email" onChange={props.onChangeInput} /> <br />
        name
        <input type="text" name="name" onChange={props.onChangeInput} /> <br />
        password
        <input
          type="text"
          name="password"
          onChange={props.onChangeInput}
        />{" "}
        <br />
        <button onClick={props.onClickSubmit}>등록</button>
      </div>
    </>
  );
}
