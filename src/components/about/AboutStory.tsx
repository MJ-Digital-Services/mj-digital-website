import { Rocket } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="about-story">
      <div className="about-story-inner">
        <div className="about-story-text">
          <div className="about-section-label">Our Story</div>
          <h2 className="about-section-title">
            Transforming ideas into scalable digital solutions
          </h2>
          <div className="about-story-body">
            <p>
              MJ Digital Services started in <strong>2018</strong> with a simple belief — that technology
              should make business easier, not harder. Today, we're the parent company
              behind four flagship digital products: <strong>EzeePay</strong>, <strong>Zoki</strong>, <strong>Mobilocker</strong>, and <strong>Cashlo</strong>.
            </p>
            <p>
              What started as a small team of engineers has grown into a
              Noida-based technology company serving{" "}
              <strong>50+ clients</strong> across fintech, retail, education,
              healthcare, logistics, telecom, and government services.
            </p>
            <p>
              Our expertise spans software development, fintech APIs, cloud
              infrastructure, AI, and enterprise solutions — but our focus has
              always stayed the same: helping businesses grow through technology
              that actually works.
            </p>
          </div>
        </div>
        <div className="about-story-visual">
          <div className="about-story-image">
            <img
              src="/about-office.jpeg"
              alt="MJ Digital Services office"
              className="about-story-img"
              // style={{}}
            />
          </div>
          <div className="about-story-floater">
            <div className="about-story-floater-num">17+</div>
            <div className="about-story-floater-label">Years in Business</div>
          </div>
        </div>
      </div>
    </section>
  );
}