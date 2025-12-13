"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./GallerySection.module.css";

const galleryItems = [
    { src: "/spareparts3.png", title: "Spare Parts" },
    { src: "/grilled-scallops.jpg", title: "Grilled Scallops" },
    { src: "/carmat2.png", title: "Carmat" },
    { src: "/shrimp.jpg", title: "Shrimp" },
    { src: "/carmat3.png", title: "Carmat" }
];

// ✨ Smooth & Premium Animation
const smoothVariant = {
    initial: { scale: 0.85, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1] // soft, natural ease-out curve
        }
    }
};

const ScaleImage = ({ item, index }) => {
    return (
        <div className={styles.galleryItem}>
            <motion.div
                className={styles.imageWrapper}
                variants={smoothVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ margin: "-20%" }}
                transition={{
                    delay: index * 0.15 // slight stagger effect
                }}
            >
                <Image
                    src={item.src}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                />
            </motion.div>
        </div>
    );
};

const GallerySection = () => {
    return (
        <section className={styles.gallerySection}>
            <div className={styles.galleryGrid}>
                {galleryItems.map((item, index) => (
                    <ScaleImage key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default GallerySection;
