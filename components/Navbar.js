"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // 👈 NEW

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="navbar"
      style={{
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgba(0,0,0,0.1)"
          : "0 1px 2px rgba(0,0,0,0.05)",
        padding: isScrolled ? "0.75rem 0" : "1rem 0",
      }}
    >
      <div className="container nav-container">
        <div className="logo">
          Maha<span className="highlight">Wellness</span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-links desktop">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#testimonials">Reviews</Link>
        </nav>

        <a
          href="https://wa.me/916305778829?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20consultation."
          target="_blank"
          className="btn btn-primary nav-cta desktop"
        >
          Book Free Consultation
        </a>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)}>Reviews</Link>

          <a
            href="https://wa.me/916305778829"
            target="_blank"
            className="btn btn-primary"
          >
            Book Free Consultation
          </a>
        </div>
      )}
    </header>
  );
}