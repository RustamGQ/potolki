import './services.scss';
import Image from 'next/image';
import cover from '@/img/tren.jpg';

type ServiceItem = {
    id: number;
    title: string;
    description: string;
    price: string;
    popular?: boolean;
    image: any;
    features: string[];
};

function Services() {
    const servicesData: ServiceItem[] = [
        { id: 1, title: 'Классические натяжные потолки', description: 'Быстрый монтаж без пыли. Идеально для любой комнаты.', price: 'от 350₽/м²', image: cover, features: ['Матовый/глянцевый', 'Гарантия 15 лет', '200+ цветов'] },
        { id: 2, title: 'Многоуровневые потолки', description: 'Эффектные формы и скрытая подсветка для зонального света.', price: 'от 950₽/м²', popular: true, image: cover, features: ['Дизайн-проект', 'Скрытая LED', 'Зонирование'] },
        { id: 3, title: 'Фотопечать', description: 'Любое изображение на потолке в HD‑качестве.', price: 'от 1200₽/м²', image: cover, features: ['UV-краски', 'HD-печать', 'Не выцветает'] },
        { id: 4, title: 'Звездное небо', description: 'Оптоволокно и мерцание. Космос у вас дома.', price: 'от 2500₽/м²', image: cover, features: ['Оптоволокно', 'Пульт/режимы', 'Безопасно'] },
        { id: 5, title: 'Парящие потолки', description: 'Эффект левитации благодаря контурной LED‑подсветке.', price: 'от 850₽/м²', image: cover, features: ['Контурный свет', 'Диммирование', 'Экономично'] },
        { id: 6, title: '3D потолки', description: 'Объёмные конструкции и яркая игра света и тени.', price: 'от 1800₽/м²', image: cover, features: ['Объёмные формы', 'Эксклюзив', 'Премиум материалы'] },
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="services__header">
                    <div className="services__badge">
                        <span className="services__badge-text">Наши услуги</span>
                        <div className="services__badge-icon">📸</div>
                    </div>
                    <h2 className="services__title">Фотокаталог <span className="services__title-accent">услуг</span></h2>
                    <p className="services__subtitle">Выбирайте по фото. Всё, что установим — реально так и выглядит.</p>
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
                                    <a href="/services" className="serviceCard__btn serviceCard__btn--ghost">Подробнее</a>
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