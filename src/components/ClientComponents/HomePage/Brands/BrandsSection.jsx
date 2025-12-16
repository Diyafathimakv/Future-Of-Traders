"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import styles from "./BrandsSection.module.css";
import Link from "next/link";

// Brand Data
const brands = [
    {
        id: "dining",
        name: "Asmak",
        src: "/Asmak new logo bg.png",
        // scale removed, handled in CSS
        brief: "Experience the finest seafood delicacies sourced from pristine waters. A culinary journey of flavor and tradition."
    },
    {
        id: "auto",
        name: "FOTMAT",
        src: "/Fotmatt.png",
        brief: "Premium automotive accessories designed for durability and style. Elevate your drive with precision-crafted carmats."
    },
    {
        id: "parts",
        name: "Standby Hub",
        src: "/Standby Hub logo bg.png",
        brief: "Your trusted source for high-quality spare parts and accessories. Reliability meets innovation at Standby Hub."
    }
];

const BrandsSection = () => {
    const [activeId, setActiveId] = useState(null);
    const sectionRef = useRef(null);

    // Scroll Progress Logic
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 80%", "center center"] // Starts when section enters, finishes when centered
    });

    // 1. Curtain Animation (White layer rising up)
    const curtainHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // 2. Color Interpolation: Section Starts WHITE (#f7f7f7) -> Curtain becomes RED (#D94D4D)
    // So Text/Button must go from DARK/GOLD -> WHITE
    const headingColor = useTransform(scrollYProgress, [0, 0.5], ["#D4AF37", "#ffffff"]); // Gold -> White

    // Button Colors
    const btnBorder = useTransform(scrollYProgress, [0, 0.5], ["#D4AF37", "#ffffff"]);   // Gold -> White
    const btnText = useTransform(scrollYProgress, [0, 0.5], ["#D4AF37", "#ffffff"]);     // Gold -> White

    return (
        <section ref={sectionRef} className={styles.brandsSection}>
            {/* The Moving Curtain (Red Layer) */}
            <motion.div
                className={styles.curtainOverlay}
                style={{ height: curtainHeight }}
            />

            <div className={styles.sectionBgMark} style={{ zIndex: 0 }}>FOT</div>

            <div className={styles.container} style={{ position: 'relative', zIndex: 2 }}>
                {/* Header */}
                <div className={styles.headingWrapper}>
                    <motion.h2
                        className={styles.mainHeading}
                        style={{ color: headingColor }}
                    >
                        A Legacy of Excellence
                    </motion.h2>
                </div>

                {/* Cards Row */}
                <div className={styles.cardsContainer}>
                    {brands.map((brand) => (
                        <motion.div
                            key={brand.id}
                            className={styles.brandCard}
                            onHoverStart={() => setActiveId(brand.id)}
                            onHoverEnd={() => setActiveId(null)}
                            onTap={() => setActiveId(activeId === brand.id ? null : brand.id)}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            layout
                        >
                            <motion.div layout className={styles.cardInitial}>
                                <div className={styles.rawLogoWrapper}>
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className={brand.id === 'dining' ? styles.largeLogo : ''}
                                        style={{
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                                <h3 className={styles.brandName}>{brand.name}</h3>
                            </motion.div>

                            <AnimatePresence>
                                {activeId === brand.id && (
                                    <motion.div
                                        className={styles.detailsContent}
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: "auto", marginTop: 15 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{brand.brief}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.button
                    className={styles.exploreBtn}
                    style={{ borderColor: btnBorder, color: btnText }} // Dynamic base color
                    whileHover={{ scale: 1.05, color: "#D4AF37", borderColor: "#D4AF37" }} // Force Gold on Hover
                    transition={{ duration: 0.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/brands" style={{ textDecoration: 'none', color: "#f7f7f7" }}>Explore Brands <span>&rarr;</span></Link>
                </motion.button>
            </div>
        </section>
    );
};

export default BrandsSection;
