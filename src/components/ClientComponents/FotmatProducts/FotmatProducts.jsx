"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import styles from "./FotmatProducts.module.css";

// Car Brands Data with Models
const carBrands = [
    {
        id: 1,
        title: "Toyota",
        logo: "/toyotaa.png",
        desc: "Reliability meets innovation.",
        models: [
            {
                name: "Camry",
                images: ["/camry 1.png", "/camry 2.png"],
                qualities: ["TPE Material", "Water Resistant", "Heat Resistant"],
                colors: ["Beige", "Black"]
            },
            {
                name: "Yaris Sedan",
                images: ["/yaris 1.png", "/yaris 2.png"],
                qualities: ["Custom Fit", "Easy Clean", "Durable"],
                colors: ["Black", "Grey"]
            },
            {
                name: "Land Cruiser",
                images: ["/land cruiser 1.png", "/land cruiser 2.png", "/land cruiser 3.png"],
                qualities: ["Heavy Duty", "All-Weather", "Premium Finish"],
                colors: ["Beige", "Black", "Coffee"]
            }
        ]
    },
    {
        id: 2,
        title: "Ford",
        logo: "/fordd.png",
        desc: "Built Tough.",
        models: [
            {
                name: "Taurus",
                images: ["/taurus 1.png", "/taurus 2.png"],
                qualities: ["TPE Material", "Anti-Slip", "Odorless"],
                colors: ["Black"]
            }
        ]
    },
    {
        id: 3,
        title: "Hyundai",
        logo: "/hyundaii.png",
        desc: "Modern style for modern drives.",
        models: [
            {
                name: "Accent",
                images: ["/Accent 1.png", "/Accent 2.png"],
                qualities: ["Perfect Fit", "Waterproof", "Flexible"],
                colors: ["Beige", "Black"]
            },
            {
                name: "Elantra",
                images: ["/elantra 1.png", "/elantra 2.png"],
                qualities: ["Stylish", "Protective", "Long-lasting"],
                colors: ["Black"]
            }
        ]
    },
    {
        id: 4,
        title: "Nissan",
        logo: "/nissann.png",
        desc: "Innovation that excites.",
        models: [
            {
                name: "Patrol",
                images: ["/patrol 1.png", "/patrol 2.png"],
                qualities: ["Rugged", "Easy Maintenance", "Eco-Friendly"],
                colors: ["Beige", "Black"]
            }
        ]
    },
    {
        id: 5,
        title: "Kia",
        logo: "/kiaa.png",
        desc: "Movement that inspires.",
        models: [] // No specific models provided yet
    },
];

// Create a larger set of items for density (3x the brands)
const displayItems = [...carBrands, ...carBrands, ...carBrands];
const duration = 10;

// Memoize FloatingItem to prevent re-renders from parent state changes
const FloatingItem = React.memo(({ product, index, onClick }) => {
    // Randomize starting positions to simulate "space" debris field
    // We want them to appear to come from the center (depth) outwards to the sides

    // Use useMemo to ensure random values are stable across renders and hydration safe-ish
    // Ideally we'd use a seed, but running once on client mount is okay.
    const [randoms] = useState(() => ({
        angle: (index / carBrands.length) * 360 + (Math.random() * 30), // Distributed angles across all items
        radius: 200 + Math.random() * 300,
        rotate1: Math.random() * 30,
        rotate2: Math.random() * -30
    }));

    const radian = (randoms.angle * Math.PI) / 180;
    const finalX = Math.cos(radian) * randoms.radius;
    const finalY = Math.sin(radian) * randoms.radius * 0.6;

    return (
        <motion.div
            className={styles.floatingItem}
            initial={{
                scale: 0,
                opacity: 0,
                z: -1000,
                x: 0,
                y: 0
            }}
            animate={{
                scale: [0, 1.0, 1.5],
                opacity: [0, 1, 1, 0],
                z: [-1000, 0, 500],
                x: [0, finalX, finalX * 1.5],
                y: [0, finalY, finalY * 1.5],
                rotate: [randoms.rotate1, randoms.rotate2]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: -1 * (duration / displayItems.length) * index,
                ease: "linear",
            }}
            onClick={() => onClick(product)}
        >
            <div className={styles.itemImageWrapper}>
                <Image
                    src={product.logo}
                    alt={product.title}
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
        </motion.div>
    );
});
FloatingItem.displayName = "FloatingItem";

export default function FotmatProducts() {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        if (brand.models && brand.models.length === 1) {
            setSelectedModel(brand.models[0]);
        } else {
            setSelectedModel(null); // Reset model on brand change if multiple or none
        }
        setCurrentImageIndex(0); // Ensure carousel starts at 0
    };

    const handleModelClick = (model) => {
        setSelectedModel(model);
        setCurrentImageIndex(0); // Reset carousel
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedModel?.images?.length) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedModel.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedModel?.images?.length) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedModel.images.length) % selectedModel.images.length);
        }
    };

    const closeModal = () => {
        setSelectedBrand(null);
        setSelectedModel(null);
    };

    return (
        <section className={styles.spaceContainer}>
            {displayItems.map((brand, index) => (
                <FloatingItem
                    key={`${brand.id}-${index}`}
                    product={brand}
                    index={index}
                    onClick={handleBrandClick}
                />
            ))}

            {/* Modal */}
            <AnimatePresence>
                {selectedBrand && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeButton} onClick={closeModal}>×</button>

                            {/* View 1: Model Selection (if brand has models and none selected) */}
                            {!selectedModel && selectedBrand.models?.length > 0 && (
                                <div className={styles.modelSelectionView}>
                                    <h3 className={styles.brandTitleLarge}>{selectedBrand.title}</h3>
                                    <p className={styles.selectPrompt}>Select your car model:</p>
                                    <div className={styles.modelGrid}>
                                        {selectedBrand.models.map((model) => (
                                            <button
                                                key={model.name}
                                                className={styles.modelButton}
                                                onClick={() => handleModelClick(model)}
                                            >
                                                {model.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* View 2: Product Details (if model selected or brand has no models but logic falls back - handling basic case) */}
                            {/* For now, if no models, show generic or empty. User specific requirements imply models exist for these brands. */}
                            {selectedModel && (
                                <div className={styles.detailsView}>
                                    {/* Navigation Header */}
                                    <div className={styles.detailsHeader}>
                                        <button className={styles.backButton} onClick={() => handleModelClick(null)}>
                                            &#8592; Back to Models
                                        </button>
                                    </div>

                                    {/* Compact Carousel */}
                                    <div className={styles.carouselContainer}>
                                        <AnimatePresence mode="wait">
                                            {selectedModel.images && selectedModel.images.length > 0 ? (
                                                <motion.div
                                                    key={currentImageIndex}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={styles.carouselImageWrapper}
                                                >
                                                    <Image
                                                        src={selectedModel.images[currentImageIndex]}
                                                        alt={`${selectedModel.name} ${currentImageIndex + 1}`}
                                                        fill
                                                        style={{ objectFit: "contain" }}
                                                        priority
                                                    />
                                                </motion.div>
                                            ) : <div className={styles.noImages}>No Images Available</div>}
                                        </AnimatePresence>

                                        {/* Overlay Controls */}
                                        {selectedModel.images.length > 1 && (
                                            <>
                                                <button className={styles.prevBtn} onClick={prevImage}>&#8249;</button>
                                                <button className={styles.nextBtn} onClick={nextImage}>&#8250;</button>
                                            </>
                                        )}

                                        <div className={styles.imageCounter}>
                                            {currentImageIndex + 1} / {selectedModel.images.length}
                                        </div>
                                    </div>

                                    {/* Compact Details */}
                                    <div className={styles.compactDetails}>
                                        <h2 className={styles.modelTitle}>{selectedBrand.title} {selectedModel.name}</h2>

                                        <div className={styles.qualitiesRow}>
                                            {selectedModel.qualities.map((q, i) => (
                                                <span key={i} className={styles.qualityTag}>{q}</span>
                                            ))}
                                        </div>

                                        <div className={styles.colorsRow}>
                                            <span className={styles.label}>Available Colors:</span>
                                            {selectedModel.colors.map((c, i) => (
                                                <div key={i} className={styles.colorDot} style={{ backgroundColor: c.toLowerCase() === 'beige' ? '#f5f5dc' : c.toLowerCase() === 'coffee' ? '#6f4e37' : c }} title={c} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Fallback for brands with no models (e.g. Kia currently) */}
                            {!selectedModel && (!selectedBrand.models || selectedBrand.models.length === 0) && (
                                <div className={styles.emptyState}>
                                    <h3>{selectedBrand.title}</h3>
                                    <p>Coming Soon</p>
                                </div>
                            )}

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
