import { Banner, ImgBanner, ImgWrapper } from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fixControlledValue } from "antd/lib/input/Input";

export default function BannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    autoplay: true,
    //position: fixControlledValue,
  };

  return (
    <Banner>
      <Slider {...settings}>
        {/* <div>
            <img src="/images/carousel_1.jpg" style={{ width: "750px" }} />
          </div>
          <div>
            <img src="/images/carousel_2.jpg" style={{ width: "752px" }} />
          </div>
          <div>
            <img src="/images/carousel_1.jpg" style={{ width: "750px" }} />
          </div>
          <div>
            <img src="/images/carousel_2.jpg" style={{ width: "752px" }} />
          </div> */}

        <ImgWrapper>
          <ImgBanner src="/images/carousel_1.jpg" />
        </ImgWrapper>
        <ImgWrapper>
          <ImgBanner src="/images/carousel_2.jpg" />
        </ImgWrapper>
        <div>
          <ImgBanner src="/images/carousel_1.jpg" />
        </div>
        <div>
          <ImgBanner src="/images/carousel_2.jpg" />
        </div>
      </Slider>
    </Banner>
  );
}
