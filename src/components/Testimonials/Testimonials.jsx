import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './Testimonials.css';
 import video from '../../assets/verticalvideo.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      video: {video},
    },
    {
      id: 2,
      video:  {video},
    },
    {
      id: 3,
      video:  {video},
    },
    {
      id: 4,
      video:  {video},
    },
    {
      id: 5,
      video: "../../assets/vertical video.mp4",
    },
    {
      id: 6,
      video: "../../assets/vertical video.mp4",
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
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   el: '.testimonials-pagination',
            //   clickable: true,
            // }}
            breakpoints={{
              400: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 35,
              },
              1536: {
                slidesPerView: 4,
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