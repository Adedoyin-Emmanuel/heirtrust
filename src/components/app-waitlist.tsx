import React from "react";
import { sanitizeEmail } from "../apis/utilities";
import connectToBackend from "../apis/waitlist";
import Swal from "sweetalert2";
const inputStyles = {
  boxShadow: "none",
};
const AppWailist = () => {
  const handleWaitlistButtonClick = (e: any) => {
    e.preventDefault();

    const userEmail = e.currentTarget.elements[0].value;

    //check if email is valid
    if (sanitizeEmail(userEmail)) {
      //email is valid
      const awaitResponse = async () => {
        const response = await connectToBackend(userEmail);

        console.log(response);
      };

      try {
        awaitResponse();
      } catch (err: any) {
        console.log(err);
      }
    } else {
      Swal.fire({
        toast: true,
        text: "Invalid email address",
        icon: "error",
        showConfirmButton: false,
        position: "top",
        timer: 2000,
      });
    }
  };

  return (
    <React.Fragment>
      <section className="app-waitlist-section  width-toggle-8 m-auto">
        <form
          className="input-group"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            handleWaitlistButtonClick(e);
          }}
        >
          <input
            type="email"
            className="form-control brand-small-text-2 p-3 width-toggle-8 main-waitlist-input"
            placeholder="Enter your email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon-2"
            style={inputStyles}
            name="email"
            autoComplete={"false"}
          />
          <button
            className=" brand-small-text text-capitalize brand-button brand-bg-secondary-green main-waitlist-button p-2 "
            id="basic-addon-2"
          >
            join waitlist
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AppWailist;
