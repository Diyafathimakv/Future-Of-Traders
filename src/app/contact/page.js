"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, HoverScale } from "../components/MotionWrapper";
import Background from "../../components/ClientComponents/HomePage/BackGround/Background";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./contact.module.css";

export default function ContactPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["/contact1.jpeg", "/contact2.jpeg"];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            <Background />

            <main className={styles.container}>
                <FadeIn>
                    <HoverScale scale={1.05}>
                        <Link href="/" style={{
                            display: "inline-block",
                            marginBottom: "2rem",
                            padding: "0.8rem 1.5rem",
                            border: "1px solid #D94D4D",
                            borderRadius: "4px",
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: "500",
                            letterSpacing: "0.5px"
                        }}>
                            ← Back to Home
                        </Link>
                    </HoverScale>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 className={styles.heroTitle}>
                        Contact FOT Groups
                    </h1>
                    <p style={{
                        fontSize: "1.2rem",
                        color: "#ccc",
                        marginBottom: "4rem",
                        fontWeight: "300",
                        maxWidth: "600px"
                    }}>
                        Reach out to us directly. We are here to connect and collaborate.
                    </p>
                </FadeIn>

                <StaggerContainer className={styles.contactGrid}>

                    {/* Phone */}
                    <FadeIn className="contact-card">
                        <HoverScale className="h-full" style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            height: "100%"
                        }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>📞</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Phone</h3>
                            <p style={{ color: "#D4AF37", fontSize: "1.2rem", fontWeight: "600" }}>+966 56 486 8635</p>
                            <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "0.5rem" }}>Mon-Fri, 9am - 6pm</p>
                        </HoverScale>
                    </FadeIn>

                    {/* Email */}
                    <FadeIn className="contact-card">
                        <HoverScale className="h-full" style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            height: "100%"
                        }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>✉️</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Email</h3>
                            <a href="mailto:info@fotgroups.com" style={{
                                color: "#D4AF37",
                                fontSize: "1.2rem",
                                fontWeight: "600",
                                textDecoration: "none",
                                borderBottom: "1px solid #D4AF37",
                                paddingBottom: "2px"
                            }}>
                                info@fotgroups.com
                            </a>
                            <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "0.5rem" }}>For all inquiries</p>
                        </HoverScale>
                    </FadeIn>

                    {/* Address */}
                    <FadeIn className="contact-card">
                        <HoverScale className="h-full" style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            height: "100%"
                        }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>🏢</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Headquarters</h3>
                            <p style={{ color: "#ccc", fontSize: "1.1rem", lineHeight: "1.5" }}>
                                Al Waleed Ibn Hisham Ibn Muawiyah<br />
                                Ar Rayaan dist<br />
                                Jeddah<br />
                                Saudi Arabia
                            </p>
                        </HoverScale>
                    </FadeIn>

                </StaggerContainer>

                {/* ASMAK CLUB Experience & Carousel Section */}
                <FadeIn delay={0.4}>
                    <div className={styles.asmakSection}>
                        <div className={styles.asmakContent}>

                            {/* Left Content */}
                            <div>
                                <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>
                                    Visit <span style={{ color: "#D4AF37" }}>ASMAK CLUB</span>
                                </h2>
                                <p style={{ color: "#ccc", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "2rem" }}>
                                    Experience the finest seafood in a premium setting. Witness transparency and freshness like never before.
                                </p>

                                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2rem" }}>
                                    <span style={{ fontSize: "1.5rem" }}>📍</span>
                                    <a href="https://maps.app.goo.gl/WGFS1tLWT1ZyxPda7?g_st=ipc" target="_blank" rel="noopener noreferrer" style={{
                                        color: "#D94D4D",
                                        fontWeight: "bold",
                                        fontSize: "1.1rem",
                                        textDecoration: "none",
                                        borderBottom: "1px solid #D94D4D",
                                        paddingBottom: "2px",
                                        transition: "all 0.3s ease"
                                    }}>
                                        Open in Google Maps →
                                    </a>
                                </div>
                            </div>

                            {/* Right Carousel */}
                            <div className={styles.carouselContainer}>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ position: "absolute", inset: 0 }}
                                    >
                                        <Image
                                            src={images[currentImageIndex]}
                                            alt={`Asmak Club View ${currentImageIndex + 1}`}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Carousel Controls */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "20px",
                                    zIndex: 10,
                                    display: "flex",
                                    gap: "10px"
                                }}>
                                    <button
                                        onClick={nextImage}
                                        style={{
                                            background: "#D4AF37",
                                            color: "#000",
                                            border: "none",
                                            padding: "0.8rem 1.5rem",
                                            borderRadius: "30px",
                                            cursor: "pointer",
                                            fontWeight: "bold",
                                            fontFamily: "'Montserrat', sans-serif",
                                            boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
                                            transition: "transform 0.2s"
                                        }}
                                        onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                                        onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                                    >
                                        Next Photo →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </main>
        </div>
    );
}
