'use client';

export default function TextReveal({ text, tag = 'h1', className = '' }) {
    const Tag = tag;
    return (
        <Tag className={className}>
            {text}
        </Tag>
    );
}
