import Header from "../components/header/header";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import "../styles/reset.css";

export default function Home() {
  return (
    <> 
      <Header />
      <Hero />
      <Portfolio />
    </>
  );
}
