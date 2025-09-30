import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import './Hero.css';
import Hero1 from '../../assets/Heroimg_1.jpg'
import Hero2 from '../../assets/Heroimg_2.jpg'
import Hero3 from '../../assets/Heroimg_3.jpg'
import Hero4 from '../../assets/Heroimg_4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  // Custom SVG Arrow Components
  const LeftArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const RightArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // Sample images - replace with your actual images
  const heroImages = [
    {
      id: 1,
      image: Hero1,
      title: 'Luxury Living Redefined',
      subtitle: 'Experience unparalleled elegance and sophistication'
    },
    {
      id: 2,
      image: Hero2,
      title: 'Premium Residences',
      subtitle: 'Where luxury meets contemporary design'
    },
    {
      id: 3,
      image: Hero3,
      title: 'Exclusive Lifestyle',
      subtitle: 'Discover your dream home in paradise'
    },
    {
      id: 4,
      image: Hero4,
      title: 'Architectural Marvel',
      subtitle: 'Masterpiece of modern architecture'
    }
  ];

  return (
    <section id="Home" className="hero-section">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev',
        }}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
        }}
        loop={true}
        className="hero-swiper"
      >
        {heroImages.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }} // Fixed this line
            >
              <div className="hero-slide-overlay"></div>
              <div className="hero-slide-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-cta">
                  <button className="hero-cta-btn hero-cta-btn-primary">Explore Now</button>
                  <button className="hero-cta-btn hero-cta-btn-secondary">View Gallery</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons with SVG */}
        <div className="hero-button-prev">
          <LeftArrow />
        </div>
        <div className="hero-button-next">
          <RightArrow />
        </div>

        {/* Pagination Dots */}
        <div className="hero-pagination"></div>
      </Swiper>
    </section>
  );
};

export default Hero;