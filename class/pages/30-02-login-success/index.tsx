import { useQuery, gql } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data)
  return (
    <>
      <div> 로그인에 성공하셨습니다</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
}




