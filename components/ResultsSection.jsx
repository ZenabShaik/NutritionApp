import Image from "next/image";
import TestimonialVideoCard from "./TestimonialVideoCard";

export default function ResultsSection() {
  const resultsData = [
    {
      id: 1,
      src: "/images/r1.jpeg",
      title: "2kg Weight Loss in 1 Week"
    },
    {
      id: 2,
      src: "/images/r4.jpeg",
      title: "Diet Transformation Success"
    },
    {
      id: 3,
      src: "/images/r5.jpeg",
      title: "4kg Loss in 2 Months"
    },
    {
      id: 4,
      src: "/images/r6.jpeg",
      title: "5kg Weight Loss + No Body Pain"
    },
    {
      id: 5,
      src: "/images/r7.jpeg",
      title: "Daily Progress & Consistency"
    },
    {
      id: 6,
      src: "/images/r8.jpeg",
      title: "HbA1c Improved (7% → 5.6%)"
    }
  ];

  return (
    <section className="bg-light" id="results" style={{ padding: "6rem 0" }}>
      <div className="container text-center">
        <h2 className="section-title">Real Results. Real People.</h2>
        <p className="section-subtitle">
          See what happens when you commit to sustainable health.
        </p>

        {/* Image Results */}
        <div style={{ marginBottom: "4rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--primary-color)" }}>
            Client Updates
          </h3>

          <div className="client-updates">
  {resultsData.map((item) => (
    <div key={item.id} className="update-card">

      <div className="update-img-wrapper">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 80vw, 260px"
          quality={100}
          priority={item.id === 1}
          style={{ objectFit: "cover" }}
        />
      </div>

      <h4 className="update-title">
        {item.title}
      </h4>

    </div>
  ))}
</div>
        </div>

        {/* Videos (unchanged) */}
        <h3 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "var(--primary-color)" }}>
          Video Success Stories
        </h3>

        <div className="video-carousel">

  <div className="video-card-wrapper">
    <TestimonialVideoCard
      name="S. Prasad"
      quote="6 kg weight loss with a healthy balanced diet. Sugars in control..."
      videoSrc="/videos/r2.mp4"
      result="6kg Weight Loss"
      duration="0:26"
    />
  </div>

  <div className="video-card-wrapper">
    <TestimonialVideoCard
      name="Vishal"
      quote="Sugars in control! HbA1c reduced (8.1% to 7.8%)..."
      videoSrc="/videos/r3.mp4"
      result="HbA1c Improved"
      duration="0:24"
    />
  </div>

</div>
      </div>
    </section>
  );
}