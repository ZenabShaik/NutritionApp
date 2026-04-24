"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(
      ".problem-card, .service-category, .pricing-card, .about-content, .about-image"
    );

    // Pre-add reveal class to items we want to animate
    reveals.forEach((el) => el.classList.add("reveal"));

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100; // when 100px of element is visible from bottom

      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return null;
}
