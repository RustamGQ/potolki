import { Metadata } from 'next';
import { getCatalogData } from '../../lib/catalog';
import Catalog from '../../components/Catalog/Catalog';

export const metadata: Metadata = {
  title: 'Каталог натяжных потолков - Цены от 1200₽/м² | ПОТОЛКИ',
  description: 'Каталог натяжных потолков с фильтрацией по типам, текстурам и помещениям. Матовые, глянцевые, сатиновые потолки с фотопечатью и подсветкой. Цены от 1200₽/м².',
  keywords: 'каталог натяжных потолков, матовые потолки, глянцевые потолки, сатиновые потолки, потолки с подсветкой, звездное небо, фотопечать на потолке, двухуровневые потолки',
  openGraph: {
    title: 'Каталог натяжных потолков - ПОТОЛКИ',
    description: 'Каталог натяжных потолков с фильтрацией. Выберите подходящий потолок для вашего интерьера. Цены от 1200₽/м².',
    type: 'website',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://potolki.ru/catalog'
  }
};

export default function CatalogPage() {
  const initialData = getCatalogData();

  return (
    <main>
      <Catalog 
        initialData={initialData}
      />
    </main>
  );
}
