import { Suspense, lazy, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DotGridBackground from './DotGridBackground';

/**
 * Heavy, animated backgrounds are lazy-loaded so their chunks (notably
 * Three.js for Globe3D) are never fetched on devices that will not render
 * them.
 */
const Globe3D = lazy(() => import('./Globe3D'));
const Starfield = lazy(() => import('./Starfield'));
const MatrixRain = lazy(() => import('./MatrixRain'));
const Bokeh = lazy(() => import('./Bokeh'));

/**
 * True on small viewports or when the visitor has asked for reduced motion.
 * In either case we render only the cheap CSS dot grid.
 */
const useLightweightBackground = (): boolean => {
    const [lightweight, setLightweight] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;

        const smallScreen = window.matchMedia('(max-width: 768px)');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const coarsePointer = window.matchMedia('(pointer: coarse)');

        const update = () =>
            setLightweight(smallScreen.matches || reducedMotion.matches || coarsePointer.matches);

        update();

        // Safari < 14 only supports the deprecated addListener API.
        const subscribe = (mq: MediaQueryList) =>
            mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
        const unsubscribe = (mq: MediaQueryList) =>
            mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);

        [smallScreen, reducedMotion, coarsePointer].forEach(subscribe);
        return () => [smallScreen, reducedMotion, coarsePointer].forEach(unsubscribe);
    }, []);

    return lightweight;
};

const Background = () => {
    const { pathname } = useLocation();
    const lightweight = useLightweightBackground();

    const renderBackground = () => {
        // Home Page: Globe
        if (pathname === '/') {
            return <Globe3D />;
        }

        // Projects & Resume: Matrix Rain
        if (pathname.startsWith('/projects') || pathname === '/resume') {
            return <MatrixRain />;
        }

        // Hobbies & Contact: Bokeh
        if (pathname === '/hobbies' || pathname === '/contact') {
            return <Bokeh />;
        }

        // Default (About, Certs, etc.): Starfield
        return <Starfield />;
    };

    return (
        <>
            <DotGridBackground />
            {!lightweight && (
                <Suspense fallback={null}>
                    {renderBackground()}
                </Suspense>
            )}
        </>
    );
};

export default Background;
