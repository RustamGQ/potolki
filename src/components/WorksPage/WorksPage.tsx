import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { City } from '../../types/city';
import './worksPage.scss';
import cover from '@/img/tren.jpg';

type WorkItem = {
  id: number;
  title: string;
  subtitle: string;
  img: typeof cover;
};

const items: WorkItem[] = [
  { id: 1, title: 'Гостиная · Парящий контур', subtitle: 'Ростов-на-Дону', img: cover },
  { id: 2, title: 'Кухня · Матовый белый', subtitle: 'Аксай', img: cover },
  { id: 3, title: 'Спальня · Тканевый', subtitle: 'Батайск', img: cover },
  { id: 4, title: 'Коридор · Точечный свет', subtitle: 'Ростов-на-Дону', img: cover },
  { id: 5, title: 'Детская · С подсветкой', subtitle: 'Азов', img: cover },
  { id: 6, title: 'Ванная · Влагостойкий', subtitle: 'Ростов-на-Дону', img: cover },
  { id: 7, title: 'Кабинет · Сатиновый', subtitle: 'Батайск', img: cover },
  { id: 8, title: 'Студия · 2 уровня', subtitle: 'Ростов-на-Дону', img: cover },
];

interface WorksPageProps {
  city?: City;
}

const WorksPage: React.FC<WorksPageProps> = ({ city }) => {
  return (
    <main className="works-page">
      <section className="works-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Наши работы</span>
            <h1>Портфолио выполненных проектов {city ? `в ${city.name}` : ''}</h1>
            <p>Живые примеры: как это выглядит в квартирах и домах наших клиентов {city ? `в ${city.namePrepositional}` : ''}.</p>
          </div>
        </div>
      </section>

      <section className="works-grid">
        <div className="container">
          <div className="grid">
            {items.map((it) => (
              <article key={it.id} className="work-card">
                <div className="media">
                  <Image src={it.img} alt={it.title} width={1200} height={800} />
                </div>
                <div className="overlay">
                  <h3>{it.title}</h3>
                  <span>{it.subtitle}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="works-cta">
        <div className="container">
          <div className="cta">
            <h2>Хотите подобный результат?</h2>
            <p>Приедем сегодня, подберём решения под ваш бюджет и интерьер.</p>
            <div className="actions">
              <a href="tel:+79180000000" className="btn-primary">Быстрый звонок</a>
              <Link href={city ? `/${city.slug}/calculator` : "/calculator"} className="btn-outline">Рассчитать стоимость</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorksPage;


