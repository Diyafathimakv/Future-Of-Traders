"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
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
        </header>
    );
};

export default Header;
