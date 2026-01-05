"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { getHasSeenSplash, setHasSeenSplash } from "@/utils/splashState";
import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

export default function SplashScreen({ onFinish }) {
    // Initialize immediately based on module state
    const [isVisible, setIsVisible] = useState(!getHasSeenSplash());

    useEffect(() => {
        if (!isVisible) {
            // If already seen (isVisible is false), trigger finish immediately
            if (onFinish) onFinish();
            return;
        }

        // Timer to hide splash
        const timer = setTimeout(() => {
            setIsVisible(false);
            setHasSeenSplash(true); // Mark as seen in module state
            if (onFinish) onFinish();
        }, 5500);

        return () => clearTimeout(timer);
    }, [onFinish, isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.splashContainer}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.0 } }}
                >
                    <div className={styles.logoContainer}>
                        {/* F - Slides in from Left */}
                        <motion.div
                            className={styles.logoPart}
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 1.0, // Wait for O to land
                                duration: 1.2,
                                type: "spring",
                                stiffness: 60,
                                damping: 15
                            }}
                            style={{ marginRight: '-10px' }}
                        >
                            <Image
                                src="/FOT F (2).png"
                                alt="F"
                                width={100}
                                height={100}
                                style={{ objectFit: "contain" }}
                            />
                        </motion.div>

                        {/* O - Drops from Top */}
                        <motion.div
                            className={styles.logoPart}
                            initial={{ y: "-100vh", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                type: "spring",
                                stiffness: 80,
                                damping: 12
                            }}
                            style={{ zIndex: 10 }}
                        >
                            <Image
                                src="/FOT O (2).png"
                                alt="O"
                                width={100}
                                height={100}
                                style={{ objectFit: "contain" }}
                            />
                        </motion.div>

                        {/* T - Slides in from Right */}
                        <motion.div
                            className={styles.logoPart}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 1.0,
                                duration: 1.2,
                                type: "spring",
                                stiffness: 60,
                                damping: 15
                            }}
                        >
                            <Image
                                src="/FOT T (2).png"
                                alt="T"
                                width={100}
                                height={100}
                                style={{ objectFit: "contain" }}
                            />
                        </motion.div>
                    </div>

                    {/* GROUPS - Fades in below */}
                    <motion.div
                        className={styles.groupsContainer}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 2.5, // Appears after FOT is assembled
                            duration: 1.0,
                            ease: "easeOut"
                        }}
                        style={{ marginTop: '-80px' }} // Adjust proximity to FOT
                    >
                        <Image
                            src="/FOT GROUPS (2).png"
                            alt="GROUPS"
                            width={320} // Made bigger
                            height={100}
                            style={{ objectFit: "contain" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
