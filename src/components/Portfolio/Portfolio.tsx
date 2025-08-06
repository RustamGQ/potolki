'use client';

import { useEffect, useRef } from 'react';
import './portfolio.scss';

// Данные портфолио
const portfolioData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
        alt: "Натяжной потолок в гостиной - Ростов-на-Дону"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
        alt: "Двухуровневый потолок в спальне - Ростов-на-Дону"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        alt: "Натяжной потолок на кухне - Ростов-на-Дону"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        alt: "Потолок звездное небо - Ростов-на-Дону"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop",
        alt: "Черный глянцевый потолок - Ростов-на-Дону"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5851?w=400&h=300&fit=crop",
        alt: "Фотопечать на потолке - Ростов-на-Дону"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop",
        alt: "Многоуровневый потолок в детской - Ростов-на-Дону"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400&h=300&fit=crop",
        alt: "Матовый белый потолок в ванной - Ростов-на-Дону"
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
        alt: "Зеркальный потолок в прихожей - Ростов-на-Дону"
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?w=400&h=300&fit=crop",
        alt: "Цветной натяжной потолок в кафе - Ростов-на-Дону"
    }
];

function Portfolio() {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!carouselRef.current) return;

        // ТОЧНО КАК В ОРИГИНАЛЕ atuin.ru
        function carousel(root: HTMLElement) {
            const figure = root.querySelector("figure") as HTMLElement;
            const nav = root.querySelector("nav") as HTMLElement;
            const images = figure.children;
            const n = images.length;
            const gap = parseInt(root.dataset.gap || '0');
            const bfc = "bfc" in root.dataset;
            const theta = 2 * Math.PI / n;
            let currImage = 0;

            function setupCarousel(n: number, s: number) {
                const apothem = s / (2 * Math.tan(Math.PI / n));
                figure.style.transformOrigin = `50% 50% ${-apothem}px`;
                
                for (let i = 0; i < n; i++) {
                    (images[i] as HTMLElement).style.padding = `0 ${gap}px`;
                }
                
                for (let i = 0; i < n; i++) {
                    (images[i] as HTMLElement).style.transformOrigin = `50% 50% ${-apothem}px`;
                    (images[i] as HTMLElement).style.transform = `rotateY(${i * theta}rad)`;
                }
                
                if (bfc) {
                    for (let i = 0; i < n; i++) {
                        (images[i] as HTMLElement).style.backfaceVisibility = "hidden";
                    }
                }
                
                rotateCarousel(currImage);
            }

            function setupNavigation() {
                nav.addEventListener("click", onClick, true);
                
                function onClick(e: Event) {
                    e.stopPropagation();
                    const t = e.target as HTMLElement;
                    if (t.tagName.toUpperCase() != "BUTTON") return;
                    
                    if (t.classList.contains("next")) {
                        currImage++;
                    } else {
                        currImage--;
                    }
                    rotateCarousel(currImage);
                }
            }

            function rotateCarousel(imageIndex: number) {
                figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
            }

            // Инициализация
            window.addEventListener("resize", () => {
                setupCarousel(n, parseFloat(getComputedStyle(images[0] as HTMLElement).width));
            });
            
            setupNavigation();
            
            // Запуск после загрузки изображений
            const firstImg = images[0].querySelector('img') as HTMLImageElement;
            if (firstImg) {
                if (firstImg.complete) {
                    setupCarousel(n, parseFloat(getComputedStyle(images[0] as HTMLElement).width));
                } else {
                    firstImg.addEventListener('load', () => {
                        setupCarousel(n, parseFloat(getComputedStyle(images[0] as HTMLElement).width));
                    });
                }
            }

            // Mouse/Touch events
            let xClick = 0;
            let mouseDown = false;

            figure.addEventListener('mousedown', (event) => {
                xClick = event.pageX;
                mouseDown = true;
            });

            figure.addEventListener('mouseup', () => {
                mouseDown = false;
            });

            figure.addEventListener('mousemove', (event) => {
                if (mouseDown) {
                    const xMove = event.pageX;
                    if (Math.floor(xClick - xMove) > 5) {
                        currImage++;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    } else if (Math.floor(xClick - xMove) < -5) {
                        currImage--;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    }
                }
            });

            figure.addEventListener('touchstart', (event) => {
                xClick = event.changedTouches[0].pageX;
                mouseDown = true;
            });

            figure.addEventListener('touchend', () => {
                mouseDown = false;
            });

            figure.addEventListener('touchmove', (event) => {
                if (mouseDown) {
                    const xMove = event.changedTouches[0].pageX;
                    if (Math.floor(xClick - xMove) > 5) {
                        currImage++;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    } else if (Math.floor(xClick - xMove) < -5) {
                        currImage--;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    }
                }
            });
        }

        // Запуск карусели
        carousel(carouselRef.current);
    }, []);

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                {/* Заголовок секции */}
                <div className="portfolio__header">
                    <div className="portfolio__badge">
                        <span className="portfolio__badge-text">Наши работы</span>
                        <div className="portfolio__badge-icon">🎨</div>
                    </div>
                    <h2 className="portfolio__title">
                        Примеры наших <span className="portfolio__title-accent">работ</span>
                    </h2>
                    <p className="portfolio__subtitle">
                        Более 1000 довольных клиентов по всему Ростову-на-Дону. 
                        Каждый проект - это уникальное решение с гарантией качества.
                    </p>
                </div>

                {/* Оригинальная 3D Карусель */}
                <div className="carousel-3d" data-gap="40" ref={carouselRef}>
                    <figure>
                        {portfolioData.map((item) => (
                            <div key={item.id}>
                                <a href="#any">
                                    <img src={item.image} alt={item.alt} />
                                </a>
                            </div>
                        ))}
                    </figure>
                    <nav>
                        <button className="prev">
                            Назад
                        </button>
                        <button className="next">
                            Вперед
                        </button>
                    </nav>
                </div>

                {/* CTA секция */}
                <div className="portfolio__cta">
                    <div className="portfolio__cta-content">
                        <h3 className="portfolio__cta-title">
                            Хотите такой же результат?
                        </h3>
                        <p className="portfolio__cta-text">
                            Закажите бесплатный замер и получите персональный расчет стоимости
                        </p>
                        <div className="portfolio__cta-actions">
                            <button className="portfolio__cta-btn portfolio__cta-btn--primary">
                                Заказать замер
                            </button>
                            <button className="portfolio__cta-btn portfolio__cta-btn--secondary">
                                Посмотреть все работы
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;