"use client";

import { motion } from "framer-motion";

export function FadeIn({ children, delay = 0, duration = 0.5, y = 20, className = "", ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, delay = 0, staggerChildren = 0.1, className = "", ...props }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delayChildren: delay, staggerChildren }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, delay = 0, className = "", ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: "backOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export function HoverScale({ children, scale = 1.05, className = "", ...props }) {
    return (
        <motion.div
            whileHover={{ scale }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function Pulse({ children, duration = 3, className = "", ...props }) {
    return (
        <motion.div
            animate={{ opacity: [0.8, 1, 0.8], scale: [0.98, 1, 0.98] }}
            transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
