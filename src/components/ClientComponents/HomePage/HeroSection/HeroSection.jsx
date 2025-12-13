"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <div className={styles.heroContainer}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <p className={styles.heroText}>Redefining Excellence <br /> Across Industries</p>
                <motion.p
                    className={styles.heroSubText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    Driven by Quality. Defined by Trust.
                </motion.p>
            </motion.div>

            <motion.div
                className={styles.logoContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className={styles.logoWrapper}>
                    <Image src="/Asmak logo bg.png" alt="Asmak" fill style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.logoWrapper}>
                    <Image src="/Matify logo bg.png" alt="Matify" fill style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.logoWrapper}>
                    <Image src="/Standby Hub logo bg.png" alt="Standby Hub" fill style={{ objectFit: 'contain' }} />
                </div>
            </motion.div>
        </div>
    );
};

export default HeroSection;
