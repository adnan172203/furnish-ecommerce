import React from 'react';
import Countdown from 'react-countdown';
import HeroSection from './components/heroSection/HeroSection';
import LatestProducts from './components/latestProducts/LatestProducts';
import Deal from './components/deal/Deal';
import BestSelling from './components/bestSelling/BestSelling';
import ItemOnSale from './components/itemOnSale/ItemOnSale';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <LatestProducts />
      <Countdown date={Date.now() + 100000000} renderer={Deal} />
      <BestSelling />
      <ItemOnSale />
      <Footer/>
    </>
  );
};

export default Home;
