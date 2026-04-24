export default function Problems() {
  return (
    <section className="problems bg-light" id="problems">
      <div className="container text-center">
        <h2 className="section-title">Struggling to See Results Despite Trying Everything?</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fa-solid fa-scale-unbalanced"></i>
            </div>
            <h3>Static Weight</h3>
            <p>Weight not reducing or increasing no matter what you do.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fa-solid fa-cookie-bite"></i>
            </div>
            <h3>Diet Confusion</h3>
            <p>Constant confusion about what to eat and what to avoid.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <h3>Medical Issues</h3>
            <p>High sugar, BP levels, or hormonal imbalances like PCOS.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">
              <i className="fa-solid fa-ban"></i>
            </div>
            <h3>Strict Constraints</h3>
            <p>Tired of diets that are too strict, boring, or simply unsustainable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
