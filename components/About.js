export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
  <span className="section-tag">Meet Your Expert</span>

  <h2 className="section-title text-center">
    Mandaji Mahalaxmi
  </h2>

  <p className="expert-intro">
    <strong>Mandaji Mahalaxmi</strong> Qualified Dietician and a Nutritionist , certified health and wellness coach.
  </p>

  <ul className="credentials">
    <li>
      <i className="fa-solid fa-graduation-cap"></i> MSc in Food Science & Nutrition
    </li>
    <li>
      <i className="fa-solid fa-certificate"></i> Certified Health & Wellness Coach
    </li>
  </ul>

  <div className="approach-box">
    <h3>My Approach:</h3>
    <ul>
      <li>
        <i className="fa-solid fa-check text-green"></i>{" "}
        <strong>No crash diets</strong> — Only sustainable methods.
      </li>
      <li>
        <i className="fa-solid fa-check text-green"></i>{" "}
        <strong>Indian food-based plans</strong> — Eat what you love.
      </li>
      <li>
        <i className="fa-solid fa-check text-green"></i>{" "}
        <strong>Sustainable lifestyle</strong> — Build habits for life.
      </li>
    </ul>
  </div>
</div>
      </div>
    </section>
  );
}
