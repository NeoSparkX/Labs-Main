import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position to the top of the page on every route change,
 * including browser back/forward navigation.
 */
const ScrollToTopOnNavigate = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTopOnNavigate;
