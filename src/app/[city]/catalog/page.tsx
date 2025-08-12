import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import Catalog from '../../../components/Catalog/Catalog';

interface CatalogPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CatalogPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Каталог натяжных потолков - ПОТОЛКИ',
      description: 'Каталог натяжных потолков с ценами и характеристиками. Выберите подходящий потолок для вашего помещения.'
    };
  }

  return {
    title: `Каталог натяжных потолков в ${city.name} - цены от производителя`,
    description: `Каталог натяжных потолков в ${city.name} с ценами и характеристиками. Выберите подходящий потолок для вашего помещения.`,
    keywords: `каталог натяжных потолков ${city.name}, потолки ${city.name}, натяжные потолки каталог ${city.name}`,
    openGraph: {
      title: `Каталог натяжных потолков в ${city.name} - ПОТОЛКИ`,
      description: `Каталог натяжных потолков в ${city.name} с ценами и характеристиками.`,
      type: 'website',
      locale: 'ru_RU'
    },
    alternates: {
      canonical: `https://potolki.ru/${city.slug}/catalog`
    }
  };
}

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  return (
    <main>
      <Catalog 
        citySlug={city.slug}
      />
    </main>
  );
}
