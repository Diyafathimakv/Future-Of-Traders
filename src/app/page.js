"use client";

import styles from "./page.module.css";
import HeroSection from "../components/ClientComponents/HomePage/HeroSection/HeroSection";
import Slides from "../components/ClientComponents/HomePage/Slides/Slides";
import AboutSection from "../components/ClientComponents/HomePage/About/AboutSection";
import GallerySection from "../components/ClientComponents/HomePage/Gallery/GallerySection";
import BrandsSection from "../components/ClientComponents/HomePage/Brands/BrandsSection";
import FounderSection from "../components/ClientComponents/HomePage/Founder/FounderSection";
import Background from "../components/ClientComponents/HomePage/BackGround/Background";
import SplashScreen from "../components/ClientComponents/SplashScreen/SplashScreen";
import { useState } from "react";

export default function Home() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <div className={styles.page}>
      <SplashScreen onFinish={() => setIsSplashFinished(true)} />
      <Background />

      <main style={{ marginTop: "100px", width: "100%" }}>
        {/* Pass state to Hero Section */}
        <HeroSection startAnimation={isSplashFinished} />
        <Slides />
        <AboutSection />
        <GallerySection />
        <BrandsSection />
        <FounderSection />
      </main>
    </div>
  );
}