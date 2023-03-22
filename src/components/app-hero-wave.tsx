import React from "react";

interface heroWaveProps {
  className: string;
}
const HeroWave = ({ className }: heroWaveProps): JSX.Element => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
        className={`hero-wave p-0 m-0 ${className}`}
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,0L1440,128L1440,320L0,320Z"
        ></path>
      </svg>

    </React.Fragment>
  );
};

export default HeroWave;
