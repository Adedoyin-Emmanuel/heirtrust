import React from "react";

interface heroWaveProps {
  className: string;
}
const AppMailistWave = ({ className }: heroWaveProps): JSX.Element => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
        className={`hero-wave p-0 m-0 ${className}`}
        
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L720,96L1440,224L1440,0L720,0L0,0Z"
        ></path>
      </svg>
    </React.Fragment>
  );
};

export default AppMailistWave;
