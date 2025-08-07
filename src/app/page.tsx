import Header from "../components/header/header";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import "../styles/reset.css";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Footer />
    </>
  );
}
