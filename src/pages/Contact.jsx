export default function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>Get in touch with Group3.</p>

      <form>
        <label>Name</label>
        <input type="text" placeholder="Your name" />

        <label>Email</label>
        <input type="email" placeholder="Your email" />

        <label>Message</label>
        <textarea placeholder="Your message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}
