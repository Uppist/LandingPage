/** @format */
import "../style.css";
import profile from "../elements/ronald.png";
import business from "../elements/business.png";
import contact from "../elements/contact.png";
import successful from "../elements/successful.png";
import group from "../elements/payment.png";
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
              <img className='ronaldprofile' src={profile} />{" "}
            </div>
          </div>
          <div className='bookings'>
            <span className='profilepage'>Bookings</span>
            <p className='profile-p'>
              Organize your schedule and get customers to book you directly on
              the app, based on your availability.
            </p>

            <div className='booknow'>
              <img className='successful' src={successful} />
            </div>
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
