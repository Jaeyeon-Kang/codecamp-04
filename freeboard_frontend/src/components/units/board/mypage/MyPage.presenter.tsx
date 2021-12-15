import Head from "next/head";
import {
  Wrapper,
  LoginInfo,
  PointButton,
  Row,
  ColumnHeaderBasic,
  ColumnBasic,
  Label,
} from "./MyPage.styles";

export default function MyPagePresenter(props) {
  return (
    <Wrapper>
      <LoginInfo>
        <Label>내 정보</Label>
        <div> 이메일: {props.loginData?.fetchUserLoggedIn?.email}</div>
        <div>
          {" "}
          포인트: {props.loginData?.fetchUserLoggedIn?.userPoint?.amount}
        </div>
      </LoginInfo>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <PointButton onClick={props.onClickPointButton}>
        100 포인트 충전하기
      </PointButton>
      <Label>구매내역</Label>
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderBasic>상품명</ColumnHeaderBasic>
        <ColumnHeaderBasic>가격</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchUseditemsIBought?.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnBasic>{el.name}</ColumnBasic>
          <ColumnBasic>{el.price}</ColumnBasic>
        </Row>
      ))}
    </Wrapper>
  );
}
