export const metadata = {
  title: "Nomakanjani Pest Control",
  description: "Trusted eco‑friendly pest solutions for your home & business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans‑serif",
          background: "#f9f9f9",
        }}
      >
        <header
          style={{
            background: "#000",
            color: "#a0522d",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#32a852" }}>
            {/* ✅ Loads from /public/ChatGPT.jpg correctly */}
            <img
              src="/ChatGPT.jpg"
              width="80"
              height="80"
              alt="Nomakanjani Pest Control Logo"
              style={{ borderRadius: "8px" }}
            />{" "}
            Nomakanjani Pest Control
          </h1>
          <p>Trusted eco‑friendly pest solutions for your home & business</p>
        </header>

        <nav
          style={{
            background: "#2c2c2c",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <main
          style={{
            padding: "20px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          {children}
        </main>

        <footer
          style={{
            background: "#000",
            color: "#a0522d",
            textAlign: "center",
            padding: "10px",
          }}
        >
          © 2025 Nomakanjani Pest Control | All rights reserved.
        </footer>
      </body>
    </html>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      style={{
        color: "#32a852",
        padding: "15px 20px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      {children}
    </a>
  );
}
