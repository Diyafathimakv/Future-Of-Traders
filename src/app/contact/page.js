"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, HoverScale } from "../components/MotionWrapper";
import Background from "../../components/ClientComponents/HomePage/BackGround/Background";

export default function ContactPage() {
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
                        fontSize: "3.5rem",
                        marginBottom: "1rem",
                        color: "#D4AF37",
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: "700"
                    }}>
                        Contact FOT Groups
                    </h1>
                    <p style={{
                        fontSize: "1.2rem",
                        color: "#ccc",
                        marginBottom: "4rem",
                        fontWeight: "300",
                        maxWidth: "600px"
                    }}>
                        Reach out to us directly. We are here to connect and collaborate.
                    </p>
                </FadeIn>

                <StaggerContainer style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>

                    {/* Phone */}
                    <FadeIn className="contact-card">
                        <HoverScale className="h-full" style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            height: "100%"
                        }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>📞</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Phone</h3>
                            <p style={{ color: "#D4AF37", fontSize: "1.2rem", fontWeight: "600" }}>+91 98765 43210</p>
                            <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "0.5rem" }}>Mon-Fri, 9am - 6pm</p>
                        </HoverScale>
                    </FadeIn>

                    {/* Email */}
                    <FadeIn className="contact-card">
                        <HoverScale className="h-full" style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            height: "100%"
                        }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>✉️</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Email</h3>
                            <p style={{ color: "#D4AF37", fontSize: "1.2rem", fontWeight: "600" }}>contact@fotgroups.com</p>
                            <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "0.5rem" }}>For all inquiries</p>
                        </HoverScale>
                    </FadeIn>

                    {/* Address */}
                    <FadeIn className="contact-card">
                        <HoverScale className="h-full" style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            height: "100%"
                        }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>🏢</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Headquarters</h3>
                            <p style={{ color: "#ccc", fontSize: "1.1rem", lineHeight: "1.5" }}>FOT Groups HQ<br />Calicut, Kerala</p>
                        </HoverScale>
                    </FadeIn>

                    {/* ASMAK CLUB Location */}
                    <FadeIn className="contact-card">
                        <HoverScale className="h-full" style={{
                            background: "rgba(255,255,255,0.03)",
                            padding: "2.5rem",
                            borderRadius: "12px",
                            border: "1px solid rgba(212, 175, 55, 0.2)",
                            height: "100%"
                        }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>📍</div>
                            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem", color: "#fff", fontFamily: "'Playfair Display', serif" }}>Visit ASMAK CLUB</h3>
                            <p style={{ color: "#888", fontSize: "1rem", marginBottom: "1.5rem" }}>Experience fresh seafood live.</p>
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={{
                                color: "#D94D4D",
                                fontWeight: "bold",
                                textDecoration: "none",
                                borderBottom: "1px solid #D94D4D",
                                paddingBottom: "2px"
                            }}>
                                View on Google Maps →
                            </a>
                        </HoverScale>
                    </FadeIn>

                </StaggerContainer>
            </main>
        </div>
    );
}
