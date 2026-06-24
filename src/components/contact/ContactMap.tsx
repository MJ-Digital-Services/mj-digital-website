export default function ContactMap() {
  return (
    <div className="contact-map-wrap">
      <div className="contact-map-inner">
        <div className="contact-map-label">
          <div className="contact-map-label-dot" />
          <span>MJ Digital, Bhutani Techno Park, Sector 127, Noida</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.127016458641!2d77.34321847617521!3d28.535901688460942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce670f356fd21%3A0x4c3ff857e0997214!2sBhutani%20Techno%20Park!5e0!3m2!1sen!2sin!4v1782304292771!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block", filter: "grayscale(15%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MJ Digital Services Office Location"
        />
      </div>
    </div>
  );
}