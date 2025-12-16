"use client"; // add if you're in app/ and want client-side behavior (optional)

import React from "react";
import Image from "next/image";
import styles from "./Slides.module.css";

const slides = [
    { src: "/seafood2.jpg", alt: "Seafood 1", caption: "Signature in-house flavors" },
    { src: "/carmat.jpg", alt: "Car Mat", caption: "Precision Quality" },
    { src: "/spareparts.jpg", alt: "Spare Parts", caption: "Premium Hub" },
    { src: "/seafood1.jpg", alt: "Seafood 2", caption: "Fresh Daily Catch" }
];

export default function Slides() {
    return (
        <div className={styles.slidesContainer}>
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={styles.slide}
                    style={{ zIndex: 20 + i }}
                >
                    <div className={styles.bg}>
                        <Image
                            src={s.src}
                            alt={s.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div className={styles.content}>
                        <p>{s.caption}</p>
                    </div>

                </div>
            ))
            }

        </div >
    );
}
