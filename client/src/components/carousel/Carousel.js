import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/carousel.scss";

const Carousel = ({slides}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      };

    return (
        <Slider {...settings}>
            {slides}
        </Slider>
    )
}
export default Carousel;