export default function ProductsPage() {
  return (
    <>
      <h2>Our Pest Control Products</h2>
      <ProductCard
        title="Bait station | Price: R350"
        desc="A safe and effective trap for indoor and outdoor use."
        img="/Nomakanjani2.jpg"
      />
      <ProductCard
        title="Rodent Poison | Price: R80 each"
        desc="Humane traps for mice and rats, reusable and easy to set up."
        img="/Nomakanjani3.jpg"
      />
      <ProductCard
        title="Fumigation service | R200 per room"
        desc="Long‑lasting termite prevention treatment for your property."
        img="/Nomakanjani4.jpg"
      />
    </>
  );
}

function ProductCard({ title, desc, img }) {
  return (
    <div style={{ background: "#fff", border: "2px solid #a0522d", padding: "15px", margin: "10px 0", borderRadius: "4px" }}>
      <h3 style={{ color: "green" }}>{title}</h3>
      <p>{desc}</p>
      <img src={img} style={{ width: "50%", borderRadius: "8px", marginTop: "10px" }} />
    </div>
  );
}
