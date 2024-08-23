/** @format */
import personal from "../elements/personal.jpg";
import community from "../elements/community.jpg";
import manage from "../elements/manage.png";

import process from "../elements/process.png";

export default function Business() {
  return (
    <div className='gridcontainer2'>
      <div className='grid2'>
        <div className='stay-unlock'>
          <span>Stay on top of your business operations</span>
          <p>
            Unlock the your business potential with our all-in-one platform
            designed to streamline your operations, enhance customer
            interactions, and boost your productivity.
          </p>
          <img className='personal' src={personal} />
          <img className='manage' src={manage} />
          <img className='process' src={process} />
        </div>
        <div>
          <img className='communityimage' src={community} />
        </div>
      </div>
    </div>
  );
}
