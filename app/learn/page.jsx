import Image from "next/image";

export default function LearnPage() {
  return (
    <section style={{ padding: "80px 20px" }}>
      <div className="learn-container">

        {/* LEFT CONTENT */}
        <div className="learn-content">
          <h1>
            Learn Diet Planning from Mandaji Mahalakshmi
          </h1>

          <p className="learn-sub">
            Practical training to help you master diet menu calculations and real-world nutrition planning.
          </p>

          <ul className="learn-list">
            <li>✔ Diet Menu Calculations (step-by-step)</li>
            <li>✔ Real Client Case Studies</li>
            <li>✔ Meal Planning Techniques</li>
            <li>✔ Weight Loss & Medical Diet Planning</li>
            <li>✔ Live Online Sessions</li>
            <li>✔ Doubt Clearing Support</li>
          </ul>

          <a
            href="https://wa.me/916305778829?text=Hi , I am interested in your diet planning course. Please share details."
            target="_blank"
            className="btn btn-primary"
          >
            Register Now
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="learn-image">
          <div className="learn-image-wrapper">
            <Image
              src="/images/diet-training.jpg"
              alt="Diet planning training"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              style={{ objectFit: "cover" }}
            />
          </div>

          <p className="learn-caption">
            Real diet charts. Real client cases. Real skills.
          </p>
        </div>

      </div>
    </section>
  );
}