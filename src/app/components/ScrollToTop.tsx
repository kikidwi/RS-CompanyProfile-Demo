import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop — resets window scroll position to (0,0) every time
 * the URL pathname or search changes (i.e., on every page navigation).
 * Place this inside the Router tree so it has access to location context.
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search]);

  return null;
}
