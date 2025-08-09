"use client";
import './header.scss';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

function Header() {
    const [isStuck, setIsStuck] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const topRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY > 8;
                    setIsStuck(prev => (prev !== scrolled ? scrolled : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Initialize state based on initial scroll
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateTopHeightVar = () => {
            const topEl = topRef.current;
            if (!topEl) return;
            const height = topEl.offsetHeight;
            // Apply to the header element to scope the spacing locally
            topEl.parentElement?.style.setProperty('--header-top-h', `${height}px`);
        };

        updateTopHeightVar();
        const ro = new ResizeObserver(updateTopHeightVar);
        if (topRef.current) ro.observe(topRef.current);
        window.addEventListener('resize', updateTopHeightVar);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', updateTopHeightVar);
        };
    }, []);

    return (
        <header className={`header ${isStuck ? 'header--stuck' : ''}`}>
            <div ref={topRef} className="header__top-fixed">
                <div className="container container-header">
                    <div className="header__top">
                    <Link href="/" className="header__top-logo">
                        <svg width="160" height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Изысканные волны */}
                            <path d="M1 20 Q11 10 19 15 T37 13 T49 17" stroke="url(#waveGradient)" strokeWidth="2.2" fill="none"/>
                            <path d="M1 22 Q11 13 19 18 T37 16 T49 19" stroke="url(#waveGradient2)" strokeWidth="1.4" fill="none" opacity="0.6"/>
                            
                            {/* Декоративные узоры */}
                            <g opacity="0.4">
                                <path d="M7 6 L11 10 L7 13 L4 10 Z" stroke="#3b82f6" strokeWidth="0.4" fill="none"/>
                                <path d="M24 5 L27 9 L24 12 L21 9 Z" stroke="#60a5fa" strokeWidth="0.4" fill="none"/>
                                <path d="M42 6 L45 10 L42 13 L39 10 Z" stroke="#3b82f6" strokeWidth="0.4" fill="none"/>
                            </g>
                            
                            {/* Филигранные детали */}
                            <circle cx="14" cy="14" r="1.4" fill="none" stroke="url(#circleGradient)" strokeWidth="0.7"/>
                            <circle cx="14" cy="14" r="0.4" fill="#3b82f6"/>
                            <circle cx="29" cy="16" r="1.2" fill="none" stroke="url(#circleGradient)" strokeWidth="0.6"/>
                            <circle cx="29" cy="16" r="0.3" fill="#60a5fa"/>
                            <circle cx="43" cy="15" r="1.3" fill="none" stroke="url(#circleGradient)" strokeWidth="0.7"/>
                            <circle cx="43" cy="15" r="0.35" fill="#3b82f6"/>
                            
                            {/* Премиальная типографика */}
                            <g>
                                {/* Тень текста */}
                                <text x="56" y="16" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#1e293b" opacity="0.2">
                                    ПОТОЛКИ
                                </text>
                                {/* Основной текст с градиентом */}
                                <text x="55" y="15" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="url(#textGradient)" letterSpacing="-0.2px">
                                    ПОТОЛКИ
                                </text>
                                {/* Подчеркивание */}
                                <rect x="55" y="17" width="52" height="0.4" fill="url(#underlineGradient)"/>
                            </g>
                            
                            {/* Изысканный подтекст */}
                            <text x="55" y="24" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="500" fill="#64748b" letterSpacing="2px">
                                PREMIUM INTERIORS
                            </text>
                            
                            {/* Декоративные элементы в тексте */}
                            <circle cx="108" cy="12" r="0.7" fill="#fbbf24"/>
                            <circle cx="111" cy="12" r="0.5" fill="#f59e0b"/>
                            
                            {/* Градиенты */}
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1e40af"/>
                                    <stop offset="50%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="#60a5fa"/>
                                </linearGradient>
                                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#60a5fa"/>
                                    <stop offset="100%" stopColor="#93c5fd"/>
                                </linearGradient>
                                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1e40af"/>
                                    <stop offset="50%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="#1e293b"/>
                                </linearGradient>
                                <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent"/>
                                    <stop offset="20%" stopColor="#3b82f6"/>
                                    <stop offset="80%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="transparent"/>
                                </linearGradient>
                                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="#60a5fa"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                    <nav className='header__top-nav'>
                        <ul className="header__top-menu">
                            <li className="header__top-item">
                                <Link href="/about" className="header__top-link">
                                    О компании
                                </Link>
                            </li>
                            <li className="header__top-item">
                                <Link href="/services" className="header__top-link">
                                    Услуги
                                </Link>
                            </li>
                            <li className="header__top-item">
                                <Link href="/calculator" className="header__top-link">
                                    Калькулятор цен
                                </Link>
                            </li>
                            <li className="header__top-item">
                                <a href="!#" className="header__top-link">
                                    Контакты
                                </a>
                            </li>
                            <li className="header__top-item header__top-item--extra">
                                <a href="!#" className="header__top-link">
                                    Наши работы
                                </a>
                            </li>
                            <li className="header__top-item header__top-item--extra">
                                <a href="!#" className="header__top-link">
                                    Отзывы
                                </a>
                            </li>
                            <li className="header__top-item header__top-item--extra">
                                <a href="!#" className="header__top-link">
                                    Позвонить
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="header__top-geo">
                    📍 Ростов-на-Дону и область
                    </p>
                    <button
                        className={`header__burger ${isMobileMenuOpen ? 'is-open' : ''}`}
                        aria-label="Открыть меню"
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(v => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`header__mobile ${isMobileMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div className="header__mobile-panel" onClick={(e) => e.stopPropagation()}>
                    <ul className="header__mobile-list">
                        <li><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>О компании</Link></li>
                        <li><Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>Услуги</Link></li>
                        <li><Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)}>Калькулятор цен</Link></li>
                        <li><a href="!#" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a></li>
                        <li><a href="!#" onClick={() => setIsMobileMenuOpen(false)}>Наши работы</a></li>
                        <li><a href="!#" onClick={() => setIsMobileMenuOpen(false)}>Отзывы</a></li>
                        <li><a href="tel:+79180000000" className="header__mobile-call" onClick={() => setIsMobileMenuOpen(false)}>Позвонить</a></li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="header__bottom">
                    <div className="header__bottom-left">
                    <div className="header__bottom-logo">
                    📞
                    <div className="header__bottom-box">
                        <a href="tel:+79180000000" className="header__bottom-phone">+7 (918) 000-00-00</a>
                        <span className="header__bottom-consultation">Бесплатная консультация</span>
                    </div>
                    </div>
                        <p className="header__bottom-work">🕓 Работаем ежедневно с 8:00 до 22:00</p>
                    </div>
                    <div className="header__bottom-center">
                        <div className="header__bottom-wrapper">
                            <p className="header__bottom-title">500+</p>
                            <p className="header__bottom-text">ДОВОЛЬНЫХ КЛИЕНТОВ</p>
                        </div>
                        <div className="header__bottom-wrapper">
                            <p className="header__bottom-title">15 лет</p>
                            <p className="header__bottom-text">НА РЫНКЕ</p>
                        </div>
                        <div className="header__bottom-wrapper">
                            <p className="header__bottom-title">3 года</p>
                            <p className="header__bottom-text">ГАРАНТИЯ</p>
                        </div>
                    </div>
                    <div className="header__bottom-right">
                        <div className="header__bottom-boxe">
                            <a href="!#" className="header__bottom-link header__bottom-link--bg">📷 Примеры работ</a>
                            <a href="!#" className="header__bottom-link header__bottom-link--border">⭐ Отзывы клиентов</a>
                        </div>
                        <div className="header__bottom-boxe">
                            <p className="header__bottom-info">
                            ✅ Гарантия качества
                            </p>
                            <p className="header__bottom-info">
                            💰 Без предоплаты
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;