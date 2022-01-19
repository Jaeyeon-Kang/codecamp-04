import styled from "@emotion/styled";

export const Wrapper = styled.div`
width: 100%;

background-color:rgba(0, 0, 0, 0.8)
display: flex;
flex-direction: column;
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
`;

export const ThirdBanner = styled.div`
  width: 100%;
  height: 110vh;
  background-size: cover;
  background-position: bottom center;
  background-image: url("/images/landing/banner03.jpg");
`;

export const FourthBanner = styled.div`
width: 100%;
height: 110vh;
background-size: cover;
  background-position: bottom center;
background-image: url("/images/landing/banner04.jpg");

`

export const FirstTitle = styled.div`
    position: absolute;
    top:6%;
    font-size: 5em;
    font-weight: 600;
    width: 1000px;
    letter-spacing: -0.01em;
    line-height: 114%;
    text-align: center;
`;
