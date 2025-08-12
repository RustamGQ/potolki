import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '../../../lib/cities';
import WorksPage from '../../../components/WorksPage/WorksPage';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../../components/Footer/Footer';

interface CityWorksPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityWorksPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: `Наши работы в ${city.name} - Портфолио натяжных потолков | ПОТОЛКИ`,
    description: `Портфолио выполненных работ по установке натяжных потолков в ${city.name}. Фото до и после, отзывы клиентов. Бесплатный замер и расчет.`,
    keywords: `натяжные потолки ${city.name.toLowerCase()}, работы потолки ${city.name.toLowerCase()}, портфолио потолков ${city.name.toLowerCase()}, фото потолков ${city.name.toLowerCase()}, установка потолков ${city.name.toLowerCase()}`,
    openGraph: {
      title: `Наши работы в ${city.name} - Портфолио натяжных потолков`,
      description: `Портфолио выполненных работ по установке натяжных потолков в ${city.name}. Фото до и после, отзывы клиентов.`,
      type: 'website',
      locale: 'ru_RU',
      url: `https://yourdomain.com/${city.slug}/works`,
    },
    alternates: {
      canonical: `https://yourdomain.com/${city.slug}/works`,
    },
  };
}

export default async function CityWorksPage({ params }: CityWorksPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Главная', href: `/${city.slug}` },
    { name: 'Наши работы', href: `/${city.slug}/works` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <WorksPage key={city.slug} city={city} />
      <Footer />
    </>
  );
}
