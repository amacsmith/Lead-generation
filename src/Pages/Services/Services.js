import React from 'react'
import {  HomeObjFour } from './Data';
import { InfoSection, Pricing } from '../../Components';


const Home = () => {
  return (
    <>
  
    <Pricing />
    <InfoSection {...HomeObjFour} />
    
    </>
  );
};

export default Home;