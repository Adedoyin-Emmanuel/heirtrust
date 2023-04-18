import React, { useState, useEffect } from "react";
import AppInput from "./app-input";
import AppButton from "./app-button";
import AppAwardFrame from "./app-award-frame";
import AppMailistWave from "./app-mailist-wave";
import Swal from "sweetalert2";
import { sanitizeEmail } from "../apis/utilities";
import connectToBackend from "../apis/waitlist";

const AppMailist = (): JSX.Element => {
  const handleWaitlistButtonClick = (e: any) => {
    e.preventDefault();

    const userEmail = e.currentTarget.elements[1].value;
    const userName = e.currentTarget.elements[0].value;

    if (!userName || !userEmail || userName === "") {
      Swal.fire({
        toast: true,
        text: "Username and Email are required",
        icon: "error",
        showConfirmButton: false,
        position: "top",
        timer: 2000,
      });
      return;
    }
    //check if email is valid
    if (sanitizeEmail(userEmail)) {
      //email is valid
      const awaitResponse = async () => {
        const response: any = await connectToBackend(userEmail, userName);

        if (
          response.status === 200 &&
          response.body.message.includes(
            "You have been added to the waitlist"
          ) &&
          response.addedToWaitlist === true
        ) {
          localStorage.setItem("showConfetti", "true");

          setTimeout(() => {
            localStorage.setItem("showConfetti", "false");
          }, 7000);

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
          response.body.message.includes("Contact already exist")
        ) {
          Swal.fire({
            title: "Error",
            icon: "warning",
            text: "You are already on the waitlist!",
            showConfirmButton: true,
            confirmButtonText: "Proceed",
            confirmButtonColor: "#3ca062",
            position: "center",
          });
        } else if (
          response.status === 400 &&
          response.body.message.includes("Contact already exist")
        ) {
          Swal.fire({
            title: "Error",
            icon: "warning",
            text: "You are already on the waitlist!",
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

  return (
    <React.Fragment>
      <AppMailistWave className="p-0" />
      <section
        className="container-fluid d-flex flex-column flex-md-row align-items-center  justify-content-around"
        data-aos="zoom-in-up"
        data-aos-duration="300"
        id="app_waitlist"
      >
        <section className="award-win-section d-flex flex-column align-items-center justify-content-center">
          <AppAwardFrame className="my-2" />
          <h6 className="text-capitalize fs-6 fw-bold my-2">
            honourable price mention in NEAR metabuild season III
          </h6>
        </section>
        <section className="maillist-section my-5 my-md-0">
          <h1 className="fw-bold fs-1 my-3 text-capitalize text-center">
            join our waitlist list{" "}
          </h1>
          <p className="brand-small-text text-dark text-capitalize text-start text-md-center">
            join the waitlist to get notified when we launch!
          </p>
          <form
            className="email-input d-flex align-items-center flex-column"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              handleWaitlistButtonClick(e);
            }}
          >
            <AppInput
              type="text"
              className="my-3"
              placeHolder="Enter your name"
              aria-label="Recipient's Email"
              aria-describedby="basic-addon-2"
              name="username"
              autoComplete={"false"}
            />
            <AppInput
              type="email"
              className="m-3"
              placeHolder="Enter your email"
              aria-label="Recipient's Email"
              aria-describedby="basic-addon-2"
              name="email"
              autoComplete={"false"}
            />

            <AppButton
              text="join waitlist"
              className="text-capitalize app-waitlist-button text-center p-2 "
            />
          </form>
        </section>
      </section>
      <br />
      <br />
    </React.Fragment>
  );
};

export default AppMailist;
