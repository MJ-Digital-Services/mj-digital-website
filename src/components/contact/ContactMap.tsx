export default function ContactMap() {
  return (
    <div className="contact-map-wrap">
      <div className="contact-map-inner">
        <div className="contact-map-label">
          <div className="contact-map-label-dot" />
          <span>Ezeepay, Bhutani Techno Park, Sector 127, Noida</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.6734247665905!2d77.34493287597321!3d28.53470422193527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d5fbe07955%3A0xa455df64d17726cd!2sEzeepay!5e0!3m2!1sen!2sin!4v1781340014741!5m2!1sen!2sin"
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