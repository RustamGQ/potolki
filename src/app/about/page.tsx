import Footer from "../../components/Footer/Footer";
import AboutPage from "../../components/AboutPage/AboutPage";
import CityProvider from "../../contexts/CityContext";
import "../../styles/reset.css";

export default function About() {
  return (
    <CityProvider initialCitySlug="rostov">
      <AboutPage />
      <Footer />
    </CityProvider>
  );
}
