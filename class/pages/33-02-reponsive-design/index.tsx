import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100px;
    height: 500px;
    background-color: green;
  }
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
    display: none;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}

// http://bootstrapk.com/css/ 여기서 그리드 옵션 부분 참고해서 사이즈 정하면 됨
// mobile-first 방식 & web-first 방식이 있음. 보통은 mobile-first 을 사용...
// web-first는 뭐냐? 사이트들에 따라서 웹이 중심인 사이트가 있음....모바일은 당장에 있어도 되고 없어도 되는 사이트들이 있어요.. 사용자 타겟에 따라 잘 살펴보아요. 실제로 모바일퍼스트인데 웹으로 먼저 디자인하면 어려워질 수 있어요. 내 키보드 소리가 너무 좋네요. 완전 예술이에요.
// 그렇다면 웹에 있던 것을 모바일에서는 어떻게 숨기냐? display-none 하면 된다.
// 오늘의 포트폴리오 과제는 처음 접속하는 페이지를 반응형으로 만드는 것이다! 아이폰 6 기준으로 해보자.
