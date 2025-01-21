export default function CommonHeading({ heading, title, subtitle }) {
  return (
    <>
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title text-center text-muted text-uppercase mb-3">
          {heading}
        </h6>
        <h1 className="mb-4 font-weight-bold" style={{ fontSize: '2.5rem' }}>
          {subtitle}{" "}
          <span className="text-primary" style={{ textTransform: 'uppercase', fontWeight: '700' }}>
            {title}
          </span>
        </h1>
        <p className="text-muted" style={{ fontSize: '1rem', maxWidth: '800px', margin: '0 auto' }}>
          {subtitle && `Elevating your experience with premium offerings and services.`}
        </p>
      </div>
    </>
  );
}
