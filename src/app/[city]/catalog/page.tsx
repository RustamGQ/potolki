import { Metadata } from 'next';
import { getCityBySlug } from '../../../lib/cities';
import { getCatalogData } from '../../../lib/catalog';
import Catalog from '../../../components/Catalog/Catalog';
import { notFound } from 'next/navigation';

interface CatalogPageProps {
  params: {
    city: string;
  };
}

export async function generateMetadata({ params }: CatalogPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  
  if (!city) {
    return {
      title: 'Каталог натяжных потолков - ПОТОЛКИ',
      description: 'Каталог натяжных потолков с фильтрацией по типам, текстурам и помещениям. Выберите подходящий потолок для вашего интерьера.'
    };
  }

  return {
    title: `Каталог натяжных потолков в ${city.name} - Цены от 1200₽/м² | ПОТОЛКИ`,
    description: `Каталог натяжных потолков в ${city.name}. Матовые, глянцевые, сатиновые потолки с фотопечатью и подсветкой. Цены от 1200₽/м². Бесплатный замер, гарантия качества.`,
    keywords: `каталог натяжных потолков ${city.name}, потолки ${city.name}, матовые потолки, глянцевые потолки, сатиновые потолки, потолки с подсветкой, звездное небо, фотопечать на потолке`,
    openGraph: {
      title: `Каталог натяжных потолков в ${city.name} - ПОТОЛКИ`,
      description: `Каталог натяжных потолков в ${city.name}. Выберите подходящий потолок для вашего интерьера. Цены от 1200₽/м².`,
      type: 'website',
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `https://potolki.ru/${city.slug}/catalog`
    }
  };
}

export default function CatalogPage({ params }: CatalogPageProps) {
  const city = getCityBySlug(params.city);
  
  if (!city) {
    notFound();
  }

  const initialData = getCatalogData();

  return (
    <main>
      <Catalog 
        citySlug={city.slug}
        initialData={initialData}
      />
    </main>
  );
}
