import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '../../lib/cities';
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import WorkZone from "../../components/WorkZone/WorkZone";
import Footer from "../../components/Footer/Footer";
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
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: city.seoTitle,
    description: city.seoDescription,
    keywords: `натяжные потолки ${city.name.toLowerCase()}, потолки ${city.name.toLowerCase()}, установка потолков ${city.name.toLowerCase()}, монтаж потолков ${city.name.toLowerCase()}`,
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      type: 'website',
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `https://yourdomain.com/${city.slug}`,
    },
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
