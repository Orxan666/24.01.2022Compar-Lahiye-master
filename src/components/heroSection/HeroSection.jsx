
import React from "react";
import { Link } from "react-router-dom";
import "./heroSection.scss"
import sld1 from "../../image/slide-1.jpg";
import sld2 from "../../image/slide-2.jpg"

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';





const HeroSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img className="img-fluid" src={sld1} alt="" />
        <div className="overlay">
        <div className="over-text">
          <h1>Bu sahə <span>"tam sənlikdir."</span> <br />  Ozünü kəşf et </h1>
   <Link className="learn">Ətraflı</Link>
     
    

      
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="img-fluid" src={sld2} alt="" />
        <div className="overlay">
        <div className="over-text">
          <h1>Karyeranı <span>"dizayn etməyə"</span> <br /> bu gün başla</h1>
          <Link className="learn">Ətraflı</Link>
   

      
        </div>
      </div>
      </SwiperSlide>
  
  
  
    </Swiper>
  );
};

export default HeroSection;
