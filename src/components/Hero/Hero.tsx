import './hero.scss';

function Hero() {
    return (
        <section className="hero">
            {/* Крутой анимированный фон */}
            <div className="hero__bg">
                {/* Большие плавающие сферы */}
                <div className="hero__floating-orbs">
                    <div className="hero__orb hero__orb--1"></div>
                    <div className="hero__orb hero__orb--2"></div>
                    <div className="hero__orb hero__orb--3"></div>
                </div>

                {/* Геометрические фигуры */}
                <div className="hero__shapes">
                    <div className="hero__shape hero__shape--triangle"></div>
                    <div className="hero__shape hero__shape--diamond"></div>
                    <div className="hero__shape hero__shape--hexagon"></div>
                </div>

                {/* Мерцающие звезды */}
                <div className="hero__stars">
                    <div className="hero__star hero__star--1"></div>
                    <div className="hero__star hero__star--2"></div>
                    <div className="hero__star hero__star--3"></div>
                </div>
            </div>
            
            <div className="container">
                <div className="hero__layout">
                    {/* Верхний блок с метриками */}
                    <div className="hero__metrics">
                        <div className="hero__metric-card">
                            <div className="hero__metric-icon">📈</div>
                            <div className="hero__metric-content">
                                <div className="hero__metric-number">2847</div>
                                <div className="hero__metric-label">Установок в 2024</div>
                            </div>
                            <div className="hero__metric-trend">+24%</div>
                        </div>
                        <div className="hero__metric-card">
                            <div className="hero__metric-icon">⭐</div>
                            <div className="hero__metric-content">
                                <div className="hero__metric-number">4.9</div>
                                <div className="hero__metric-label">Рейтинг клиентов</div>
                            </div>
                            <div className="hero__metric-trend">1200+ отзывов</div>
                        </div>
                        <div className="hero__metric-card">
                            <div className="hero__metric-icon">⚡</div>
                            <div className="hero__metric-content">
                                <div className="hero__metric-number">3 часа</div>
                                <div className="hero__metric-label">Время установки</div>
                            </div>
                            <div className="hero__metric-trend">Без пыли</div>
                        </div>
                    </div>

                    {/* Основной контент */}
                    <div className="hero__main-content">
                        <div className="hero__left">
                            <div className="hero__badge-group">
                                <span className="hero__badge hero__badge--featured">🏆 Лидер рынка</span>
                                <span className="hero__badge hero__badge--new">✨ Новые технологии 2024</span>
                            </div>

                            <h1 className="hero__title">
                                <span className="hero__title-line">Потолки нового</span>
                                <span className="hero__title-line hero__title-line--highlight">поколения</span>
                                <span className="hero__title-sub">Превосходящие все ожидания</span>
                            </h1>

                            <div className="hero__value-props">
                                <div className="hero__value-prop">
                                    <div className="hero__prop-number">01</div>
                                    <div className="hero__prop-content">
                                        <h3>Умные потолки</h3>
                                        <p>Встроенная LED-подсветка и климат-контроль</p>
                                    </div>
                                </div>
                                <div className="hero__value-prop">
                                    <div className="hero__prop-number">02</div>
                                    <div className="hero__prop-content">
                                        <h3>Экологичность</h3>
                                        <p>100% безопасные материалы с сертификацией</p>
                                    </div>
                                </div>
                                <div className="hero__value-prop">
                                    <div className="hero__prop-number">03</div>
                                    <div className="hero__prop-content">
                                        <h3>Пожизненная гарантия</h3>
                                        <p>Уверенность в качестве на всю жизнь</p>
                                    </div>
                                </div>
                            </div>

                            <div className="hero__action-zone">
                                <div className="hero__cta-buttons">
                                    <button className="hero__btn hero__btn--primary">
                                        <span className="hero__btn-text">Виртуальная примерка</span>
                                        <span className="hero__btn-icon">🥽</span>
                                    </button>
                                    <button className="hero__btn hero__btn--secondary">
                                        <span className="hero__btn-text">Бесплатный замер</span>
                                        <span className="hero__btn-icon">📐</span>
                                    </button>
                                </div>
                                
                                <div className="hero__contact-card">
                                    <div className="hero__contact-avatar">
                                        <div className="hero__avatar-img">👨‍💼</div>
                                        <div className="hero__online-status"></div>
                                    </div>
                                    <div className="hero__contact-info">
                                        <div className="hero__contact-name">Алексей Петров</div>
                                        <div className="hero__contact-role">Эксперт по потолкам</div>
                                        <a href="tel:+79180000000" className="hero__contact-phone">
                                            +7 (918) 000-00-00
                                        </a>
                                    </div>
                                    <button className="hero__contact-btn">💬</button>
                                </div>
                            </div>
                        </div>

                        {/* Интерактивный симулятор */}
                        <div className="hero__right">
                            <div className="hero__simulator">
                                <div className="hero__sim-header">
                                    <h3 className="hero__sim-title">3D Симулятор потолка</h3>
                                    <div className="hero__sim-controls">
                                        <button className="hero__sim-btn hero__sim-btn--active" data-room="living">
                                            🛋️ Гостиная
                                        </button>
                                        <button className="hero__sim-btn" data-room="bedroom">
                                            🛏️ Спальня
                                        </button>
                                        <button className="hero__sim-btn" data-room="kitchen">
                                            🍳 Кухня
                                        </button>
                                    </div>
                                </div>

                                <div className="hero__sim-viewport">
                                    <div className="hero__room-preview">
                                        <div className="hero__room-ceiling"></div>
                                        <div className="hero__room-walls"></div>
                                        <div className="hero__room-furniture"></div>
                                        <div className="hero__lighting-effects"></div>
                                    </div>
                                    
                                    <div className="hero__sim-overlay">
                                        <div className="hero__overlay-info">
                                            <span className="hero__overlay-label">Площадь:</span>
                                            <span className="hero__overlay-value">24 м²</span>
                                        </div>
                                        <div className="hero__overlay-info">
                                            <span className="hero__overlay-label">Стоимость:</span>
                                            <span className="hero__overlay-value">12 600 ₽</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="hero__sim-options">
                                    <div className="hero__option-group">
                                        <label className="hero__option-label">Тип потолка</label>
                                        <div className="hero__option-pills">
                                            <button className="hero__pill hero__pill--active">Матовый</button>
                                            <button className="hero__pill">Глянцевый</button>
                                            <button className="hero__pill">С принтом</button>
                                        </div>
                                    </div>
                                    
                                    <div className="hero__option-group">
                                        <label className="hero__option-label">Освещение</label>
                                        <div className="hero__option-pills">
                                            <button className="hero__pill hero__pill--active">LED лента</button>
                                            <button className="hero__pill">Точечные</button>
                                            <button className="hero__pill">Люстра</button>
                                        </div>
                                    </div>

                                    <div className="hero__color-picker">
                                        <label className="hero__option-label">Цвет</label>
                                        <div className="hero__colors">
                                            <button className="hero__color hero__color--white hero__color--active"></button>
                                            <button className="hero__color hero__color--cream"></button>
                                            <button className="hero__color hero__color--gray"></button>
                                            <button className="hero__color hero__color--blue"></button>
                                            <button className="hero__color hero__color--green"></button>
                                        </div>
                                    </div>
                                </div>

                                <button className="hero__sim-cta">
                                    <span>Заказать такой потолок</span>
                                    <span className="hero__sim-price">≈ 12 600 ₽</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Нижний блок с преимуществами */}
                    <div className="hero__advantages">
                        <div className="hero__advantage">
                            <div className="hero__advantage-icon">🚀</div>
                            <div className="hero__advantage-text">
                                <strong>Установка за день</strong>
                                <span>Без ремонта и грязи</span>
                            </div>
                        </div>
                        <div className="hero__advantage">
                            <div className="hero__advantage-icon">🛡️</div>
                            <div className="hero__advantage-text">
                                <strong>Гарантия качества</strong>
                                <span>25 лет официальной гарантии</span>
                            </div>
                        </div>
                        <div className="hero__advantage">
                            <div className="hero__advantage-icon">💎</div>
                            <div className="hero__advantage-text">
                                <strong>Премиум материалы</strong>
                                <span>Европейские бренды</span>
                            </div>
                        </div>
                        <div className="hero__advantage">
                            <div className="hero__advantage-icon">🎯</div>
                            <div className="hero__advantage-text">
                                <strong>Точная цена</strong>
                                <span>Без скрытых доплат</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;