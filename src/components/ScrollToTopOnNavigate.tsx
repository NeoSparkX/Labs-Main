import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";

/**
 * Resets scroll position to the top of the page on every route change,
 * including browser back/forward navigation, while respecting Lenis smooth scroll.
 */
const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            // Instantly snap to the top (immediate: true prevents scrolling animation)
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return null;
};

export default ScrollToTopOnNavigate;
