import React from "react";
import Navigation from "../components/Navigation";

const Partner = ({ isLoggedIn }) => {
  return (
    <div className="main_dis">
      <div className="logo_div">
        <img className="logo" src="img/logo_w.png" alt="error" />
      </div>
      <div style={{ marginTop: "30px" }}>
        <img src="img/partner_list1.png" alt="error" />
        <img className="partner_img" src="img/partner_list3.png" alt="error" />
        <img className="partner_img" src="img/partner_list7.png" alt="error" />
        <img className="partner_img" src="img/partner_list4.png" alt="error" />
        <img className="partner_img" src="img/partner_list2.png" alt="error" />
        <img className="partner_img" src="img/partner_list6.png" alt="error" />
        <img className="partner_img" src="img/partner_list5.png" alt="error" />
      </div>
      <div className="m_nav">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
};
export default Partner;
