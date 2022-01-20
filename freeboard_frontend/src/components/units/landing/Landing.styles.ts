import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: rgba(158, 165, 164, 0.23);
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
`;

export const FirstBanner = styled.div`
  width: 100%;
  height: 110vh;
  background-size: cover;
  background-position: bottom center;
  background-image: url("/images/landing/banner01.png");
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SecondBanner = styled.div`
  width: 100%;
  height: 110vh;
  background-size: cover;
  background-position: bottom center;
  background-image: url("/images/landing/banner02.jpg");
  margin-top: 2%;
`;

export const ThirdToFourthBanner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

export const ThirdBanner = styled.div`
  width: 45%;
  height: 80vh;
  background-size: cover;
  background-position: bottom center;
  background-image: url("/images/landing/banner03.jpg");
`;

export const FourthBanner = styled.div`
  width: 45%;
  height: 80vh;
  background-size: cover;
  background-position: center center;
  background-image: url("/images/landing/banner04.jpg");
  margin-left: 2%;
`;

export const FirstTitle = styled.div`
  position: absolute;
  top: 6%;
  font-size: 5em;
  font-weight: 600;
  width: 1000px;
  letter-spacing: -0.01em;
  line-height: 114%;
  text-align: center;
  z-index: 0;
`;

export const LearnMoreToArrow = styled.div`
  position: absolute;
  top: 20%;
  color: rgba(48, 111, 219, 1);
  display: flex;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    /* text-underline-position: top; */
  }
`;

export const LearnMore = styled.div`
  font-size: 2.3em;
  font-weight: 500;
  width: 100%;
  letter-spacing: -0.01em;
  line-height: 114%;
  text-align: center;
`;

export const RightArrow = styled.img`
  width: 1.7em;
  height: 1.7em;
  margin-top: 8px;
  margin-left: 15px;
`;
