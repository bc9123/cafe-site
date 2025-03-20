import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const Slider = () => {
  const options = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    snap: true,
    pagination: false,
    AutoScroll: true,
    autoScroll: {
      speed: 1,
      pauseOnHover: true,

    },
    breakpoints: {
      768: {
        perPage: 1,
      },
    },
  };

  const extensions = {
    AutoScroll,
  };

  return (
    <Splide
      options={options}
      extensions={extensions}
      hasTrack={false}
    >
      <SplideTrack>
        <SplideSlide aria-label="Coffee images">
          <img src="/assets/images/coffee-1.jpg" alt="coffee-image" className="splide__image" loading="lazy" />
          <h3 className="splide__text">Coffee</h3>
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/coffee-2.jpg" alt="coffee-image" className="splide__image" loading="lazy" />
          <h3 className="splide__text">Coffee</h3>
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/coffee-3.jpg" alt="coffee-image" className="splide__image" loading="lazy" />
          <h3 className="splide__text">Coffee</h3>
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/coffee-4.jpg" alt="coffee-image" className="splide__image" loading="lazy" />
          <h3 className="splide__text">Coffee</h3>
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/coffee-5.jpg" alt="coffee-image" className="splide__image" loading="lazy" />
          <h3 className="splide__text">Coffee</h3>
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/coffee-6.jpg" alt="coffee-image" className="splide__image" loading="lazy" />
          <h3 className="splide__text">Coffee</h3>
        </SplideSlide>
      </SplideTrack>
    </Splide>
  );
};

export default Slider;
