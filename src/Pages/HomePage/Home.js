import React from 'react'
import { HomeObj0ne, HomeObjFour, HomeObjThree, HomeObjTwo } from './Data';
import { InfoSection, Pricing } from '../../Components';


const Home = () => {
  return (
    <>
    <InfoSection {...HomeObj0ne} />
    <InfoSection {...HomeObjTwo} />
    <InfoSection {...HomeObjThree} />
    <Pricing />
    <InfoSection {...HomeObjFour} />
    
    </>
  );
};

export default Home;