import React from 'react';
import Style from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={Style.landing}>
      <div className={Style.landingTitleContainer}>
        <h2>Intégrateur</h2>
        <h2>Front end</h2>
        <h2>developpeur web</h2>
      </div>
    </div>
  );
};
export default Landing;
