import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Next.js scrolls to top on navigation automatically; React Router does not.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
