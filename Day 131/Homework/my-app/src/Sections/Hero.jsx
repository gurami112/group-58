function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div>
          <h1>Welcome to My Web</h1>
          <p>Simple, clean, single-page site built with React.</p>
          <a href="#about" className="btn">Learn more</a>
        </div>
        <img src="/hero.jpg" alt="Hero" className="hero-img" />
      </div>
    </section>
  )
}

export default Hero
