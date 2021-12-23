import { useMutation, useQuery } from "@apollo/client";
import MyPagePresenter from "./MyPage.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USED_ITEMS_I_BOUGHT,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEMS_PICKED,
} from "./MyPage.queries";

export default function MyPageContainer() {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  const { data: loginData } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: wishlistdata } = useQuery(FETCH_USED_ITEMS_PICKED, {
    variables: { search: "" },
  });

  console.log(wishlistdata);

  function onClickPointButton() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 관리자페이지 -> 시스템설정 -> 내정보에서 볼 수 있음
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트충전",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "강재연",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 뉴욕동",
        buyer_postcode: "01181",
        m_redurect_url: "", // 모바일 결제 후 리다이렉트 될 주소
      },

      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공시
          console.log(rsp);

          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            console.log(result);
          } catch (error) {
            alert(error.message);
          }
        }
      }
    );
  }

  return (
    <MyPagePresenter
      onClickPointButton={onClickPointButton}
      data={data}
      loginData={loginData}
      wishlistdata={wishlistdata}
    />
  );
}
