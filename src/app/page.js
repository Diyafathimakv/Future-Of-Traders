import styles from "./page.module.css";
import Header from "../components/Header/Header";
import AnimatedBackground from "../components/ClientComponents/HomePage/AnimatedBackground/AnimatedBackground";
import HeroSection from "../components/ClientComponents/HomePage/HeroSection/HeroSection";
import Slides from "../components/ClientComponents/HomePage/Slides/Slides";
import AboutSection from "../components/ClientComponents/HomePage/About/AboutSection";
import GallerySection from "../components/ClientComponents/HomePage/Gallery/GallerySection";
import BrandsSection from "../components/ClientComponents/HomePage/Brands/BrandsSection";
import FounderSection from "../components/ClientComponents/HomePage/Founder/FounderSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <AnimatedBackground />
      <Header />
      <main style={{ marginTop: "100px", width: "100%" }}>
        {/* Hero Section (Client Component) */}
        <HeroSection />
        <Slides />
        <AboutSection />
        <GallerySection />
        <BrandsSection />
        <FounderSection />

      </main>
      <Footer />
    </div>
  );
}