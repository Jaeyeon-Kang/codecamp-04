import {
  Banner,
  ImgBanner,
  Box,
  ImageWrapper,
  LineOne,
  LineTwo,
  LineThree,
  LineFour,
  Box2,
} from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Banner>
        <Slider {...settings}>
          <ImageWrapper>
            <Box>
              <LineOne>FEATURED ARTICLE</LineOne>
              <LineTwo>World’s Most Dangerous Technology Ever Made.</LineTwo>
              <LineThree>Ralph Hawkins · May 7, 2019 (10 mins read)</LineThree>
              <LineFour>
                Proident aliquip velit qui commodo officia qui consectetur dolor
                ullamco aliquip elit incididunt. Ea minim ex consectetur
                excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet
                aliqua do enim. Commodo duis dolor anim excepteur. In aliquip
                mollit nulla consequat velit magna.
              </LineFour>
            </Box>
            <ImgBanner></ImgBanner>
          </ImageWrapper>
          {/* <ImgBanner src="/images/ArticleImage2.png" /> */}
        </Slider>
      </Banner>
    </>
  );
}
