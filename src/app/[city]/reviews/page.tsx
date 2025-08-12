import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '../../../lib/cities';
import ReviewsPage from '../../../components/ReviewsPage/ReviewsPage';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../../components/Footer/Footer';

interface CityReviewsPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityReviewsPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: `Отзывы о натяжных потолках в ${city.name} - Реальные отзывы клиентов | ПОТОЛКИ`,
    description: `Отзывы клиентов о натяжных потолках в ${city.name}. Реальные отзывы с фото, рейтинги, рекомендации. Бесплатный замер и расчет.`,
    keywords: `отзывы натяжные потолки ${city.name.toLowerCase()}, отзывы потолки ${city.name.toLowerCase()}, клиенты потолки ${city.name.toLowerCase()}, рейтинг потолки ${city.name.toLowerCase()}, установка потолков ${city.name.toLowerCase()}`,
    openGraph: {
      title: `Отзывы о натяжных потолках в ${city.name} - Реальные отзывы клиентов`,
      description: `Отзывы клиентов о натяжных потолках в ${city.name}. Реальные отзывы с фото, рейтинги, рекомендации.`,
      type: 'website',
      locale: 'ru_RU',
      url: `https://yourdomain.com/${city.slug}/reviews`,
    },
    alternates: {
      canonical: `https://yourdomain.com/${city.slug}/reviews`,
    },
  };
}

export default async function CityReviewsPage({ params }: CityReviewsPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Главная', href: `/${city.slug}` },
    { name: 'Отзывы', href: `/${city.slug}/reviews` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <ReviewsPage key={city.slug} city={city} />
      <Footer />
    </>
  );
}
