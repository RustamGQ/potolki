"use client";
import './hero.scss';
import React from 'react';
import CalcMini from '../CalcMini/CalcMini';

type RoomType = 'living' | 'bedroom' | 'kitchen';
type CeilingType = 'matte' | 'glossy' | 'printed';
type LightingType = 'led' | 'spot' | 'chandelier';
type ColorType = 'white' | 'cream' | 'gray' | 'blue' | 'green';

const ROOM_PRESETS: Record<RoomType, { label: string; defaultArea: number; icon: string }> = {
  living: { label: 'Гостиная', defaultArea: 24, icon: '🛋️' },
  bedroom: { label: 'Спальня', defaultArea: 18, icon: '🛏️' },
  kitchen: { label: 'Кухня', defaultArea: 12, icon: '🍳' },
};

// Фото комнат (добавь свои изображения в public/images/rooms/...)
const ROOM_PHOTOS: Record<RoomType, string> = {
    living: '/images/rooms/living.jpg',
    bedroom: '/images/rooms/bedroom.jpg',
    kitchen: '/images/rooms/kitchen.jpg',
};

const BASE_RATE_PER_M2 = 400; // ₽/м² базовая цена для матового
const CEILING_MULTIPLIER: Record<CeilingType, number> = {
  matte: 1,
  glossy: 1.15,
  printed: 1.3,
};

const LIGHTING_ADD: Record<LightingType, number> = {
  led: 3000,
  spot: 2000,
  chandelier: 1500,
};

const COLOR_TO_HEX: Record<ColorType, string> = {
  white: '#ffffff',
  cream: '#fef7ed',
  gray: '#f1f5f9',
  blue: '#dbeafe',
  green: '#dcfce7',
};

function formatPriceRub(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(Math.max(0, Math.round(value)));
}

function Hero() {
  const [room, setRoom] = React.useState<RoomType>('living');
  const [area, setArea] = React.useState<number>(ROOM_PRESETS['living'].defaultArea);
  const [ceilingType, setCeilingType] = React.useState<CeilingType>('matte');
  const [lighting, setLighting] = React.useState<LightingType>('led');
  const [color, setColor] = React.useState<ColorType>('white');

  React.useEffect(() => {
    setArea(ROOM_PRESETS[room].defaultArea);
  }, [room]);

  const estimatedPrice = React.useMemo(() => {
    const base = area * BASE_RATE_PER_M2 * CEILING_MULTIPLIER[ceilingType];
    const total = base + LIGHTING_ADD[lighting];
    return Math.round(total / 100) * 100;
  }, [area, ceilingType, lighting]);

  const roomVars = React.useMemo(() => {
    const hex = COLOR_TO_HEX[color];
    const lightIntensity = lighting === 'led' ? 0.7 : lighting === 'spot' ? 0.45 : 0.3;
    const vars: Record<string, string | number> = {
      '--color-base': hex,
      '--light-intensity': lightIntensity,
    };
    return vars as React.CSSProperties;
  }, [color, lighting]);

  // --- 3D управление: плавный поворот сцены мышью/тачем ---
  const roomRef = React.useRef<HTMLDivElement | null>(null);
  const stateRef = React.useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    targetYaw: -8, // мягче начальный поворот
    targetPitch: 10,
    yaw: -8,
    pitch: 10,
    raf: 0 as number | 0,
  });

  const setTransform = (yaw: number, pitch: number) => {
    if (!roomRef.current) return;
    roomRef.current.style.setProperty('--yaw', `${yaw}deg`);
    roomRef.current.style.setProperty('--pitch', `${pitch}deg`);
  };

  React.useEffect(() => {
    const animate = () => {
      const s = stateRef.current;
      // Плавное приближение к целевым значениям (инерция)
      s.yaw += (s.targetYaw - s.yaw) * 0.08;
      s.pitch += (s.targetPitch - s.pitch) * 0.08;
      setTransform(s.yaw, s.pitch);
      s.raf = requestAnimationFrame(animate);
    };
    stateRef.current.raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(stateRef.current.raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const s = stateRef.current;
    s.dragging = true;
    s.startX = e.clientX;
    s.startY = e.clientY;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = stateRef.current;
    if (!s.dragging) return;
    const dx = e.clientX - s.startX;
    const dy = e.clientY - s.startY;
    s.startX = e.clientX;
    s.startY = e.clientY;
    s.targetYaw += dx * 0.15;   // чувствительность по Yaw
    s.targetPitch -= dy * 0.15; // чувствительность по Pitch
    // Ограничения углов для аккуратной комнаты
    s.targetPitch = Math.max(0, Math.min(25, s.targetPitch));
    s.targetYaw = Math.max(-20, Math.min(20, s.targetYaw));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const s = stateRef.current;
    s.dragging = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };

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

            {/* Мини-калькулятор */}
            <div className="hero__right">
              <CalcMini />
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
  );
}

export default Hero;