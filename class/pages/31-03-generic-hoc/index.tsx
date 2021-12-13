import { useRouter } from "next/router";
import { Component, ComponentType, useContext, useEffect } from "react";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    // const { accessToken } = useContext(GlobalContext);

    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인 한 사람만 입장 가능합니다 로그인을 먼저해주세요");
        router.push("/23-04-login");
      }
    }, []);

    return <Component {...props} />;
  };
