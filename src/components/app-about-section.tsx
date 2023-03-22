import React from "react";
import AppButton from "./app-button";

const AppAbout = (): JSX.Element => 
{
    const handleClick = ():void =>
    {
        //pass
    }
    
  return (
    <React.Fragment>
      <section className="app-about">
        <section className="about-text">
          <p className="text-capitalize fw-bold">About</p>
          <h3 className="fs-3 text-capitalize">all you need to get started</h3>
          
          
          <p>
            HeirTrust is a blockchain based multichain will/testament, backup, recovery and iheritance platform for crypto assets and files. It allows you to create and manage your wills for your digital assets and files on multiple blockchain such as Etherum, Near, BSC and more.
          </p>
          
          <section>
            <AppButton text="connect wallet" className="brand-button" onClick={handleClick}/>
          </section>
        </section>
        
        
        <section className="about-steps">
            <section className="about-step-1">
                <p>Set up smart contracts that execute your wills automatically when certain conditions are met</p>
            </section>
            
            <section className="about-step-2">
                <p>Encrypt your data and store it securely on decentralized storage networks like IPFS or Filecoin</p>
            </section>
            
            <section className="about-step-3">
                <p>Designate multiple beneficiaries for your assets and files and provide them with recovery methods such as passwords, biometrics or social proofs</p>
            </section>
            
            <section className="about-step-4">
                <p>Enjoy peace of mind knowing that your digital wealth will be transferred to your loved ones according to your wishes.</p>
            </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export default AppAbout;