import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import './Testimonials.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import your videos - make sure these paths are correct
import video1 from '../../assets/verticalvideo.mp4';
import video2 from '../../assets/verticalvideo.mp4'; // You'll need different video files
import video3 from '../../assets/verticalvideo.mp4';
import video4 from '../../assets/verticalvideo.mp4';
import video5 from '../../assets/verticalvideo.mp4';
import video6 from '../../assets/verticalvideo.mp4';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      video: video1,
    },
    {
      id: 2,
      video: video2,
    },
    {
      id: 3,
      video: video3,
    },
    {
      id: 4,
      video: video4,
    },
    {
      id: 5,
      video: video5,
    },
    {
      id: 6,
      video: video6,
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Happy <span className="testimonials-text-gold">Homeowners</span>
          </h2>
        </div>

        {/* Video Swiper with Pagination */}
        <div className="testimonials-video-swiper-container">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              el: '.testimonials-pagination',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                }
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 75,
                  modifier: 1.5,
                }
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
            }}
            className="testimonials-video-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonials-video-slide">
                  <video 
                    className="testimonials-testimonial-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src={testimonial.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="testimonials-video-gradient-overlay"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination Dots */}
          <div className="testimonials-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;