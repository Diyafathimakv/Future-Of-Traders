"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const images = [
    "/bg_dark_fusion_trinity.png",
    "/pixabay_oldtimer.jpg",
    "/pixabay_mechanism.jpg",
];

const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                {/* LEFT: MASSIVE TYPOGRAPHY */}
                <motion.div
                    className={styles.bigTypeContainer}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decorative Circle near Title */}
                    <div className={styles.circleShape} style={{ top: '-40px', left: '-20px', borderColor: '#e0e0e0' }} />

                    <h1 className={styles.bigHeading}>
                        QUALITY <br />
                        <span className={styles.outlineText}>INNOVATION</span>
                    </h1>
                    <h1 className={styles.bigHeading}>
                        TRUST
                    </h1>
                </motion.div>

                {/* RIGHT: INFO & STATIC IMAGE */}
                <motion.div
                    className={styles.contentColumn}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div>
                        <span className={styles.label}>EST. SAUDI ARABIA</span>
                        <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', marginBottom: '15px' }}>FOT Group</h2>

                        <motion.p
                            className={styles.paragraph}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ margin: "-10%" }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.03 } },
                                hidden: {}
                            }}
                        >
                            {"A multi-vertical brand collective dedicated to enriching everyday experiences. From flavour-rich seafood dining to precision-crafted accessories, our brands reflect a passion for quality and a promise of trust.".split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                    }}
                                    style={{ display: "inline-block", marginRight: "5px" }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.p>
                    </div>

                    <button className={styles.moreBtn}>
                        More About Us
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>


                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
