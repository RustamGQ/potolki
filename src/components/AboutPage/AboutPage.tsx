import React from 'react';
import './aboutPage.scss';

const AboutPage: React.FC = () => {
  return (
    <main className="about-page">
      {/* Minimal Hero */}
      <section className="about-hero-minimal">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">О компании</span>
              <h1>Создаем идеальные потолки с 2014 года</h1>
              <p>
                Мы не просто устанавливаем потолки — мы создаем пространства, 
                которые вдохновляют и радуют каждый день. Наша миссия — сделать 
                качественные натяжные потолки доступными для каждого дома.
              </p>
              <div className="hero-cta">
                <a href="tel:+79180000000" className="btn-primary">
                  Бесплатная консультация
                </a>
                <a href="#portfolio" className="btn-secondary">
                  Смотреть работы
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-element">
                <div className="ceiling-preview">
                  <div className="ceiling-line"></div>
                  <div className="ceiling-line"></div>
                  <div className="ceiling-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="about-numbers">
        <div className="container">
          <div className="numbers-grid">
            <div className="number-item">
              <div className="number">1000+</div>
              <div className="label">Установленных потолков</div>
            </div>
            <div className="number-item">
              <div className="number">10</div>
              <div className="label">Лет опыта</div>
            </div>
            <div className="number-item">
              <div className="number">98%</div>
              <div className="label">Довольных клиентов</div>
            </div>
            <div className="number-item">
              <div className="number">24/7</div>
              <div className="label">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Наша история</h2>
              <p>
                Все началось с простой идеи — сделать качественные натяжные потолки 
                доступными для обычных людей. В 2014 году мы собрали команду 
                профессионалов и начали свой путь.
              </p>
              <p>
                За эти годы мы установили более 1000 потолков, получили сотни 
                благодарных отзывов и стали одной из самых надежных компаний 
                в Ростове-на-Дону.
              </p>
              <div className="story-highlights">
                <div className="highlight">
                  <div className="highlight-icon">🏆</div>
                  <div className="highlight-text">
                    <strong>Лучшие материалы</strong>
                    <span>Только проверенные бренды</span>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">
                    <strong>Быстрая установка</strong>
                    <span>За 1-2 дня</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="ceiling-demo">
                  <div className="demo-line"></div>
                  <div className="demo-line"></div>
                  <div className="demo-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team-minimal">
        <div className="container">
          <div className="section-header">
            <h2>Команда профессионалов</h2>
            <p>Знакомьтесь с людьми, которые создают ваши идеальные потолки</p>
          </div>
          <div className="team-list">
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍🔧</div>
              </div>
              <div className="member-details">
                <h3>Александр Петров</h3>
                <span className="position">Главный мастер</span>
                <p>8 лет опыта в установке натяжных потолков. Специалист по сложным проектам.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍💼</div>
              </div>
              <div className="member-details">
                <h3>Михаил Сидоров</h3>
                <span className="position">Технолог</span>
                <p>12 лет в строительной сфере. Эксперт по расчетам и планированию.</p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">👨‍🎨</div>
              </div>
              <div className="member-details">
                <h3>Дмитрий Козлов</h3>
                <span className="position">Дизайнер</span>
                <p>6 лет опыта в дизайне интерьеров. Создает уникальные решения.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="about-process-minimal">
        <div className="container">
          <div className="section-header">
            <h2>Как мы работаем</h2>
            <p>Простой и понятный процесс от заявки до готового потолка</p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Заявка</h3>
                <p>Оставляете заявку на сайте или звоните нам</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Замер</h3>
                <p>Бесплатный выезд мастера для замера и консультации</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Монтаж</h3>
                <p>Профессиональная установка в оговоренные сроки</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Готово</h3>
                <p>Принимаете работу и получаете гарантию 3 года</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-minimal">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы начать?</h2>
            <p>Получите бесплатную консультацию и расчет стоимости</p>
            <div className="cta-actions">
              <a href="tel:+79180000000" className="btn-primary-large">
                Позвонить сейчас
              </a>
              <a href="#contact" className="btn-outline">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
