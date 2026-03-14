'use client';

import { motion } from 'framer-motion';

export default function TextReveal({ text, tag = 'h1', className = '', style = {} }) {
    const Tag = motion[tag] || motion.h1; // Fallback to h1 just in case

    // Container variant to stagger the children
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Sped up from 0.1
                delayChildren: 0.05,
            },
        },
    };

    // Child variant matching the "boom" animation scale/y rules
    const child = {
        hidden: {
            opacity: 0,
            scale: 0.3,
            x: -100, // Start from the left
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0, // Move to original position
            transition: {
                duration: 0.6, // Sped up from 1 to 0.6 seconds
                ease: [0.34, 1.56, 0.64, 1], // Matches cubic-bezier
            },
        },
    };

    // Split text into words, retaining spaces
    // The previous implementation mapped "words" but left &nbsp;. 
    // We will map words and add a non-breaking space after each, except the last
    const words = typeof text === 'string' ? text.split(' ') : [];

    return (
        <Tag
            className={className}
            style={style}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: 'inline-block' }} /* inline-block required for transform */
                >
                    {word}{index < words.length - 1 ? '\u00A0' : ''}
                </motion.span>
            ))}
        </Tag>
    );
}
