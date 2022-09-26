import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/carousel.scss";

const Carousel = ({slides}) => {
    const width = window.screen.width;
    let settings;

    if(width > 600) {
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          };
    } else {
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          };
    }



    return (
        <Slider {...settings}>
            {slides}
        </Slider>
    )
}
export default Carousel;