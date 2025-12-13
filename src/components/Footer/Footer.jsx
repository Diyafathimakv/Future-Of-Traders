"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section: Brand & Nav */}
                <div className={styles.topSection}>
                    {/* Column 1: Brand Info */}
                    <div className={styles.column}>
                        <h2 className={styles.logoText}>FOT GROUP</h2>
                        <p className={styles.tagline}>
                            Redefining excellence across industries with passion and precision.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h3 className={styles.colTitle}>Explore</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/brands">Our Brands</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Brands */}
                    <div className={styles.column}>
                        <h3 className={styles.colTitle}>Our Brands</h3>
                        <ul className={styles.linkList}>
                            <li><span className={styles.brandItem}>Asmak</span></li>
                            <li><span className={styles.brandItem}>FOTMAT</span></li>
                            <li><span className={styles.brandItem}>Standby Hub</span></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Location */}
                    <div className={styles.column}>
                        <h3 className={styles.colTitle}>Visit Us</h3>
                        <p className={styles.contactText}>
                            <strong>Asmak Club</strong><br />
                            Experience the finest seafood.
                        </p>
                        <a
                            href="https://maps.app.goo.gl/WGFS1tLWT1ZyxPda7?g_st=ipc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mapLink}
                        >
                            View on Google Maps
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '6px' }}>
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider} />

                {/* Bottom Section: Copyright */}
                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} FOT Group. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
