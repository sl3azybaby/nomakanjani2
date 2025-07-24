export default function HomePage() {
  return (
    <>
      <h2>Welcome to Nomakanjani Pest Control</h2>
      <p>
        At Nomakanjani, we keep your space pest‑free using safe, effective, and environmentally friendly methods. From rodents to termites, we have you covered!
      </p>

      {/* Video now loads correctly from /public */}
      <video width="100%" height="240" controls autoPlay muted>
        <source src="/0227.mp4" type="video/mp4" />
        <source src="/0227.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
