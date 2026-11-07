import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const REVEAL = ".grid4>*,.grid3>*,.flow>li,.inds>a,.ticks li,.sec h2,.phead h1,.phead p,.cta,.why .art,.side,.two>*,.foot-grid>*";
const CARD = ".svc,.proj";

export default function Effects() {
  const { pathname: path } = useLocation();

  // Scroll reveal (re-runs on every page change)
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(REVEAL).forEach((el) => {
      const i = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--d", `${Math.min(i, 7) * 70}ms`);
      el.classList.add("rv");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);

  // 3D card tilt + hero parallax (mouse only) and scroll progress
  useEffect(() => {
    const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
    const onScroll = () => {
      const h = document.documentElement;
      h.style.setProperty("--p", String(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)));
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    if (calm || !fine) return () => removeEventListener("scroll", onScroll);

    const move = (e) => {
      const t = e.target.closest?.(CARD);
      if (t) {
        const r = t.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        t.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
        t.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
        t.style.setProperty("--mx", `${x * 100}%`);
        t.style.setProperty("--my", `${y * 100}%`);
      }
      const hero = e.target.closest?.(".hero");
      if (hero) {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
        hero.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
      }
    };
    const out = (e) => {
      const t = e.target.closest?.(CARD);
      if (t && !t.contains(e.relatedTarget)) { t.style.removeProperty("--rx"); t.style.removeProperty("--ry"); }
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerout", out);
    return () => {
      removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", out);
    };
  }, []);

  return <div className="progress" aria-hidden="true" />;
}
