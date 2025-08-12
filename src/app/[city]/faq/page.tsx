import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '../../../lib/cities';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../../components/Footer/Footer';
import '../../../styles/faq.scss';

interface CityFAQPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityFAQPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Страница не найдена',
      description: 'Запрашиваемая страница не существует',
    };
  }

  return {
    title: `Частые вопросы - Натяжные потолки в ${city.name} | ПОТОЛКИ`,
    description: `Ответы на частые вопросы о натяжных потолках в ${city.name}. Установка, материалы, гарантия, уход за потолками. Бесплатные консультации.`,
    keywords: `частые вопросы натяжные потолки ${city.name.toLowerCase()}, установка потолков ${city.name.toLowerCase()}, материалы потолков ${city.name.toLowerCase()}, гарантия потолков ${city.name.toLowerCase()}, уход за потолками ${city.name.toLowerCase()}`,
    openGraph: {
      title: `Частые вопросы - Натяжные потолки в ${city.name}`,
      description: `Ответы на частые вопросы о натяжных потолках в ${city.name}. Установка, материалы, гарантия.`,
      type: 'website',
      locale: 'ru_RU',
      url: `https://yourdomain.com/${city.slug}/faq`,
    },
    alternates: {
      canonical: `https://yourdomain.com/${city.slug}/faq`,
    },
  };
}

export default async function CityFAQPage({ params }: CityFAQPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Главная', href: `/${city.slug}` },
    { name: 'Частые вопросы', href: `/${city.slug}/faq` },
  ];

  const faqItems = [
    {
      question: `Сколько времени занимает установка натяжного потолка в ${city.name}?`,
      answer: `Время установки в ${city.name} зависит от площади помещения и сложности работ. В среднем для комнаты 20-25 м² установка занимает 3-4 часа. Наши мастера работают быстро и качественно, с учетом местных особенностей.`
    },
    {
      question: `Какие материалы используются для натяжных потолков в ${city.name}?`,
      answer: `Мы используем только качественные материалы: ПВХ-пленку от ведущих производителей (Pongs, MSD, Renolit) и тканевые полотна (Descor, Clipso). Все материалы сертифицированы, безопасны для здоровья и адаптированы к климатическим условиям ${city.name}.`
    },
    {
      question: `Можно ли устанавливать натяжной потолок в ванной комнате в ${city.name}?`,
      answer: `Да, натяжные потолки отлично подходят для ванных комнат в ${city.name}. ПВХ-пленка влагостойкая и не боится пара. Мы используем специальные профили и герметики для дополнительной защиты от влаги, что особенно важно в нашем регионе.`
    },
    {
      question: `Какой срок гарантии на натяжные потолки в ${city.name}?`,
      answer: `Мы предоставляем гарантию 15 лет на материалы и 2 года на монтажные работы в ${city.name}. Гарантия распространяется на целостность полотна, качество швов и надежность крепления. Наши мастера всегда готовы приехать для решения любых вопросов.`
    },
    {
      question: `Можно ли установить освещение в натяжной потолок в ${city.name}?`,
      answer: `Конечно! В натяжной потолок в ${city.name} можно встроить любые виды освещения: точечные светильники, люстры, светодиодные ленты. Мы поможем подобрать оптимальное решение для вашего интерьера с учетом местных особенностей электроснабжения.`
    },
    {
      question: `Как ухаживать за натяжным потолком в ${city.name}?`,
      answer: `Уход за натяжным потолком в ${city.name} прост: регулярная сухая уборка пылесосом с мягкой насадкой, влажная уборка мягкой тканью с нейтральными моющими средствами. Избегайте абразивных средств и острых предметов. В нашем климате достаточно уборки раз в месяц.`
    },
    {
      question: `Что делать, если потолок провис в ${city.name}?`,
      answer: `Если потолок провис в ${city.name}, не пытайтесь исправить это самостоятельно. Обратитесь к нам - мы проведем диагностику и восстановим натяжение. В большинстве случаев это можно исправить без замены полотна. Наши мастера приедут в удобное для вас время.`
    },
    {
      question: `Можно ли установить потолок зимой в ${city.name}?`,
      answer: `Да, установка возможна в любое время года в ${city.name}. Мы используем специальные технологии для работы при низких температурах. Главное условие - температура в помещении должна быть не ниже +5°C. Наши мастера работают круглый год.`
    },
    {
      question: `Как рассчитывается стоимость натяжного потолка в ${city.name}?`,
      answer: `Стоимость в ${city.name} зависит от площади помещения, выбранного материала, количества светильников и сложности монтажа. Мы предоставляем бесплатный замер и точный расчет стоимости. Используйте наш онлайн-калькулятор для предварительной оценки или позвоните нам.`
    },
    {
      question: `Нужно ли подготавливать поверхность перед установкой в ${city.name}?`,
      answer: `Да, поверхность нужно подготовить: удалить старую отделку, заделать крупные трещины, обработать от плесени и грибка. Мы можем выполнить подготовительные работы или дать рекомендации по самостоятельной подготовке с учетом особенностей домов в ${city.name}.`
    }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      
      <section className="faq-page">
        <div className="container">
          <div className="faq-page__header">
            <h1 className="faq-page__title">Частые вопросы о натяжных потолках в {city.name}</h1>
            <p className="faq-page__subtitle">
              Ответы на самые популярные вопросы наших клиентов в {city.name}. 
              Если не нашли ответ на свой вопрос - свяжитесь с нами!
            </p>
          </div>

          <div className="faq-page__content">
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <details className="faq-item__details">
                    <summary className="faq-item__question">
                      {item.question}
                      <span className="faq-item__icon">+</span>
                    </summary>
                    <div className="faq-item__answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>

            <div className="faq-page__contact">
              <h3>Не нашли ответ на свой вопрос?</h3>
              <p>Свяжитесь с нами любым удобным способом. Работаем в {city.name} и окрестностях:</p>
              <div className="faq-page__contact-buttons">
                <a href="tel:+79180000000" className="faq-page__contact-btn faq-page__contact-btn--phone">
                  📞 Позвонить
                </a>
                <a href="https://wa.me/79180000000" target="_blank" rel="noopener noreferrer" className="faq-page__contact-btn faq-page__contact-btn--whatsapp">
                  🟢 WhatsApp
                </a>
                <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer" className="faq-page__contact-btn faq-page__contact-btn--telegram">
                  🔵 Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
