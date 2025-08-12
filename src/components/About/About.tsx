"use client";

import './about.scss';
import { useCity } from '../../contexts/CityContext';

function About() {
    const { currentCity } = useCity();
    return (
        <section className="about" id="about">
            {/* Декоративный фон */}
            <div className="about__bg">
                <div className="about__floating-circles">
                    <div className="about__circle about__circle--1"></div>
                    <div className="about__circle about__circle--2"></div>
                    <div className="about__circle about__circle--3"></div>
                </div>
                <div className="about__geometric-shapes">
                    <div className="about__shape about__shape--triangle"></div>
                    <div className="about__shape about__shape--square"></div>
                </div>
            </div>

            <div className="container">
                <div className="about__layout">
                    {/* Заголовок секции */}
                    <div className="about__header">
                        <div className="about__badge">
                            <span className="about__badge-text">О компании</span>
                            <div className="about__badge-icon">🏢</div>
                        </div>
                        <h2 className="about__title">
                            О нашей <span className="about__title-accent">компании</span>
                        </h2>
                        <p className="about__subtitle">
                            Мы — команда профессионалов с многолетним опытом в сфере натяжных потолков. 
                            Наша миссия — создавать идеальные интерьеры для каждого дома в {currentCity.name}.
                        </p>
                    </div>

                    {/* Основной контент */}
                    <div className="about__content">
                        {/* Левая колонка - информация */}
                        <div className="about__info">
                            {/* Статистика */}
                            <div className="about__stats">
                                <div className="about__stat-card">
                                    <div className="about__stat-number">5+</div>
                                    <div className="about__stat-label">лет опыта</div>
                                </div>
                                <div className="about__stat-card">
                                    <div className="about__stat-number">1000+</div>
                                    <div className="about__stat-label">довольных клиентов</div>
                                </div>
                                <div className="about__stat-card">
                                    <div className="about__stat-number">100%</div>
                                    <div className="about__stat-label">гарантия качества</div>
                                </div>
                                <div className="about__stat-card">
                                    <div className="about__stat-number">24/7</div>
                                    <div className="about__stat-label">поддержка клиентов</div>
                                </div>
                            </div>

                            {/* Описание компании */}
                            <div className="about__description">
                                <h3 className="about__description-title">Почему выбирают нас?</h3>
                                <div className="about__features">
                                    <div className="about__feature">
                                        <div className="about__feature-icon">✨</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Качественные материалы</h4>
                                            <p className="about__feature-text">
                                                Используем только проверенные европейские материалы с гарантией от производителя
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">🔧</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Профессиональная установка</h4>
                                            <p className="about__feature-text">
                                                Наши мастера имеют сертификаты и многолетний опыт работы с натяжными потолками
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">💎</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Индивидуальный подход</h4>
                                            <p className="about__feature-text">
                                                Каждый проект уникален - мы учитываем все пожелания и особенности помещения
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">🚀</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Быстрая установка</h4>
                                            <p className="about__feature-text">
                                                Монтаж натяжного потолка занимает всего 2-4 часа без грязи и пыли
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Правая колонка - команда и сертификаты */}
                        <div className="about__visual">
                            {/* Команда */}
                            <div className="about__team">
                                <h3 className="about__team-title">Наша команда</h3>
                                <div className="about__team-grid">
                                    <div className="about__team-member">
                                        <div className="about__member-avatar">
                                            <img 
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                                                alt="Алексей Иванов - Руководитель проектов"
                                                loading="lazy"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <div className="about__member-info">
                                            <h4 className="about__member-name">Алексей Иванов</h4>
                                            <p className="about__member-role">Руководитель проектов</p>
                                        </div>
                                    </div>
                                    <div className="about__team-member">
                                        <div className="about__member-avatar">
                                            <img 
                                                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" 
                                                alt="Дмитрий Петров - Ведущий монтажник"
                                                loading="lazy"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <div className="about__member-info">
                                            <h4 className="about__member-name">Дмитрий Петров</h4>
                                            <p className="about__member-role">Ведущий монтажник</p>
                                        </div>
                                    </div>
                                    <div className="about__team-member">
                                        <div className="about__member-avatar">
                                            <img 
                                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                                                alt="Сергей Сидоров - Дизайнер"
                                                loading="lazy"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <div className="about__member-info">
                                            <h4 className="about__member-name">Сергей Сидоров</h4>
                                            <p className="about__member-role">Дизайнер</p>
                                        </div>
                                    </div>
                                    <div className="about__team-member">
                                        <div className="about__member-avatar">
                                            <img 
                                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" 
                                                alt="Михаил Козлов - Мастер-монтажник"
                                                loading="lazy"
                                                width="150"
                                                height="150"
                                            />
                                        </div>
                                        <div className="about__member-info">
                                            <h4 className="about__member-name">Михаил Козлов</h4>
                                            <p className="about__member-role">Мастер-монтажник</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Сертификаты и награды */}
                            <div className="about__certificates">
                                <h3 className="about__certificates-title">Сертификаты и награды</h3>
                                <div className="about__certificates-grid">
                                    <div className="about__certificate">
                                        <div className="about__certificate-icon">🏆</div>
                                        <div className="about__certificate-text">
                                            <h4>Лучшая компания года</h4>
                                            <p>2023, Ростов-на-Дону</p>
                                        </div>
                                    </div>
                                    <div className="about__certificate">
                                        <div className="about__certificate-icon">📜</div>
                                        <div className="about__certificate-text">
                                            <h4>Сертификат качества ISO</h4>
                                            <p>Международный стандарт</p>
                                        </div>
                                    </div>
                                    <div className="about__certificate">
                                        <div className="about__certificate-icon">⭐</div>
                                        <div className="about__certificate-text">
                                            <h4>5 звезд на Яндекс.Картах</h4>
                                            <p>На основе 500+ отзывов</p>
                                        </div>
                                    </div>
                                    <div className="about__certificate">
                                        <div className="about__certificate-icon">🛡️</div>
                                        <div className="about__certificate-text">
                                            <h4>Гарантия качества</h4>
                                            <p>До 15 лет на материалы</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA секция */}
                    <div className="about__cta">
                        <div className="about__cta-content">
                            <h3 className="about__cta-title">
                                Готовы начать работу с профессионалами?
                            </h3>
                            <p className="about__cta-text">
                                Получите бесплатную консультацию и расчет стоимости вашего проекта уже сегодня
                            </p>
                            <div className="about__cta-actions">
                                <button className="about__cta-btn about__cta-btn--primary">
                                    Получить консультацию
                                </button>
                                <button className="about__cta-btn about__cta-btn--secondary">
                                    Узнать больше
                                </button>
                            </div>
                        </div>
                        <div className="about__cta-contact">
                            <div className="about__contact-item">
                                <span className="about__contact-label">Телефон:</span>
                                <a href="tel:+78632951234" className="about__contact-value">+7 (863) 295-12-34</a>
                            </div>
                            <div className="about__contact-item">
                                <span className="about__contact-label">Email:</span>
                                <a href="mailto:info@potolki-rostov.ru" className="about__contact-value">info@potolki-rostov.ru</a>
                            </div>
                            <div className="about__contact-item">
                                <span className="about__contact-label">Адрес:</span>
                                <span className="about__contact-value">г. Ростов-на-Дону, ул. Пушкинская, 15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;