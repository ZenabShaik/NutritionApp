export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container text-center">
        <div className="cta-box">
          <h2>Start Your Health Journey Today</h2>
          <p>{"Don't wait for \"tomorrow\". Take the first step towards a healthier, happier you."}</p>
          <a
            href="https://wa.me/916305778829?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large btn-shadow mt-4"
          >
            👉 Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
