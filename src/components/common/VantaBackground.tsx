"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
    interface Window {
        VANTA: any;
        THREE: any;
    }
}

export function VantaBackground({ children }: { children: React.ReactNode }) {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const [scriptsLoaded, setScriptsLoaded] = useState({ three: false, vanta: false });

    // Debug script loading
    useEffect(() => {
        if (scriptsLoaded.three && scriptsLoaded.vanta) {
            console.log("Scripts loaded, initializing Vanta...");
        }
    }, [scriptsLoaded]);

    useEffect(() => {
        if (scriptsLoaded.three && scriptsLoaded.vanta && !vantaEffect && vantaRef.current) {
            try {
                const effect = window.VANTA.CLOUDS({
                    el: vantaRef.current,
                    THREE: window.THREE, // Explicitly pass THREE to Vanta
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    skyColor: 0x68b8d9,
                    cloudColor: 0xadc1de,
                    cloudShadowColor: 0x183550,
                    sunColor: 0xff9919,
                    sunGlareColor: 0xff6633,
                    sunlightColor: 0xff9933,
                });
                setVantaEffect(effect);
            } catch (error) {
                console.error("Failed to initialize Vanta:", error);
            }
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [scriptsLoaded, vantaEffect]);

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log("Three.js loaded");
                    setScriptsLoaded(prev => ({ ...prev, three: true }));
                }}
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.clouds.min.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log("Vanta loaded");
                    setScriptsLoaded(prev => ({ ...prev, vanta: true }));
                }}
            />

            <div ref={vantaRef} className="fixed inset-0 -z-50 w-full h-full bg-gray-50 dark:bg-black pointer-events-none">
                {children}
            </div>
        </>
    );
}
