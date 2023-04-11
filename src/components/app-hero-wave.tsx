import React from "react";

interface heroWaveProps {
  className: string;
}
const HeroWave = ({ className }: heroWaveProps): JSX.Element => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={`hero-wave p-0 m-0 ${className}`}
      >
        <path
          fill="#062955"
          fillOpacity="1"
          d="M0,256L60,213.3C120,171,240,85,360,80C480,75,600,149,720,197.3C840,245,960,267,1080,256C1200,245,1320,203,1380,181.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </React.Fragment>
  );
};

export default HeroWave;
