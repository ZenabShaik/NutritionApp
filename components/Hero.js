"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="trust-badge">
            <span className="stars">★★★★★</span> 4.9/5 Client Satisfaction
          </div>
          <h1 className="hero-title">
            Take Control of Your Weight & Health <span className="highlight">Naturally</span>
          </h1>
          <p className="hero-subtitle">
            Personalized nutrition plans for weight loss, weight gain, and medical conditions like diabetes and PCOS.
          </p>
          <div className="hero-ctas">
            <a
              href="https://wa.me/916305778829?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              👉 Book Free Consultation
            </a>
          </div>
          <p className="hero-note">
            Mentioned association with <strong>Fitterfly</strong>
          </p>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-blobs"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero_dietician_1776511875996.png"
            alt="Certified Dietician & Health Coach"
            className="hero-img"
            id="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
