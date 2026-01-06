"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HeroSection.module.css";
import { useEffect, useState } from "react";

const HeroSection = ({ startAnimation = false }) => {
    // We can also double check mount state, but prop is cleaner
    return (
        <div className={styles.heroContainer}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <p className={styles.heroText}>Redefining Excellence <br /> Across Industries</p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className={styles.heroSubText}>
                        Driven by Quality. Defined by Trust.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                className={styles.logoContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className={styles.logoWrapper}>
                    <Image src="/Asmak new logo bg.png" alt="Asmak" fill style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.logoWrapper}>
                    <Image src="/fotmatt.png" alt="Fotmat" fill style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.logoWrapper}>
                    <Image src="/Standby Hub logo bg.png" alt="Standby Hub" fill style={{ objectFit: 'contain' }} />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
