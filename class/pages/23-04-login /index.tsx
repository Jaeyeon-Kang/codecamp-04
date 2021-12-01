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
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLElement>) {
    setMyPassword(event.target.value);
  }

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
    setAccessToken?.(result.data?.loginUser.accessToken || ""); // 여기서 setAccesToken 필요! (글로벌 스테이트에...)

    // 로그인 성공된 페이지로 이동시키기!!
    router.push("/23-05-login-success");
  }

  return (
    <>
      이메일:
      <input type="text" onChange={onChangeMyEmail} />
      비밀번호:
      <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인하기!!</button>
    </>
  );
}
