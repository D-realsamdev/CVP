import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CertificateModal from "./responseModal";

const HeroSectionTwo = () => {
  const [showModal, setShowModal] = useState(false);
  const [certificateData, setCertificateData] = useState("");
  const [firstPieceOfData, setFirstPieceOfData] = useState(""); // Define firstPieceOfData
  const [secondPieceOfData, setSecondPieceOfData] = useState(""); // Define secondPieceOfData
  const baseUrl = "https://smart.pythonanywhere.com";
  const verifyCertificate = async (e) => {
    e.preventDefault();
    const certificateId = e.target.certificateId.value;
    const accessCode = e.target.accessCode.value;
    try {
      const response = await fetch(
        "https://smart.pythonanywhere.com/api/student/verify-certificate/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            certificate_id: certificateId,
            access_code: accessCode,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Certificate verified successfully");
        // Extract the two pieces of data you need from the 'data' object
        const certificateImageUrl = baseUrl + data.certificate_image;
      openModal(data.student_name, certificateImageUrl);
      } else {
        const errorMessage = await response.text(); // Get error message from response
        console.error(`Certificate verification failed: ${errorMessage}`);
        toast.error("Certificate verification failed");
      }
    } catch (error) {
      console.error("An error occurred while verifying the certificate", error);
      toast.error("An error occurred while verifying the certificate");
    }
  };

  // const openModal = (data) => {
  //    setFirstPieceOfData(firstPieceOfData);
  //       setSecondPieceOfData(baseUrl+secondPieceOfData);
  //   setShowModal(true);
  // };
  const openModal = (studentName, certificateImageUrl) => {
    setFirstPieceOfData(studentName);
    setSecondPieceOfData(certificateImageUrl);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="hero-area hero-height d-flex align-items-center position-relative">
      {/* <img className="hero-shape-5" src="assets/img/shape/shape-02.png" alt="shape"/>
            <img className="hero-shape-1" src="assets/img/shape/shape-03.png" alt="shape"/>
            <img className="hero-shape-6" src="assets/img/shape/shape-01.png" alt="shape"/>
            <img className="hero-shape-7" src="assets/img/shape/shape-10.png" alt="shape"/> */}
      <div className="container">
        <div className="hero-2-content-wrpapper position-relative">
          <div className="hero-shape-3 d-none d-xl-block">
            <img
              className=""
              src="assets/img/shape/shape-04.png"
              alt="image not found"
            />
            <h5 className="slider-shap-text">Verify Certificate</h5>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-10">
              <div className="slider-content-wrapper">
                <div className="hero-tittle-info text-center mb-45">
                  <h2>
                    Your Trusted Certificate <br />
                    Verification Portal
                  </h2>
                </div>
                <div className="row justify-content-center text-center">
                  <p>
                    Simply use the search field below to verify certificate by
                    entering the certificate ID and access code.
                  </p>
                </div>
                <div
                  className="slider-search "
                  style={{ backgroundColor: "white" }}
                >
                  <form onSubmit={verifyCertificate}>
                    <div className="slider-search-icon position-relative">
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            placeholder="Certificate ID"
                            name="certificateId"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            placeholder="Access Code"
                            name="accessCode"
                          />
                        </div>
                      </div>
                      <button type="submit">
                        <i className="far fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="slider-course-content text-center">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Free for certificate check</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Verify certificate authencity</span>
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      <span>Verify university certificate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CertificateModal
        show={showModal}
        handleClose={closeModal}
        firstPieceOfData={firstPieceOfData}
        secondPieceOfData={secondPieceOfData}
      />
    </div>
  );
};

export default HeroSectionTwo;
