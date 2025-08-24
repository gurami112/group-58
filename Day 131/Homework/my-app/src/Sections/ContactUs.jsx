function ContactUs() {
  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <h2>Contact Us</h2>
        <form className="form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
