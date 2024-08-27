/** @format */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Data from "../data.json";

export default function Review() {
  let sliderRef = useRef(null);
  const next = () => {
    console.log("Next button clicked");

    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
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
              onClick={previous}
              className='arrow-left'
              width='32'
              height='33'
              viewBox='0 0 32 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.6665 17.3434L25.6665 17.3434'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13.7329 25.3759L5.66624 17.3439L13.7329 9.31055'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </li>
          <li>
            <svg
              onClick={next}
              className='arrow-right'
              width='32'
              height='33'
              viewBox='0 0 32 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.6665 17.3434L25.6665 17.3434'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M13.7329 25.3759L5.66624 17.3439L13.7329 9.31055'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </li>
        </ul>
      </div>

      <div className='reviewpart'>
        <Slider
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          {...settings}
          className='custom-slider'
        >
          {Data.map((data) => (
            <div className='businessowner'>
              <span className='datareview'>{data.review}</span>
              <hr className='hr' />
              <div>
                <img className='imageowner' src={data.image}></img>
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
