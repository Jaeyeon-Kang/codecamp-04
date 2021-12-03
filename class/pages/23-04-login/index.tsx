import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeMyEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setMyEmail(event.target.value);
  };

  const onChangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken || ""
    );
    setAccessToken?.(result.data?.loginUser.accessToken || "");
    // 여기서 글로벌 스테이트에 넣을 setAccessToken 필요
    // const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)
    router.push(`/23-05-login-success`);
  }

  return (
    <>
      이메일:{" "}
      <input
        type="text"
        onChange={onChangeMyEmail}
        placeholder="이메일을 입력하세요"
      />{" "}
      <br />
      비밀번호:{" "}
      <input
        type="password"
        onChange={onChangeMyPassword}
        placeholder="비밀번호를 입력하세요"
      />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
