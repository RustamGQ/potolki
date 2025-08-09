import React from 'react';
import Image from 'next/image';
import './servicesPage.scss';
import cover from '@/img/tren.jpg';

const photoCards = [
  { id: 1, title: 'Классические', price: 'от 350₽/м²' },
  { id: 2, title: 'С подсветкой', price: 'от 800₽/м²' },
  { id: 3, title: 'Парящие', price: 'от 850₽/м²' },
  { id: 4, title: 'Многоуровневые', price: 'от 1200₽/м²' },
  { id: 5, title: 'Фотопечать', price: 'от 1500₽/м²' },
  { id: 6, title: '3D потолки', price: 'от 1800₽/м²' },
];

const ServicesPage: React.FC = () => {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Услуги</span>
            <h1>Натяжные потолки под ключ</h1>
            <p>Полный спектр услуг с реальными примерами. Фото ниже — из наших проектов.</p>
          </div>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <div className="services-header">
            <h2>Выбирайте по фото</h2>
            <p>Лучше один раз увидеть. Кликай по карточке — обсудим детали.</p>
          </div>
          <div className="services-cards">
            {photoCards.map((c) => (
              <a key={c.id} className="service-card featured" href="tel:+79180000000">
                <div className="card-header">
                  <div className="featured-badge">Популярно</div>
                  <h3>{c.title}</h3>
                  <div className="price">{c.price}</div>
                </div>
                <div className="card-content">
                  <Image src={cover} alt={c.title} width={1000} height={700} style={{borderRadius: 16}} />
                  <div className="card-actions">
                    <span className="btn-primary">Позвонить</span>
                    <span className="btn-secondary">Подробнее</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы к бесплатному замеру сегодня</h2>
            <p>Работаем по Ростову-на-Дону и области. Привезем образцы, подберем решения под ваш бюджет.</p>
            <div className="cta-actions">
              <a href="tel:+79180000000" className="btn-primary-large">Позвонить для консультации</a>
              <a href="#contact" className="btn-outline">Оставить заявку</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
