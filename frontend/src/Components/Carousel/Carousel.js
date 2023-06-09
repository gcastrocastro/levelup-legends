import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

export default function Carousel ({ game }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {game.short_screenshots.map((ss) => (
        <div class="carousel-image" key={ss.id}>
          <img src={ss.image} alt="screenshot" />
        </div>
      ))}
    </Slider>
  );
};
  