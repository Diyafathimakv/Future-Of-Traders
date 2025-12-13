"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./AnimatedBackground.module.css";

const AnimatedBackground = () => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.imageWrapper}
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={{
                    scale: [1, 1.15, 1.05, 1.15, 1],
                    x: [0, -20, 10, -10, 0],
                    y: [0, -15, 0, -10, 0]
                }}
                transition={{
                    duration: 25,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror"
                }}
            >
                <Image
                    src="/bg_dark_geometric.png"
                    alt="Premium Background"
                    fill
                    style={{ objectFit: "cover" }}
                    quality={100}
                    priority
                />
            </motion.div>
            <div className={styles.overlay}></div>
        </div>
    );
};

export default AnimatedBackground;
