import React from 'react';
import HeroSection from './components/heroSection/HeroSection';
import LatestProducts from './components/latestProducts/LatestProducts';
import Deal from './components/deal/Deal';
import Countdown from 'react-countdown';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LatestProducts />
      <Countdown date={Date.now() + 6000000000} renderer={Deal} />

    </>
  );
};

export default Home;
