import React from "react";

const PartnerSection = () => {
  return (
    <div className="patner-area pt-110 pb-80" id='about'>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="partner-box mb-30">
              <div className="partner-thumb d-none d-sm-block">
                <img src="assets/img/bg/partner.png" alt="partner-png" />
              </div>
              <div className="section-title mb-30">
                <h2>
                  Welcome <span className="down-mark-line-2">to</span>
                  CeRtiFyChEck
                </h2>
              </div>
              <div className="Partner-content">
                <p>Your Trust Matters</p>
                <div className="">
                  <p>
                    Welcome, and thank you for visiting our website, your top
                    destination for conducting certificate verification. In our
                    dedication to improving public services, we are excited to
                    present CeRtiFyChEck's Certificate Verification Portal
                    (CVP). <br />
                    <br />
                    The CVP serves as a secure gateway for establishing trust
                    and ensuring confidentiality. This verification portal
                    provides access to our comprehensive certificate database
                    for both private and government entities. <br />
                    <br />
                    This accessibility empowers governmental bodies, private
                    organizations, and individuals to effortlessly perform vital
                    certificate verifications. We invite you to explore the CVP
                    and harness its features for streamlined certificate
                    verification procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="partner-wrapper">
              <div className="singel-partner">
                <img
                  src="assets/img/brand/veri.png"
                  alt="image not found"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
