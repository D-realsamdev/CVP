import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const HeaderTwo = () => {
    const sticky = (e) => {
        const header = document.querySelector('.header-area-2');
        const scrollTop = window.scrollY;
        scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    // Sticky Menu Area End


    return (
        <header>
{/* 
            <div className="header-top-area d-none d-lg-block">
                <div className="container-fluid">
                    <div className="header-top-inner">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-8">
                                <div className="header-top-icon">
                                    <a href="tel:(555)674890556"><i className="fas fa-phone"></i>(555) 674 890 556</a>
                                    <a href="mailto:info@example.com"><i className="fal fa-envelope"></i>info@example.com</a>
                                    <i className="fal fa-map-marker-alt"></i><span>3rd Avenue, San Francisco</span>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="header-top-login d-flex f-right">
                                    <div className="header-user-login p-relative">
                                        <span><a className="user-btn-sign-up" href="#" onClick={() => {setSignInOpen(!signinOpen)}}>Login / Register</a></span>
                                    </div>
                                    <div className="header-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="header-area-2 sticky-header">
                <div className="container-fluid">
                    <div className="header-main-wrapper">
                        <div className="row align-items-center">
                            <div className="col-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                <div className="header-logo">
                                    <Link href="/"><a><h2 style={{color:"black"}}>CeRtiFyChEck</h2></a></Link>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                                <div className="header-main-right  d-flex justify-content-end">
                                    <div className="main-menu mr-30 d-none d-xl-block">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="menu-item"><Link href="#about"><a>About</a></Link>
                                                </li>
                                        
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* <div className="header-btn">
                                        <div className="cart-wrapper mr-45">
                                          
                                        </div>
                                        <span className="edu-four-btn d-none d-lg-block" onClick={() => {setSignInOpen(!signinOpen)}}>Lecturer Login</span>
                                    </div> */}
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