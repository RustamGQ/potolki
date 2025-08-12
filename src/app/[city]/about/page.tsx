import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '../../../lib/cities';
import About from '../../../components/About/About';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../../components/Footer/Footer';

interface CityAboutPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityAboutPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: `О компании - Натяжные потолки в ${city.name} | ПОТОЛКИ`,
    description: `О нашей компании по установке натяжных потолков в ${city.name}. Профессиональная команда, качественные материалы, гарантия 15 лет.`,
    keywords: `о компании натяжные потолки ${city.name.toLowerCase()}, команда потолки ${city.name.toLowerCase()}, опыт потолки ${city.name.toLowerCase()}, гарантия потолки ${city.name.toLowerCase()}`,
    openGraph: {
      title: `О компании - Натяжные потолки в ${city.name}`,
      description: `О нашей компании по установке натяжных потолков в ${city.name}. Профессиональная команда, качественные материалы.`,
      type: 'website',
      locale: 'ru_RU',
      url: `https://yourdomain.com/${city.slug}/about`,
    },
    alternates: {
      canonical: `https://yourdomain.com/${city.slug}/about`,
    },
  };
}

export default async function CityAboutPage({ params }: CityAboutPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Главная', href: `/${city.slug}` },
    { name: 'О компании', href: `/${city.slug}/about` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <About />
      <Footer />
    </>
  );
}
