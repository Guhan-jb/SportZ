// PartnerLogosSlider.js

import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

const PartnerLogosSlider = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      });
    });
  }, []);

  return (
    <div className="container">
      <h2>Our Partners</h2>
      <section className="customer-logos slider">
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Logo 1" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Logo 2" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Logo 3" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="Logo 4" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Logo 5" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Logo 6" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Logo 7" />
        </div>
      </section>
    </div>
  );
};

export default PartnerLogosSlider;
