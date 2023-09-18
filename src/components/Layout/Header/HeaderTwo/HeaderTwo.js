import React, { useState, useEffect } from "react";
import Link from "next/link";

const HeaderTwo = () => {
  const sticky = (e) => {
    const header = document.querySelector(".header-area-2");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  return (
    <header>
      <div className="header-area-2 sticky-header">
        <div className="container-fluid">
          <div className="header-main-wrapper">
            <div className="row align-items-center">
              <div className="col-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <div className="header-logo">
                  <Link href="/">
                    <a>
                      <h2 style={{ color: "black" }}>CeRtiFyChEck</h2>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <div className="header-main-right  d-flex justify-content-end">
                  <div className="main-menu mr-30 d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="menu-item">
                          <Link href="#about">
                            <a>About</a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
