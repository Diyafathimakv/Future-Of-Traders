"use client";

import Image from "next/image";
import styles from "./Brands.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.8,
            ease: [0.25, 1, 0.5, 1]
        }
    }
};

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5
        }
    }
};

const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

export default function Brands() {
    // Hero Animations (Entrance)
    const containerRef = useRef(null);

    // Scroll Stack Section Logic
    const scrollSectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollSectionRef,
        offset: ["start end", "end end"]
    });

    // Transforms for Stack Effect
    // Text scales down from large to small (no enlarging)
    const textScale = useTransform(scrollYProgress, [0, 1], [5, 1]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

    // Cards converge to center
    // Card 1: From Left
    const xCard1 = useTransform(scrollYProgress, [0.4, 0.9], [-1200, -20]);
    const rCard1 = useTransform(scrollYProgress, [0.4, 0.9], [-30, -5]);
    const oCard1 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    // Card 2: From Right
    const xCard2 = useTransform(scrollYProgress, [0.5, 1], [1200, 20]);
    const rCard2 = useTransform(scrollYProgress, [0.5, 1], [30, 5]);
    const oCard2 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

    // Card 3: From Bottom
    const yCard3 = useTransform(scrollYProgress, [0.6, 1], [800, 0]);
    const oCard3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    // Card 4: From top
    const yCard4 = useTransform(scrollYProgress, [0.6, 1], [-800, 0]);
    const oCard4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);



    // Scroll to Showcase Logic
    const fotmatRef = useRef(null);
    const asmakRef = useRef(null);
    const standbyRef = useRef(null);

    const scrollToFotmat = () => fotmatRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToAsmak = () => asmakRef.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToStandby = () => standbyRef.current?.scrollIntoView({ behavior: 'smooth' });

    // Stack Interaction Logic (Mobile/Tap)
    const [activeStackCard, setActiveStackCard] = useState(null);

    const handleStackClick = (cardId, scrollAction) => {
        // If it's already active (on top), perform the action (scroll)
        // Or if it's the only interaction, just scroll. 
        // We checking if it matches our 'active' state.
        if (activeStackCard === cardId) {
            scrollAction();
        } else {
            // Otherwise, bring it to front
            setActiveStackCard(cardId);
        }
    };

    return (
        <div>
            {/* Hero Section - Static / Entrance Only */}
            <motion.div
                className={styles.heroGrid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                <motion.div className={styles.gridItem} variants={imageVariants}>
                    <Image src="https://cdn.pixabay.com/photo/2024/09/20/13/27/ai-generated-9061481_1280.png" alt="FOTMAT" fill style={{ objectFit: 'cover' }} priority />
                </motion.div>
                <motion.div className={styles.gridItem} variants={imageVariants}>
                    <Image src="/carmat n.png" alt="Asmak" fill style={{ objectFit: 'cover' }} priority />
                </motion.div>
                <motion.div className={styles.gridItem} variants={imageVariants}>
                    <Image src="/spareparts n1.png" alt="Standby Hub" fill style={{ objectFit: 'cover' }} priority />
                </motion.div>

                <motion.div className={styles.heroHeading} variants={textContainerVariants}>
                    <motion.h1 style={{ color: "#D4AF37" }} variants={textItemVariants}>FUTURE OF TRADERS</motion.h1>
                    <motion.p variants={textItemVariants}>
                        Future of Traders (FOT), rooted in the heart of <strong>Saudi Arabia</strong>, stands at the forefront of diverse excellence, bridging the gap between premium tradition and modern innovation. From the precision engineering of <strong>FOTMAT</strong> automotive accessories to the fresh culinary delights of <strong>Asmak</strong> seafood and the reliable durability of <strong>Standby Hub</strong> spare parts, we are dedicated to setting new benchmarks in quality.
                        <br /><br />
                        Experience the seamless synergy of our world-class brands.
                    </motion.p>
                    <motion.div className={styles.scrollHint} variants={textItemVariants}>
                        Scroll to discover our brands &darr;
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Stack Section */}
            <div ref={scrollSectionRef} className={styles.scrollSection}>
                <div className={styles.stickyWrapper}>
                    <motion.div className={styles.bigText} style={{ scale: textScale, opacity: textOpacity }}>
                        BRANDS
                    </motion.div>

                    {/* Card 1: STANDBY HUB */}
                    <motion.div
                        className={styles.stackCard}
                        style={{
                            x: xCard1,
                            rotate: rCard1,
                            opacity: oCard1,
                            zIndex: activeStackCard === 'standby' ? 100 : 1
                        }}
                        onClick={() => handleStackClick('standby', scrollToStandby)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src="/spareparts n1.png" alt="StandBy Hub" fill style={{ objectFit: 'cover' }} />
                    </motion.div>

                    {/* Card 2: FotMat */}
                    <motion.div
                        className={styles.stackCard}
                        style={{
                            x: xCard2,
                            rotate: rCard2,
                            opacity: oCard2,
                            zIndex: activeStackCard === 'fotmat' ? 100 : 2
                        }}
                        onClick={() => handleStackClick('fotmat', scrollToFotmat)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src="/carmat n.png" alt="FotMat" fill style={{ objectFit: 'cover' }} />
                    </motion.div>

                    {/* Card 3: Asmak */}
                    <motion.div
                        className={styles.stackCard}
                        style={{
                            y: yCard3,
                            opacity: oCard3,
                            zIndex: activeStackCard === 'asmak' ? 100 : 3
                        }}
                        onClick={() => handleStackClick('asmak', scrollToAsmak)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src="https://cdn.pixabay.com/photo/2020/03/21/04/00/shrimp-4952607_1280.jpg" alt="Asmak" fill style={{ objectFit: 'cover' }} />
                    </motion.div>

                    {/* Card 4: Standby Hub (Extra) */}
                    <motion.div className={styles.stackCard} style={{ y: yCard4, opacity: oCard4, zIndex: 4 }} onClick={scrollToAsmak}>
                        <Image src="https://cdn.pixabay.com/photo/2024/09/20/13/27/ai-generated-9061481_1280.png" alt="Standby Hub" fill style={{ objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </div>

            {/* FOTMAT Showcase Section */}
            <div ref={fotmatRef} className={styles.brandShowcase}>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>FOTMAT</h2>
                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <Image src="/carmat n.png" alt="FOTMAT Showcase" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
                        Precision engineering meets automotive luxury. FOTMAT delivers high-quality car accessories designed for durability and style.
                    </p>
                </motion.div>
            </div>

            {/* Asmak Showcase Section */}
            <div ref={asmakRef} className={styles.brandShowcase}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>ASMAK SEAFOOD</h2>
                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <Image src="https://cdn.pixabay.com/photo/2024/09/20/13/27/ai-generated-9061481_1280.png" alt="Asmak Showcase" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
                        Discover the freshness of the ocean with Asmak. We bring you premium quality seafood, sourced responsibly and delivered with care.
                    </p>
                </motion.div>
            </div>

            {/* Standby Hub Showcase Section */}
            <div ref={standbyRef} className={styles.brandShowcase}>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>STANDBY HUB</h2>
                    <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <Image src="/spareparts n1.png" alt="Standby Hub Showcase" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
                        Reliability you can trust. Standby Hub offers a wide range of genuine spare parts to keep you moving without interruption.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
