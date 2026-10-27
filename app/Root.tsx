import { Outlet, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export function Root() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (hash) {
      // Hash navigation — scroll to the target element after a short delay
      // to let the page render first
      const id = hash.slice(1);
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (pathname !== prevPathname.current) {
      // Page changed without hash — scroll to top
      window.scrollTo(0, 0);
    }
    prevPathname.current = pathname;
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
