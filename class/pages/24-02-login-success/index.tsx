import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { useContext } from "react";
import { GlobalContext } from "../_app";

function LoginSuccessPage() {
  const { userInfo } = useContext(GlobalContext);

  return (
    <>
      <div>로그인에 성공하였습니다!!!!!</div>
      <div>{userInfo?.name}님 환영합니다!!!</div>
    </>
  );
}
export default withAuth(LoginSuccessPage);
