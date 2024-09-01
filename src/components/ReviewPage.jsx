/** @format */

// /** @format */

import React, { useRef, Component } from "react";
import Slider from "react-slick";
import Data from "../data.json";

export default function Review() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplsay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='review'>
      <div className='help-list'>
        <span className='help'>See how Luround has helped others</span>
        <ul className='arrow'>
          <li>
            <svg
              onClick={prevSlide}
              className='arrow-left'
              width='10'
              height='18'
              viewBox='0 0 10 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 17L1 9L9 1'
                stroke='#1D2E2E'
                stroke-width='1.5'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </li>
          <li>
            <svg
              onClick={nextSlide}
              className='arrow-right'
              width='10'
              height='18'
              viewBox='0 0 10 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 1L9 9L1 17'
                stroke='#1D2E2E'
                stroke-width='1.5'
                stroke-miterlimit='10'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </li>
        </ul>
      </div>

      <div className='reviewpart'>
        <Slider ref={sliderRef} {...settings} className='custom-slider'>
          {Data.map((data, index) => (
            <div className='businessowner' key={index}>
              <span className='datareview'>{data.review}</span>
              <hr className='hr' />
              <div>
                <img className='imageowner' src={data.image} alt={data.name} />
                <div className='name'>
                  <span className='dataname'>{data.name}</span>
                  <span>{data.Occupation}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
