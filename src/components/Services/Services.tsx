import './services.scss';

function Services() {
    const servicesData = [
        {
            id: 1,
            icon: "🏠",
            title: "Классические натяжные потолки",
            description: "Идеальное решение для любого помещения. Быстрый монтаж без пыли и грязи.",
            features: ["Гарантия 15 лет", "Более 200 цветов", "Влагостойкость", "Антистатический эффект"],
            price: "от 350₽/м²",
            popular: false
        },
        {
            id: 2,
            icon: "⭐",
            title: "Многоуровневые потолки",
            description: "Создайте уникальный дизайн с помощью сложных конструкций и скрытой подсветки.",
            features: ["Индивидуальный дизайн", "LED подсветка", "Зонирование пространства", "3D эффекты"],
            price: "от 950₽/м²",
            popular: true
        },
        {
            id: 3,
            icon: "💎",
            title: "Фотопечать на потолке",
            description: "Превратите потолок в произведение искусства с помощью фотопечати высокого качества.",
            features: ["HD качество печати", "UV-стойкие краски", "Любые изображения", "Матовая/глянцевая текстура"],
            price: "от 1200₽/м²",
            popular: false
        },
        {
            id: 4,
            icon: "✨",
            title: "Звездное небо",
            description: "Создайте романтическую атмосферу с эффектом звездного неба в спальне или детской.",
            features: ["Оптоволоконные нити", "Пульт управления", "Разные режимы свечения", "Безопасные материалы"],
            price: "от 2500₽/м²",
            popular: false
        },
        {
            id: 5,
            icon: "🔥",
            title: "Парящие потолки",
            description: "Современный тренд с эффектом левитации потолка благодаря скрытой LED-подсветке.",
            features: ["Визуальное увеличение высоты", "Энергосберегающие LED", "Dimmer управление", "Теплый/холодный свет"],
            price: "от 850₽/м²",
            popular: true
        },
        {
            id: 6,
            icon: "🌊",
            title: "3D потолки",
            description: "Объемные конструкции, которые превратят ваш потолок в настоящее произведение искусства.",
            features: ["Объемные формы", "Игра света и тени", "Эксклюзивный дизайн", "Премиум материалы"],
            price: "от 1800₽/м²",
            popular: false
        }
    ];

    return (
        <section className="services" id="services">
            {/* Декоративный фон */}
            <div className="services__bg">
                <div className="services__floating-elements">
                    <div className="services__element services__element--1"></div>
                    <div className="services__element services__element--2"></div>
                    <div className="services__element services__element--3"></div>
                    <div className="services__element services__element--4"></div>
                </div>
                <div className="services__geometric-patterns">
                    <div className="services__pattern services__pattern--circle"></div>
                    <div className="services__pattern services__pattern--hexagon"></div>
                </div>
            </div>

            <div className="container">
                <div className="services__layout">
                    {/* Заголовок секции */}
                    <div className="services__header">
                        <div className="services__badge">
                            <span className="services__badge-text">Наши услуги</span>
                            <div className="services__badge-icon">🔧</div>
                        </div>
                        <h2 className="services__title">
                            Полный спектр <span className="services__title-accent">услуг</span>
                        </h2>
                        <p className="services__subtitle">
                            От классических решений до эксклюзивных дизайнерских проектов. 
                            Выберите идеальный вариант для вашего интерьера.
                        </p>
                    </div>

                    {/* Сетка услуг */}
                    <div className="services__grid">
                        {servicesData.map((service) => (
                            <div 
                                key={service.id} 
                                className={`services__card ${service.popular ? 'services__card--popular' : ''}`}
                            >
                                {service.popular && (
                                    <div className="services__card-badge">
                                        <span>Популярно</span>
                                    </div>
                                )}
                                
                                <div className="services__card-header">
                                    <div className="services__card-icon">
                                        {service.icon}
                                    </div>
                                    <div className="services__card-price">
                                        {service.price}
                                    </div>
                                </div>

                                <div className="services__card-content">
                                    <h3 className="services__card-title">
                                        {service.title}
                                    </h3>
                                    <p className="services__card-description">
                                        {service.description}
                                    </p>

                                    <ul className="services__card-features">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="services__card-feature">
                                                <span className="services__card-feature-icon">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="services__card-footer">
                                    <button className="services__card-btn services__card-btn--primary">
                                        Заказать
                                    </button>
                                    <button className="services__card-btn services__card-btn--secondary">
                                        Подробнее
                                    </button>
                                </div>

                                {/* Hover эффект */}
                                <div className="services__card-overlay"></div>
                            </div>
                        ))}
                    </div>

                    {/* Дополнительная информация */}
                    <div className="services__info">
                        <div className="services__info-cards">
                            <div className="services__info-card">
                                <div className="services__info-icon">🚀</div>
                                <div className="services__info-content">
                                    <h4>Быстрая установка</h4>
                                    <p>Монтаж за 2-4 часа</p>
                                </div>
                            </div>
                            <div className="services__info-card">
                                <div className="services__info-icon">🛡️</div>
                                <div className="services__info-content">
                                    <h4>Гарантия качества</h4>
                                    <p>До 15 лет гарантии</p>
                                </div>
                            </div>
                            <div className="services__info-card">
                                <div className="services__info-icon">💰</div>
                                <div className="services__info-content">
                                    <h4>Выгодные цены</h4>
                                    <p>Без переплат и скрытых доплат</p>
                                </div>
                            </div>
                            <div className="services__info-card">
                                <div className="services__info-icon">📞</div>
                                <div className="services__info-content">
                                    <h4>Бесплатная консультация</h4>
                                    <p>Замер и расчет стоимости</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA секция */}
                    <div className="services__cta">
                        <div className="services__cta-content">
                            <h3 className="services__cta-title">
                                Не нашли подходящий вариант?
                            </h3>
                            <p className="services__cta-text">
                                Создадим индивидуальное решение специально для вас. 
                                Наши дизайнеры воплотят любую вашу идею в жизнь.
                            </p>
                            <div className="services__cta-actions">
                                <button className="services__cta-btn services__cta-btn--primary">
                                    <span>Индивидуальный проект</span>
                                    <span className="services__cta-btn-icon">→</span>
                                </button>
                                <div className="services__cta-contact">
                                    <span>или позвоните</span>
                                    <a href="tel:+78632951234" className="services__cta-phone">
                                        +7 (863) 295-12-34
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="services__cta-visual">
                            <div className="services__cta-decorative">
                                <div className="services__cta-shape services__cta-shape--1"></div>
                                <div className="services__cta-shape services__cta-shape--2"></div>
                                <div className="services__cta-shape services__cta-shape--3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;