'use client';

import { motion } from 'framer-motion';

export default function TextReveal({ text, tag = 'h1', className = '', style = {}, delay = 0 }) {
    const Tag = motion[tag] || motion.h1;

    const variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: delay / 1000,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <Tag
            className={className}
            style={{ ...style, willChange: 'transform, opacity' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
        >
            {text}
        </Tag>
    );
}
