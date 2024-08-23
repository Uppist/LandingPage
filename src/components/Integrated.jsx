/** @format */
import "../style.css";
import profile from "../elements/RonaldProfile.jpg";
import onetime from "../elements/onetime.jpg";
import payment1 from "../elements/Financials.jpg";
import payment2 from "../elements/Financials2.jpg";
import payment3 from "../elements/Financials3.jpg";
import business from "../elements/business.jpg";
import contact from "../elements/contact.jpg";
import successful from "../elements/successful.jpg";
import group from "../elements/group.png";
export default function Integrated() {
  return (
    <div className='gridcontainer'>
      <div className='integrated'>
        <span>Integrated tools for professional service providers</span>
      </div>

      <div className='grid'>
        <div className='profile-bookings'>
          <div className='profile'>
            <span className='profilepage'>Profile Page + Services</span>

            <p className='profile-p'>
              Create your profile page, add your services with rates for each
              service
            </p>

            <div className='image2'>
              <img className='ronaldprofile' src={profile} />
              <img className='onetime' src={onetime} />
            </div>
          </div>
          <div className='bookings'>
            <span className='profilepage'>Bookings</span>
            <p className='profile-p'>
              Organize your schedule and get customers to book you directly on
              the app, based on your availability.
            </p>

            <div className='booknow'>
              <span>Book Now</span>
            </div>
            <img className='successful' src={successful} />
          </div>
        </div>
        <div className='pbc'>
          <div className='payment'>
            <span className='profilepage'>Payment</span>
            <p className='profile-p'>
              Accept payments for your services seamlessly
            </p>
            <div>
              <img className='group' src={group} />
              {/* <img className='payment2' src={payment2} /> */}
              {/* <img className='payment1' src={payment1} /> */}
            </div>
          </div>

          <div className='businesstools'>
            <span className='profilepage'>Integrated Business Tools</span>
            <p className='paragraphtool'>
              Manage your business operations like a pro using business tools
              such as quotes, invoices, and receipts.
            </p>
            <img className='businessimage' src={business} />
          </div>

          <div className='contact'>
            <span className='profilepage'>Contacts</span>
            <p className='paragraph'>
              Manage your contacts effortlessly and see their entire transaction
              history at a glance.
            </p>
            <img className='contactimage' src={contact} />
          </div>
        </div>
      </div>
    </div>
  );
}
