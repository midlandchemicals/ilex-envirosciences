import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTopInstant component that scrolls to top when the route changes
 * This ensures users start at the top of each new page
 */

export function ScrollToTopInstant() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
