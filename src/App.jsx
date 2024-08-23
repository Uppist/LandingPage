/** @format */

import Business from "./components/BusinessPage";
import CreditService from "./components/CredibilityPage";
import Footer from "./components/Footer";
import Integrated from "./components/Integrated";
import ProfilePage from "./components/ProfilePage";
import Review from "./components/ReviewPage";
import Share from "./components/SharePage";

export default function App() {
  return (
    <div className='App'>
      <CreditService />
      <Integrated />
      <ProfilePage />
      <Business />
      <Review />
      <Share />
      <Footer />
    </div>
  );
}
