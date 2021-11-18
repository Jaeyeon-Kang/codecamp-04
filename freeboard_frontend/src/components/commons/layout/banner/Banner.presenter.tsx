import { Banner } from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fixControlledValue } from "antd/lib/input/Input";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    display: true,
    position: fixControlledValue,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul style={{ margin: "5px" }}> {dots} </ul>
      </div>
    ),
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
