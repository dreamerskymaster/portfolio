import React, { createContext, useContext } from 'react';
import { useTiltEffect } from '../utils/useTiltEffect';

interface TiltContextType {
    imageStyle: React.CSSProperties;
    isHovering: boolean;
}

const TiltContext = createContext<TiltContextType | null>(null);

export const useTilt = () => {
    const context = useContext(TiltContext);
    if (!context) {
        throw new Error('useTilt must be used within a TiltWrapper');
    }
    return context;
};

interface TiltWrapperProps {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number;
    style?: React.CSSProperties;
}

/**
 * A wrapper component that applies 3D tilt and dynamic glow.
 * Provides tilt context to children for parallax effects.
 */
export const TiltWrapper: React.FC<TiltWrapperProps> = ({ children, className = "", maxTilt = 5, style: propStyle }) => {
    const {
        ref,
        style,
        imageStyle,
        glowStyle,
        onMouseMove,
        onMouseEnter,
        onMouseLeave,
        isHovering
    } = useTiltEffect(maxTilt, 1000);

    return (
        <TiltContext.Provider value={{ imageStyle, isHovering }}>
            <div
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{
                    ...style,
                    ...propStyle,
                    transition: isHovering ? 'none' : 'transform 0.5s ease-out',
                }}
                className={`relative group touch-none rounded-[inherit] ${className}`}
            >
                {/* Dynamic Glow Layer */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
                    style={glowStyle}
                />

                {/* Children Content */}
                <div className="relative z-0 h-full w-full rounded-[inherit] overflow-hidden">
                    {children}
                </div>
            </div>
        </TiltContext.Provider>
    );
};

interface TiltImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

/**
 * An image component designed to be used within a TiltWrapper.
 * Applies a counter-parallax effect on hover.
 */
export const TiltImage: React.FC<TiltImageProps> = ({ className = "", ...props }) => {
    const { imageStyle, isHovering } = useTilt();

    return (
        <img
            {...props}
            style={{
                ...imageStyle,
                transition: isHovering ? 'none' : 'transform 0.5s ease-out',
            }}
            className={`w-full h-full object-cover rounded-[inherit] ${className}`}
        />
    );
};
