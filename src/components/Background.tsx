import { useLocation } from 'react-router-dom';
import Globe3D from './Globe3D';
import Starfield from './Starfield';
import MatrixRain from './MatrixRain';
import Bokeh from './Bokeh';
import DotGridBackground from './DotGridBackground';

const Background = () => {
    const location = useLocation();
    const path = location.pathname;

    const renderBackground = () => {
        // Home Page: Globe
        if (path === '/') {
            return <Globe3D />;
        }

        // Projects & Resume: Matrix Rain
        if (path.startsWith('/projects') || path === '/resume') {
            return <MatrixRain />;
        }

        // Hobbies & Contact: Bokeh
        if (path === '/hobbies' || path === '/contact') {
            return <Bokeh />;
        }

        // Default (About, Certs, etc.): Starfield
        return <Starfield />;
    };

    return (
        <>
            <DotGridBackground />
            {renderBackground()}
        </>
    );
};

export default Background;
