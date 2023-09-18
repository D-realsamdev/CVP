import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area pt-100">
        <div className="container">
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="copyright-text border-line">
                    <p> Copyrighted © 2023</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="copyright-subcribe">
                    <form action="#" className="widget__subscribe">
                      <div className="field">
                        <input type="email" placeholder="Enter Email" />
                      </div>
                      <button type="submit">
                        Subscribe<i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
