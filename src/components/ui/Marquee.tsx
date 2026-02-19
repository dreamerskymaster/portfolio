import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
    images: string[];
    speed?: number;
    className?: string;
    onImageClick?: (index: number) => void;
}

const Marquee: React.FC<MarqueeProps> = ({
    images,
    speed = 20,
    className = "",
    onImageClick
}) => {
    return (
        <div className={`relative flex overflow-hidden group ${className}`}>
            {/* Gradient masks for smooth fade effect at edges */}
            <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div
                className="flex gap-6 py-4 flex-nowrap animate-marquee pause-on-hover"
                style={{
                    width: "fit-content",
                    animationDuration: `${speed}s`
                }}
            >
                {/* We duplicate the images to create the infinite loop effect */
                    [...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/50 transition-colors"
                            onClick={() => onImageClick?.(index % images.length)}
                        >
                            <img
                                src={src}
                                alt={`Marquee item ${index}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Marquee;
