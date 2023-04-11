import React from "react";

const inputStyles = {
    "boxShadow": "none"
}
const AppWailist = () => {

const handleWaitlistButtonClick = (e: React.FormEvent<HTMLFormElement>) =>
{
    e.preventDefault();
    
    console.log(e);
}
  return (
    <React.Fragment>
      <section className="app-waitlist-section  width-toggle-8 m-auto">
        <form className="input-group" onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{handleWaitlistButtonClick(e)}}>
          <input
            type="text"
            className="form-control brand-small-text-2 p-3 width-toggle-8 main-waitlist-input"
            placeholder="Enter your email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon-2"
            style={inputStyles}
          />
          <button
            className=" brand-small-text text-capitalize brand-button brand-bg-secondary-green main-waitlist-button p-2 " id="basic-addon-2" 
          >
            join waitlist
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AppWailist;
