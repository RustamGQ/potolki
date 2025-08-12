"use client";

import './services.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useCity } from '../../contexts/CityContext';
// Используем строковый путь для статических файлов
const cover = '/img/tren.jpg';

type ServiceItem = {
    id: number;
    title: string;
    description: string;
    price: string;
    popular?: boolean;
    image: string;
    features: string[];
};

function Services() {
    const { currentCity } = useCity();
    const servicesData: ServiceItem[] = [
        { id: 1, title: 'Матовые потолки', description: 'Классические матовые потолки. Идеально для любой комнаты.', price: 'от 405₽/м²', image: cover, features: ['BAUF 205', 'Гарантия 15 лет', 'Быстрый монтаж'] },
        { id: 2, title: 'Глянцевые потолки', description: 'Блестящие глянцевые потолки с зеркальным эффектом.', price: 'от 415₽/м²', popular: true, image: cover, features: ['BAUF 205', 'Зеркальный эффект', 'Визуально больше'] },
        { id: 3, title: 'Цветные потолки', description: 'Матовые и глянцевые потолки в любом цвете.', price: 'от 450₽/м²', image: cover, features: ['200+ цветов', 'BAUF 205', 'Индивидуальный дизайн'] },
        { id: 4, title: 'Премиум потолки', description: 'Высококачественные потолки BAUF 270 и TEQTUM.', price: 'от 545₽/м²', image: cover, features: ['BAUF 270', 'TEQTUM EURO', 'Премиум качество'] },
        { id: 5, title: 'Фактурные потолки', description: 'Объёмные текстуры и рельефные поверхности.', price: 'от 880₽/м²', image: cover, features: ['LumFer', '3D текстуры', 'Эксклюзивный дизайн'] },
        { id: 6, title: 'Огнестойкие потолки', description: 'Потолки с повышенной огнестойкостью BAUF FIRE PROOF.', price: 'от 435₽/м²', image: cover, features: ['BAUF FIRE PROOF', 'Безопасность', 'Сертификация'] },
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services__header">
                    <div className="services__badge">
                        <span className="services__badge-text">Наши услуги</span>
                        <div className="services__badge-icon">📸</div>
                    </div>
                    <h2 className="services__title">Фотокаталог <span className="services__title-accent">услуг</span> в {currentCity.name}</h2>
                    <p className="services__subtitle">Выбирайте по фото. Всё, что установим в {currentCity.namePrepositional} — реально так и выглядит.</p>
                </div>

                <div className="services__photoGrid">
                    {servicesData.map((s) => (
                        <article key={s.id} className={`serviceCard ${s.popular ? 'is-popular' : ''}`}>
                            <div className="serviceCard__media">
                                <Image src={s.image} alt={s.title} fill priority sizes="(max-width: 1024px) 100vw, 33vw" />
                                {s.popular && <span className="serviceCard__badge">Популярно</span>}
                                <span className="serviceCard__priceChip">{s.price}</span>
                            </div>
                            <div className="serviceCard__info">
                                <h3 className="serviceCard__title">{s.title}</h3>
                                <p className="serviceCard__desc">{s.description}</p>
                                <ul className="serviceCard__features">
                                    {s.features.map((f, i) => (
                                        <li key={i} className="serviceCard__feature">{f}</li>
                                    ))}
                                </ul>
                                <div className="serviceCard__actions">
                                    <a href="tel:+79180000000" className="serviceCard__btn serviceCard__btn--primary">Заказать</a>
                                    <Link href={`/${currentCity.slug}/services`} className="serviceCard__btn serviceCard__btn--ghost">Подробнее</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;