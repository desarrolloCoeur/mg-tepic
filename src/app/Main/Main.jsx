'use client'
import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Review from '../components/Review'
import Contact from '../components/Contact'
import { useMemo } from "react";
import dynamic from "next/dynamic.js";
import 'leaflet/dist/leaflet.css';
import { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      mirror: false,
    });
  }, []);

  const Map = useMemo(() => dynamic(
    () => import('@/app/components/Location.jsx'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  return (
    <div className='w-full bg-[#101010]'>
      <Hero/>
      <Service/>
      <Review/>
      <Contact/>
      <Map/>
    </div>
  )
}

export default Home
