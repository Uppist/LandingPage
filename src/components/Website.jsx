/** @format */

import Business from "./BusinessPage";
import CreditService from "./CredibilityPage";
import Footer from "./Footer";
import Integrated from "./Integrated";
import ProfilePage from "./ProfilePage";
import Review from "./ReviewPage";
import Share from "./SharePage";

export default function Website() {
  return (
    <>
      <CreditService />
      <Integrated />
      <ProfilePage />
      <Business />
      <Review />
      <Share />
      <Footer />
    </>
  );
}
