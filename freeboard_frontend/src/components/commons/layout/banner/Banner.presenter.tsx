import { Banner, ImgBanner, Box, ImageWrapper, LineOne } from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: false,
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
            </Box>
            <ImgBanner src="/images/ArticleImage.png" />
          </ImageWrapper>
          {/* <ImgBanner src="/images/ArticleImage2.png" /> */}
        </Slider>
      </Banner>
    </>
  );
}
