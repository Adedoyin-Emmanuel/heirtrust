import React from "react";
import AwardFrame from "./../assets/images/award-frame.svg";
//import ConfettiImage from "./../assets/images/confetti.png";

interface AppAwardProps {
  className?: string;
}
const AppAwardFrame = ({ className }: AppAwardProps): JSX.Element => {
  return (
    <React.Fragment>
      <section className={`award-frame ${className}`}>
        <section className="award-image">
          <img src={AwardFrame} alt="award frame" className="img-fluid" />
        </section>
      </section>
    </React.Fragment>
  );
};

export default AppAwardFrame;
