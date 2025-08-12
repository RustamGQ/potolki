import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '../../../lib/cities';
import Calculator from '../../../components/Calculator/Calculator';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../../components/Footer/Footer';

interface CityCalculatorPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityCalculatorPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: `Калькулятор натяжных потолков в ${city.name} - Рассчитать стоимость онлайн | ПОТОЛКИ`,
    description: `Калькулятор стоимости натяжных потолков в ${city.name}. Рассчитайте цену онлайн за 2 минуты. Бесплатный замер и расчет.`,
    keywords: `калькулятор натяжные потолки ${city.name.toLowerCase()}, рассчитать стоимость потолков ${city.name.toLowerCase()}, цена потолки ${city.name.toLowerCase()}, расчет потолков ${city.name.toLowerCase()}, стоимость установки потолков ${city.name.toLowerCase()}`,
    openGraph: {
      title: `Калькулятор натяжных потолков в ${city.name} - Рассчитать стоимость онлайн`,
      description: `Калькулятор стоимости натяжных потолков в ${city.name}. Рассчитайте цену онлайн за 2 минуты.`,
      type: 'website',
      locale: 'ru_RU',
      url: `https://yourdomain.com/${city.slug}/calculator`,
    },
    alternates: {
      canonical: `https://yourdomain.com/${city.slug}/calculator`,
    },
  };
}

export default async function CityCalculatorPage({ params }: CityCalculatorPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Главная', href: `/${city.slug}` },
    { name: 'Калькулятор', href: `/${city.slug}/calculator` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Calculator key={city.slug} city={city} />
      <Footer />
    </>
  );
}
