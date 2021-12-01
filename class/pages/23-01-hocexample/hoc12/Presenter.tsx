import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";

const aaa = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) router.push("/");
  }, []);

  return <Component {...props} />;
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default aaa(Presenter);
