"use client";

import Link from "next/link";
import { FadeIn, HoverScale } from "../components/MotionWrapper";
import Background from "../../components/ClientComponents/HomePage/BackGround/Background";

export default function AboutPage() {
    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            <Background />

            <main className="container" style={{ position: "relative", zIndex: 10, padding: "8rem 2rem 4rem", fontFamily: "'Montserrat', sans-serif" }}>
                <FadeIn>
                    <HoverScale scale={1.05}>
                        <Link href="/" style={{
                            display: "inline-block",
                            marginBottom: "2rem",
                            padding: "0.8rem 1.5rem",
                            border: "1px solid #D94D4D",
                            borderRadius: "4px",
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: "500",
                            letterSpacing: "0.5px"
                        }}>
                            ← Back to Home
                        </Link>
                    </HoverScale>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 style={{
                        fontSize: "4rem",
                        marginBottom: "0.5rem",
                        color: "#D4AF37",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: "700"
                    }}>
                        FOT Groups
                    </h1>
                    <p style={{
                        fontSize: "1.5rem",
                        color: "#ccc",
                        marginBottom: "4rem",
                        letterSpacing: "1px",
                        fontWeight: "300"
                    }}>
                        Building businesses that are transparent, premium, and future-ready.
                    </p>
                </FadeIn>

                <div style={{ display: "grid", gap: "4rem", maxWidth: "900px" }}>
                    {/* ASMAK CLUB */}
                    <FadeIn delay={0.3}>
                        <HoverScale scale={1.02}>
                            <section style={{
                                background: "rgba(255,255,255,0.03)",
                                padding: "2rem",
                                borderRadius: "12px",
                                border: "1px solid rgba(212, 175, 55, 0.2)"
                            }}>
                                <div style={{ borderLeft: "4px solid #D4AF37", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                    <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>ASMAK CLUB</h2>
                                    <p style={{ color: "#D94D4D", fontWeight: "600", letterSpacing: "2px", fontSize: "0.9rem" }}>
                                        EST. JANUARY 2025
                                    </p>
                                </div>

                                <p style={{ color: "#ccc", lineHeight: "1.8", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                                    Designed for true seafood lovers, ASMAK CLUB is the first flagship venture of FOT Groups. Redeveloping the experience through live fish selection, complete transparency, and an open kitchen concept—where freshness is not promised, but witnessed.
                                </p>

                                <div style={{ background: "rgba(0,0,0,0.3)", padding: "1.5rem", borderRadius: "8px", borderLeft: "2px solid #D94D4D" }}>
                                    <p style={{ fontStyle: "italic", color: "#D4AF37", marginBottom: "0.5rem" }}>
                                        "When seafood is honest, the experience becomes unforgettable."
                                    </p>
                                    <p style={{ fontSize: "0.85rem", color: "#888" }}>
                                        — Founders: Shefi Kappungal & Shameej Kappungal<br />
                                        <span style={{ opacity: 0.7 }}>Guidance: Noushad Chathalloor</span>
                                    </p>
                                </div>
                            </section>
                        </HoverScale>
                    </FadeIn>

                    {/* FOTMAT */}
                    <FadeIn delay={0.4}>
                        <HoverScale scale={1.02}>
                            <section style={{
                                background: "rgba(255,255,255,0.03)",
                                padding: "2rem",
                                borderRadius: "12px",
                                border: "1px solid rgba(212, 175, 55, 0.2)"
                            }}>
                                <div style={{ borderLeft: "4px solid #D4AF37", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                    <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>FOTMAT</h2>
                                    <p style={{ color: "#D94D4D", fontWeight: "600", letterSpacing: "2px", fontSize: "0.9rem" }}>
                                        PREMIUM AUTOMOTIVE MATS
                                    </p>
                                </div>

                                <p style={{ color: "#ccc", lineHeight: "1.8", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                                    Crafted for those who expect excellence in every detail. FOTMAT specializes in high-quality TPE car mats that combine precision engineering, refined aesthetics, and long-lasting protection.
                                </p>

                                <div style={{ background: "rgba(0,0,0,0.3)", padding: "1.5rem", borderRadius: "8px", borderLeft: "2px solid #D94D4D" }}>
                                    <p style={{ fontStyle: "italic", color: "#D4AF37", marginBottom: "0.5rem" }}>
                                        "True luxury is not loud—it is felt in the comfort beneath your feet and the confidence in every journey."
                                    </p>
                                    <p style={{ fontSize: "0.85rem", color: "#888" }}>
                                        — Founder: Shefi Kapungal
                                    </p>
                                </div>
                            </section>
                        </HoverScale>
                    </FadeIn>

                    {/* STANDBY HUB */}
                    <FadeIn delay={0.5}>
                        <HoverScale scale={1.02}>
                            <section style={{
                                background: "rgba(255,255,255,0.03)",
                                padding: "2rem",
                                borderRadius: "12px",
                                border: "1px solid rgba(212, 175, 55, 0.2)"
                            }}>
                                <div style={{ borderLeft: "4px solid #D4AF37", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                                    <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Standby Hub</h2>
                                    <p style={{ color: "#D94D4D", fontWeight: "600", letterSpacing: "2px", fontSize: "0.9rem" }}>
                                        COLD CHAIN SOLUTIONS
                                    </p>
                                </div>

                                <p style={{ color: "#ccc", lineHeight: "1.8", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
                                    Ensuring uninterrupted performance across the cold chain. As a trusted division of FOT Groups, we supply high-quality spare parts for transport refrigeration and cold room systems.
                                </p>

                                <div style={{ background: "rgba(0,0,0,0.3)", padding: "1.5rem", borderRadius: "8px", borderLeft: "2px solid #D94D4D" }}>
                                    <p style={{ fontStyle: "italic", color: "#D4AF37", marginBottom: "0.5rem" }}>
                                        "Reliability is the foundation of everything we build."
                                    </p>
                                    <p style={{ fontSize: "0.85rem", color: "#888" }}>
                                        — Founder: Saleh Kappungal
                                    </p>
                                </div>
                            </section>
                        </HoverScale>
                    </FadeIn>
                </div>
            </main>
        </div>
    );
}
