import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../lib/cities';
import { notFound } from 'next/navigation';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import Calculator from '../../components/Calculator/Calculator';
import WorkZone from '../../components/WorkZone/WorkZone';
import Footer from '../../components/Footer/Footer';
import JsonLdWrapper from '../../components/JsonLd/JsonLdWrapper';
import "../../styles/reset.css";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Натяжные потолки - ПОТОЛКИ',
      description: 'Профессиональная установка натяжных потолков. Качественные материалы, опытные мастера, гарантия на работы.'
    };
  }

  return {
    title: `Натяжные потолки в ${city.name} - цены от 1200₽/м² | ПОТОЛКИ`,
    description: `Натяжные потолки в ${city.name}. Профессиональная установка, качественные материалы, опытные мастера. Цены от 1200₽/м². Бесплатный замер, гарантия качества.`,
    keywords: `натяжные потолки ${city.name}, потолки ${city.name}, установка потолков ${city.name}, матовые потолки, глянцевые потолки, сатиновые потолки`,
    openGraph: {
      title: `Натяжные потолки в ${city.name} - ПОТОЛКИ`,
      description: `Профессиональная установка натяжных потолков в ${city.name}. Цены от 1200₽/м².`,
      type: 'website',
      locale: 'ru_RU'
    },
    alternates: {
      canonical: `https://potolki.ru/${city.slug}`
    }
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  return (
    <>
      <Hero key={`hero-${city.slug}`} />
      <Portfolio key={`portfolio-${city.slug}`} />
      <About key={`about-${city.slug}`} />
      <Services key={`services-${city.slug}`} />
      <WorkZone key={`workzone-${city.slug}`} />
      <Footer />
    </>
  );
}
