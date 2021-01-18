import SignUpPresenter from "./SignUp.presenter";
import { CREATE_USER } from "./SignUp.queries";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function SignUpContainer() {
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [createUser] = useMutation(CREATE_USER);
  const router = useRouter();

  function onChangeMyName(event: ChangeEvent<HTMLInputElement>) {
    setMyName(event.target.value);
  }

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickSignUp() {
    // const { setAccessToken } = useContext(GlobalContext);

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: myEmail,
            password: myPassword,
            name: myName,
          },
        },
      });
      if (!/\w+@\w+\.\w+/.test(myEmail)) {
        alert("이메일을 정확히 입력해주세요");
      } else {
        alert("회원가입에 성공하셨습니다. 로그인을 진행해주세요.");
        router.push(`/login`);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <SignUpPresenter
      onChangeMyName={onChangeMyName}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      onClickSignUp={onClickSignUp}
    />
  );
}
