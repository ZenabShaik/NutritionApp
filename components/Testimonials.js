export default function Testimonials() {
  const testimonials = [
    {
      name: "Anjali Reddy",
      image: "/images/users/user1.jpeg",
      quote:
        "Reduced 5kg with daily walking and balanced diet. No bloating now and leg pain completely gone.",
      result: "5kg Weight Loss + No Body Pain"
    },
    {
      name: "Rahul Verma",
      image: "/images/users/user2.jpeg",
      quote:
        "Lost 4kg in 2 months just by reducing rice and staying consistent with 1 hour activity.",
      result: "4kg Loss in 2 Months"
    },
    {
      name: "Sneha Sharma",
      image: "/images/users/user3.jpeg",
      quote:
        "Dropped from 69kg to 67kg in just one week.",
      result: "2kg Loss in 1 Week"
    },
    {
      name: "Amit Patel",
      image: "/images/users/user4.jpeg",
      quote:
        "HbA1c reduced from 7% to 5.6%.",
      result: "Diabetes Reversed Range"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container text-center">
        <h2 className="section-title">Stories of Transformation</h2>

        <div className="testimonial-carousel">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">

              {/* Rating */}
              <div className="t-rating">★★★★★</div>

              {/* Result Highlight */}
              <div className="result-badge">{item.result}</div>

              {/* Quote */}
              <p className="t-text">"{item.quote}"</p>

              {/* User */}
              <div className="t-user">
                <img
                  src={item.image}   // ✅ FIXED: using your actual images
                  alt={item.name}
                  className="t-avatar"
                  loading="lazy"
                />

                <div className="t-info">
                  <h4>{item.name}</h4>
                  <span>Verified via WhatsApp</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}