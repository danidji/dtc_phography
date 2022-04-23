import { useState, useEffect } from "react";

interface WindowDimensionsType {
    width: number | null,
    height: number | null,
}

const useWindowDimensions = (): WindowDimensionsType => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensionsType>({
        width: null,
        height: null,
    });
    useEffect(() => {
        const handleResize = (): void => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
};

export default useWindowDimensions;