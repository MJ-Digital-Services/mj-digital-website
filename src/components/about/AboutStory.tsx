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
              MJ Digital Services started in <strong>2007</strong> with a simple
              belief — that technology should make business easier, not harder.
              Today, we&apos;re the parent company behind three flagship digital
              products: <strong>EzeePay</strong>, <strong>Zoki</strong>, and{" "}
              <strong>Mobilocker</strong>.
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
            <div className="about-image-placeholder">
              <Rocket size={36} />
              <span>office-photo.jpg</span>
              <small>Replace in /public/about-office.jpg</small>
            </div>
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