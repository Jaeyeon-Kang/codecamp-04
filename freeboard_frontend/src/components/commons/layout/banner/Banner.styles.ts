import styled from "@emotion/styled";

export const Banner = styled.section`
  height: 600px;
  margin: 20px;
  /* background-color: skyblue; */
  overflow: hidden;
`;

export const ImgBanner = styled.figure`
  width: 100%;
  height: 600px;
  background-image: url("/images/ArticleImage.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  /* top: 50px; */
`;

export const Box = styled.div`
  width: 509px;
  height: 483px;
  padding-top: 100px;
  padding-left: 29px;
  background-color: white;
  position: absolute;
  z-index: 2;
  left: 60px;
  opacity: 93%;
  top: 100px;
`;

export const Box2 = styled.div`
  width: 509px;
  height: 483px;
  padding-top: 100px;
  padding-left: 29px;
  background-color: pink;
  position: absolute;
  z-index: 3;
  left: 180px;
  opacity: 93%;
`;

export const ImageWrapper = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const LineOne = styled.div`
  margin: 0px;
  font-size: 20px;
  font-weight: lighter;
  color: #1c1c1c;
  opacity: 50%;
`;

export const LineTwo = styled.div`
  margin: 0px;
  font-family: "Libre Baskerville";
  font-size: 33px;
  font-weight: bold;
  color: #000000;
  /* opacity: 50%; */
`;

export const LineThree = styled.div`
  margin: 0px;
  padding-top: 12px;
  font-size: 16px;
  font-weight: lighter;
  color: #1c1c1c;
  opacity: 60%;
`;

export const LineFour = styled.div`
  margin: 0px;
  padding-top: 12px;
  padding-right: 40px;
  font-size: 14px;
  font-weight: lighter;
  color: #000000;
  /* opacity: 60%; */
`;
