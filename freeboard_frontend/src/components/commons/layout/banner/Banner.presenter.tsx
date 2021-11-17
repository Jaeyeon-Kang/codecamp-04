import { Banner } from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    display: true,
  };

  return (
    <Banner>
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div>
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
          </div>
        </Slider>
      </div>
    </Banner>
  );
}
