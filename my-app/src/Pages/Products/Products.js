import React from 'react'
import {  HomeObjFour, HomeObjThree, HomeObjTwo } from './Data';
import { InfoSection, Pricing } from '../../Components';


const Home = () => {
  return (
    <>
  
    <InfoSection {...HomeObjTwo} />
    <InfoSection {...HomeObjThree} />
    <Pricing />
    <InfoSection {...HomeObjFour} />
    
    </>
  );
};

export default Home;