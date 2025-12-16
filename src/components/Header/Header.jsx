"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.header
            className={styles.header}
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} // Ensure fixed position
        >
            <div className={styles.logoContainer}>
                <Image
                    src="/FOT logo2.png"
                    alt="FOT logo"
                    width={150}
                    height={90}
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>

            {/* Hamburger Icon */}
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link href="/brands" onClick={() => setIsMenuOpen(false)}>Brands</Link></li>
                    <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;
