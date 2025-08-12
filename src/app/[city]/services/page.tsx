import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '../../../lib/cities';
import ServicesPage from '../../../components/ServicesPage/ServicesPage';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../../components/Footer/Footer';

interface CityServicesPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityServicesPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: `Услуги натяжных потолков в ${city.name} - Цены и виды работ | ПОТОЛКИ`,
    description: `Услуги натяжных потолков в ${city.name}. Матовые, глянцевые, с фотопечатью. Бесплатный замер, монтаж за 1 день. Цены от 1200₽/м². Звоните!`,
    keywords: `натяжные потолки ${city.name.toLowerCase()}, услуги потолков ${city.name.toLowerCase()}, монтаж потолков ${city.name.toLowerCase()}, цены на потолки ${city.name.toLowerCase()}, матовые потолки ${city.name.toLowerCase()}, глянцевые потолки ${city.name.toLowerCase()}`,
    openGraph: {
      title: `Услуги натяжных потолков в ${city.name} - Цены и виды работ`,
      description: `Услуги натяжных потолков в ${city.name}. Матовые, глянцевые, с фотопечатью. Бесплатный замер, монтаж за 1 день.`,
      type: 'website',
      locale: 'ru_RU',
      url: `https://yourdomain.com/${city.slug}/services`,
    },
    alternates: {
      canonical: `https://yourdomain.com/${city.slug}/services`,
    },
  };
}

export default async function CityServicesPage({ params }: CityServicesPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Главная', href: `/${city.slug}` },
    { name: 'Услуги', href: `/${city.slug}/services` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ServicesPage key={city.slug} city={city} />
      <Footer />
    </>
  );
}
