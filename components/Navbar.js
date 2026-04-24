"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenu = () => {
    alert("Mobile menu feature can be implemented here! For now, please resize to desktop.");
  };

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
          <span className="logo-leaf">
            <i className="fa-solid fa-leaf"></i>
          </span>
          <span className="logo-text">
            Nutri<span className="highlight">Balance</span>
          </span>
        </div>
        <nav className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#testimonials">Reviews</Link>
        </nav>
        <a
          href="https://wa.me/916305778829?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
        >
          Book Free Consultation
        </a>
        <div className="hamburger" onClick={handleMobileMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
}
