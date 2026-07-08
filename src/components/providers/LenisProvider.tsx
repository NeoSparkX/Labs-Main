import { ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface LenisProviderProps {
    children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}
