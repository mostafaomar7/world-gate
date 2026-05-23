import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-WMMKKRRG21";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const page_path = pathname + search;
    const page_location = window.location.href;
    const page_title = document.title;

    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path,
        page_location,
        page_title,
        send_to: GA_MEASUREMENT_ID,
      });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "page_view",
        page_path,
        page_location,
        page_title,
      });
    }

    if (import.meta.env.DEV) {
      console.info("[analytics] page_view", { page_path, page_title });
    }
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
