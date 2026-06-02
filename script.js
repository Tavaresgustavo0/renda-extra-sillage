const revealTargets = [
  ".section-heading",
  ".intro-grid article",
  ".showcase-copy",
  ".image-stack",
  ".aroma-grid article",
  ".production img",
  ".production-copy",
  ".objection-copy",
  ".objection img",
  ".metrics-copy",
  ".metric-images img",
  ".comparativo .card",
  ".offer-heading",
  ".offer-card"
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const elements = document.querySelectorAll(revealTargets.join(","));

  elements.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(revealTargets.join(",")).forEach((element) => {
    element.classList.add("is-visible");
  });
}
