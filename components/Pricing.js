export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container text-center">
        <h2 className="section-title">Invest in Your Health</h2>
        <p className="section-subtitle">Transparent pricing. No hidden fees. Only sustainable results.</p>
        <div className="pricing-note">👉 {`"No crash diets. Only sustainable results."`}</div>

        <div className="pricing-grid">
          {/* Tier 1 */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>1 Month</h3>
              <div className="price">
                <span>₹</span>1,999 - 3,999
              </div>
              <p className="price-desc">Depending on program complexity</p>
            </div>
            <ul className="pricing-features">
              <li>
                <i className="fa-solid fa-circle-check"></i> Personalized diet plan
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Weekly follow-ups
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> WhatsApp support
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Indian food options
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Habit guidance
              </li>
            </ul>
            <a
              href="https://wa.me/916305778829?text=Hello,%20I'm%20interested%20in%20the%201%20Month%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-100"
            >
              Choose Plan
            </a>
          </div>

          {/* Tier 2 */}
          <div className="pricing-card popular">
            <div className="popular-badge">Best Seller</div>
            <div className="pricing-header">
              <h3>3 Months</h3>
              <div className="price">
                <span>₹</span>4,999 - 7,999
              </div>
              <p className="price-desc">Complete transformation journey</p>
            </div>
            <ul className="pricing-features">
              <li>
                <i className="fa-solid fa-circle-check"></i> Comprehensive personalized plan
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Bi-weekly strategy adjustments
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Priority WhatsApp support
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Indian food options + swaps
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Advanced habit & lifestyle coaching
              </li>
            </ul>
            <a
              href="https://wa.me/916305778829?text=Hello,%20I'm%20interested%20in%20the%203%20Months%20(Best%20Seller)%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-100"
            >
              Choose Plan
            </a>
          </div>

          {/* Tier 3 */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>6 Months</h3>
              <div className="price">
                <span>₹</span>8,999 - 11,999
              </div>
              <p className="price-desc">Long-term maintenance & mastery</p>
            </div>
            <ul className="pricing-features">
              <li>
                <i className="fa-solid fa-circle-check"></i> Deep dive metabolic reset
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Unlimited plan tweaking
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> 24/7 WhatsApp access
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Travel & festival eating guides
              </li>
              <li>
                <i className="fa-solid fa-circle-check"></i> Dedicated health maintenance
              </li>
            </ul>
            <a
              href="https://wa.me/916305778829?text=Hello,%20I'm%20interested%20in%20the%206%20Months%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-100"
            >
              Choose Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
