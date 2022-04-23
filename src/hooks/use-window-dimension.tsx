import { useState, useEffect } from "react";

interface IWindowDimensions {
    width: number,
    height: number,
}

const getWindowDimensions = (): IWindowDimensions => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
};

const useWindowDimensions = (): IWindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>(getWindowDimensions());

    useEffect(() => {
        const handleResize = (): void => {
            setWindowDimensions(getWindowDimensions());
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;