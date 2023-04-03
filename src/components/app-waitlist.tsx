import React from "react";

const inputStyles = {
    "boxShadow": "none"
}
const AppWailist = () => {
  return (
    <React.Fragment>
      <section className="app-waitlist-section  width-toggle-8 m-auto">
        <section className="input-group">
          <input
            type="text"
            className="form-control brand-small-text-2 p-3 width-toggle-8 main-waitlist-input"
            placeholder="Enter your email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon-2"
            style={inputStyles}
          />
          <button
            className=" brand-small-text text-capitalize brand-button brand-bg-primary-green main-waitlist-button p-2 " id="basic-addon-2" 
          >
            join waitlist
          </button>
        </section>
      </section>
    </React.Fragment>
  );
};

export default AppWailist;
