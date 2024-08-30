/** @format */

import "../style.css";

import imageboy from "../../public/imageboy.jpg";
import imagegirl from "../../public/imagegirl.jpg";
import Calendar from "./Calender";
import Check from "./Check";
export default function CreditService() {
  return (
    <div className='firstcontainer'>
      <div className='buildbutton'>
        <span className='build'>
          Build <span className='easily'>credibility</span>, reach customers
          faster, and organize your practice
          <span className='easily'> seamlessly</span>
        </span>

        <div>
          <a href='https://play.google.com/store/apps/details?id=com.luround.uppist&pcampaignid=web_share'>
            <button className='download'>Download Luround</button>
          </a>
        </div>
      </div>
      <div className='image'>
        <div>
          <img className='imgboy' src={imageboy} />

          <div className='mark'>
            <Calendar />
            <span>Mark your calendar!</span>
          </div>
        </div>
        <div>
          <img className='imggirl' src={imagegirl} />
          <div className='service'>
            <span>Service booked</span>
            <Check />
          </div>
        </div>
      </div>
      <footer className='services'>
        <div className='provider'>
          <span>100+</span>

          <span className='serviceproviders'>Service Providers</span>
        </div>
        <hr />
        <div className='provider'>
          <span>500+</span>

          <span className='serviceproviders'>Services Booked</span>
        </div>
        <hr />
        <div className='provider'>
          <span>24/7</span>

          <span className='serviceproviders'>Customer Support</span>
        </div>
      </footer>
    </div>
  );
}
