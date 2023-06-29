import React from 'react';
import { MainBanner } from './MainBanner';
import { MainNN } from './MainNN';
import { MainHostel } from './MainHostel';
import { MainCafe } from './MainCafe';
import { Footer } from '../../Components/Footer';

export const MainPage = () => {
  return (
    <>
        <MainBanner />
        <MainNN />
        <MainHostel />
        <MainCafe />
        <Footer />
    </>
  )
}
