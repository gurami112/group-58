import Nav from "./Components/Nav.jsx"
import Hero from "./Sections/Hero.jsx"
import AboutOurWebPage from "./Sections/AboutOurWebPage.jsx"
import Services from "./Sections/Services.jsx"
import ContactUs from "./Sections/ContactUs.jsx"

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutOurWebPage />
        <Services />
        <ContactUs />
      </main>
    </>
  )
}

export default App
