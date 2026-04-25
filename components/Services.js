export default function Services() {
  return (
    <section className="services bg-light" id="services">
      <div className="container text-center">
        <h2 className="section-title">How I Can Help You</h2>
        <p className="section-subtitle">
          Tailored programs designed specifically for your body and goals.
        </p>

        <div className="services-grid">
          {/* Category 1 */}
          <div className="service-category">
            <div className="service-cat-header yellow-bg">
              <i className="fa-solid fa-weight-scale"></i>
              <h3>Weight Transformation</h3>
            </div>
            <ul className="service-list">
              <li>Weight Loss & Fat Loss</li>
              <li>Healthy Weight Gain</li>
              <li>Lean Muscle Building</li>
            </ul>
          </div>

          {/* Category 2 */}
          <div className="service-category">
            <div className="service-cat-header blue-bg">
              <i className="fa-solid fa-stethoscope"></i>
              <h3>Medical Nutrition</h3>
            </div>
            <ul className="service-list">
              <li>Diabetes Management</li>
              <li>Hypertension (BP) Control</li>
              <li>Thyroid & PCOS Reversal</li>
              <li>Cholesterol Management</li>
            </ul>
          </div>

          {/* Category 3 */}
          <div className="service-category">
            <div className="service-cat-header purple-bg">
              <i className="fa-solid fa-person-dress"></i>
              <h3>Specialized Care</h3>
            </div>
            <ul className="service-list">
              <li>Women’s Health Optimization</li>
              <li>Heart Health & Immunity</li>
              <li>Custom Condition Care</li>
            </ul>
          </div>

          {/* 🔥 NEW CATEGORY (High Authority Booster) */}
          <div className="service-category">
            <div className="service-cat-header blue-bg">
              <i className="fa-solid fa-chalkboard-user"></i>
              <h3>Nutrition Education</h3>
            </div>
            <ul className="service-list">
                          <li>
              <strong>Diet Menu Calculation Training</strong> —{" "}
              <a href="/learn" className="learn-link-inline">
                Join Classes
              </a>
            </li>
              <li>Online Classes for Students</li>
              <li>Practical Meal Planning Techniques</li>
              <li>Career Guidance in Nutrition Field</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}