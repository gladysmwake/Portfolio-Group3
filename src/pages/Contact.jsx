export default function Contact() {
  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      <p style={{ textAlign: "center" }}>Get in touch with Group3.</p>
      <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          style={{ padding: "10px" }}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          style={{ padding: "10px" }}
        />
        <label>Message</label>
        <textarea
          placeholder="Your message"
          style={{ padding: "10px", minHeight: "120px" }}
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Send Message
        </button>
      </form>
    </main>
  );
}
