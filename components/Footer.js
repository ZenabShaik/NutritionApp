import Link from "next/link";
import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-leaf">
              <i className="fa-solid fa-leaf"></i>
            </span>
            <span className="logo-text text-white">
              Nutri<span className="highlight">Balance</span>
            </span>
          </div>
          <p>Certified Dietician & Health Coach focused on sustainable results.</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/dt.mahalaxmi_mandaji?igsh=MXR5d295Y2hycG13OQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/mahalaxmi-mandaji-a2073126b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            {/* Optional: hide/remove if you don’t have these yet */}
            {/* 
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            */}
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li>
              <Link href="#pricing">Pricing Plans</Link>
            </li>
            <li>
              <Link href="#testimonials">Success Stories</Link>
            </li>
            <li>
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <i className="fa-solid fa-envelope"></i> mandajimahalaxmi@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> +91 63057 78829
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> Online Consultations globally
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 NutriBalance. All Rights Reserved.</p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", opacity: 0.8 }}>
          Developed by{" "}
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
            znw creations
          </a>
        </p>
        <VisitorCounter />
      </div>
    </footer>
  );
}
