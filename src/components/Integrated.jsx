/** @format */
import "../style.css";
import profile from "../../public/ronald.png";
import business from "../../public/business.png";
import contact from "../../public/contact.png";
import successful from "../../public/successful.png";
import group from "../../public/payment.png";
export default function Integrated() {
  return (
    <div className='gridcontainer'>
      <div className='integrated'>
        <span>Integrated tools for professional service providers</span>
      </div>

      <div className='grid'>
        <div className='profile-bookings'>
          <div className='profile'>
            <div className='page'>
              <span className='profilepage'>Profile Page + Services</span>

              <span className='profile-p'>
                Create your profile page, add your services with rates for each
                service
              </span>
            </div>
            <div className='image2'>
              <img className='ronaldprofile' src={profile} />{" "}
            </div>
          </div>
          <div className='bookings'>
            <div className='page'>
              <span className='profilepage'>Bookings</span>
              <span className='profile-p'>
                Organize your schedule and get customers to book you directly on
                the app, based on your availability.
              </span>
            </div>
            <div className='booknow'>
              <img className='successful' src={successful} />
            </div>
          </div>
        </div>
        <div className='pbc'>
          <div className='payment'>
            <div className='page'>
              <span className='profilepage'>Payments</span>
              <scan className='profile-p'>
                Accept payments for your services seamlessly
              </scan>
            </div>
            <img className='group' src={group} />
          </div>

          <div className='businesstools'>
            <div className='page'>
              <span className='profilepage'>Integrated Business Tools</span>
              <scan className='paragraphtool'>
                Manage your business operations like a pro using business tools
                such as quotes, invoices, and receipts.
              </scan>
            </div>
            <img className='businessimage' src={business} />
          </div>

          <div className='contact'>
            <div className='page'>
              <span className='profilepage'>Contacts</span>
              <span className='paragraph'>
                Manage your contacts effortlessly and see their entire
                transaction history at a glance.
              </span>
            </div>
            <img className='contactimage' src={contact} />
          </div>
        </div>
      </div>
    </div>
  );
}