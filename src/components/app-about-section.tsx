import React from "react";
import AppButton from "./app-button";
import AppAboutProcess from "./app-process-circles";
import PeaceSymbol from "./../assets/images/Peace Symbol.svg";
import DataEncryptionSymbol from "./../assets/images/Data Encryption.svg";
import AutomaticSymbol from "./../assets/images/Automatic.svg";
import BatchAssignSymbol from "./../assets/images/Batch Assign.svg";


const AppAbout = (): JSX.Element => 
{
    


    const handleClick = ():void =>
    {
        //pass
    }
    
  return (
    <React.Fragment>
      <section className="app-about my-md-4 my-3 py-2 row brand-bg-white">
        <section className="about-text col-lg-5 col-md-12 m-2 d-flex flex-column my-2 mx-2">
          {/* <p className="text-capitalize">ABOUT</p> */}
          <h3
            className="fs-3 text-capitalize fw-bold my-3 py-2"
            data-aos-delay="10"
            data-aos="fade-right"
          >
            all you need to get started
          </h3>

          <p
            className="brand-small-text-2 text-start my-3"
            data-aos-delay="20"
            data-aos="fade-left"
          >
            HeirTrust is a blockchain based multichain will/testament, backup,
            recovery and iheritance platform for crypto assets and files. It
            allows you to create and manage your wills for your digital assets
            and files on multiple blockchain such as Etherum, Near, BSC and
            more.
          </p>

          <section className="connect-button-container d-flex align-items-center my-2">
            <AppButton
              text="join waitlist"
              className="brand-button brand-bg-primary-green text-capitalize brand-small-text-2 p-2 about-join-waitlist-button"
              onClick={handleClick}
            />
          </section>
        </section>

        <section className="about-steps col-lg-7 col-md-12 row">
          <section
            className="about-step-1 col-md-6 d-flex  flex-md-column align-items-center align-items-md-start justify-content-around p-3 m-md-0 m-1"
            data-aos="zoom-in"
            data-aos-duration="200"
          >
            <AppAboutProcess
              imageSrc={AutomaticSymbol}
              className="d-flex app-about-process  mx-md-3"
            />
            <p className="brand-small-text-2 my-2 m-0 py-3 mx-3">
              Set up smart contracts that execute your wills automatically when
              certain conditions are met
            </p>
          </section>

          <section
            className="about-step-2 col-md-6 d-flex  flex-md-column align-items-center align-items-md-start justify-content-center p-3 m-md-0 m-1"
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <AppAboutProcess
              imageSrc={DataEncryptionSymbol}
              className="app-about-process mx-md-3"
            />

            <p className="brand-small-text-2 my-2 m-0 py-3 mx-3">
              Encrypt your data and store it securely on decentralized storage
              networks like IPFS or Filecoin.
            </p>
          </section>

          <section
            className="about-step-3 col-md-6 d-flex  flex-md-column align-items-center align-items-md-start justify-content-center p-3 m-md-0 m-1"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <AppAboutProcess
              imageSrc={BatchAssignSymbol}
              className="app-about-process mx-md-3"
            />

            <p className="brand-small-text-2 my-2 m-0 py-3 mx-3">
              Designate multiple beneficiaries for your assets and files and
              provide them with recovery methods such as passwords, biometrics
              or social proofs.
            </p>
          </section>

          <section
            className="about-step-4 col-md-6 d-flex  flex-md-column align-items-center align-items-md-start justify-content-center p-3 m-md-0 m-1"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <AppAboutProcess
              imageSrc={PeaceSymbol}
              className="app-about-process mx-md-3"
            />

            <p className="brand-small-text-2 my-2 m-0 py-3 mx-3">
              Enjoy peace of mind knowing that your digital wealth will be
              transferred to your loved ones according to your wishes.
            </p>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export default AppAbout;