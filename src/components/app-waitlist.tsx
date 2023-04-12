import React, {useState, useEffect} from "react";
import { sanitizeEmail } from "../apis/utilities";
import connectToBackend from "../apis/waitlist";
import Swal from "sweetalert2";
import Confetti from 'react-confetti';

const inputStyles = {
  boxShadow: "none",
};
const AppWailist = () => {

  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const handleWaitlistButtonClick = (e: any) => {
    e.preventDefault();

    const userEmail = e.currentTarget.elements[0].value;

    //check if email is valid
    if (sanitizeEmail(userEmail)) {
      //email is valid
      const awaitResponse = async () => {
        const response:any = await connectToBackend(userEmail);

        if (
          response.status === 200 &&
          response.body.message.includes(
            "You have been added to the waitlist"
          ) &&
          response.addedToWaitlist === true
        ) {
          setShowConfetti(true);
          Swal.fire({
            title: "Congrats",
            icon: "success",
            text: response.body.message,
            showConfirmButton: true,
            confirmButtonText: "Proceed",
            confirmButtonColor: "#3ca062",
            position: "center",
          });
        } else if (
          response.status === 409 &&
          response.body.message.includes("you are already on the waitlist")
        ) {
          Swal.fire({
            title: "Error",
            icon: "warning",
            text: response.body.message,
            showConfirmButton: true,
            confirmButtonText: "Proceed",
            confirmButtonColor: "#3ca062",
            position: "center",
          });
        }else{
        
           Swal.fire({
             title: "Fatal Error",
             icon: "error",
             text: "An unknown error occurred",
             showConfirmButton: true,
             confirmButtonText: "Proceed",
             confirmButtonColor: "#3ca062",
             position: "center",
           });
        }
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
  
    useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);

      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  
  return (
    <React.Fragment>
      <section className="app-waitlist-section  width-toggle-8 m-auto">
        {showConfetti && <Confetti  />}
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
            {showConfetti ? "Joined Waitlist" : "join waitlist"}
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default AppWailist;
