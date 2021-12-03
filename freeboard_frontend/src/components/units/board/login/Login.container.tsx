import { ChangeEvent, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { GlobalContext } from "../../../../../pages/_app";
import LoginPresenter from "../login/Login.presenter";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { LOGIN_USER } from "./Login.queries";

export default function LoginContainer() {
  const router = useRouter();
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { setAccessToken } = useContext(GlobalContext);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  function MoveToSignUpPage() {
    router.push(`/boards/signup`);
  }

  const onClickLogin = async () => {
    try {
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
      setAccessToken(result.data?.loginUser.accessToken || "");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <LoginPresenter
      MoveToSignUpPage={MoveToSignUpPage}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      onClickLogin={onClickLogin}
    />
  );
}
