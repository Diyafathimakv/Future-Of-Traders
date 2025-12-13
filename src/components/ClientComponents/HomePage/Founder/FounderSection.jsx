"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./FounderSection.module.css";

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const FounderSection = () => {
    return (
        <section className={styles.founderSection}>
            <div className={styles.container}>
                {/* Visual Side (Left) */}
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Placeholder Image - Replace when user provides real one */}
                    <Image
                        src="/pixabay_oldtimer.jpg" // Temporarily reuse an existing classy image or generic placeholder
                        alt="Diya Fathima"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    {/* Gradient Overlay for text readability if needed, or style */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
                </motion.div>

                {/* Text Side (Right) */}
                <motion.div
                    className={styles.contentWrapper}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                >
                    <motion.span variants={itemVariants} className={styles.label}>THE FOUNDER</motion.span>

                    <motion.h2 variants={itemVariants} className={styles.founderName}>Shefi Kappungal</motion.h2>

                    <motion.h3 variants={itemVariants} className={styles.subtitle}>
                        Founder of FOT Groups.<br />
                        The man behind it all.
                    </motion.h3>

                    <motion.p variants={itemVariants} className={styles.description}>
                        Visionary leadership meets unyielding passion. Driving innovation across industries, crafting experiences that resonate with elegance and purpose. A legacy built on the foundation of excellence.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default FounderSection;
