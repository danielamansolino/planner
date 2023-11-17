import React, { useState, useEffect } from "react"

interface WindowType {
    width: number;
    height: number;
}

const useDetectWindowSize = ():WindowType => {
    const [windowSize, setWindowSize] = useState<WindowType>({
        width: 0,
        height: 0,
        });
    
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        // Initial call to set windowSize
        handleResize();
        // Add event listener
        if(typeof window !== 'undefined'){
            window.addEventListener("resize", handleResize);
        }
        // Remove event listener on cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); 
    return windowSize;
}

export default useDetectWindowSize;