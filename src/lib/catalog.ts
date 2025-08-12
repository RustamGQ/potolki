import { 
  CeilingProduct, 
  CatalogFilter, 
  CatalogData, 
  FilterOption,
  TEXTURE_LABELS,
  TYPE_LABELS,
  ROOM_LABELS,
  MANUFACTURER_LABELS,
  SERVICE_LABELS
} from '../types/catalog';

// Данные каталога потолков
export const catalogProducts: CeilingProduct[] = [
  {
    id: 'matovye-belye',
    name: 'Матовые белые потолки',
    description: 'Классические матовые потолки белого цвета. Идеально подходят для любого интерьера, создают мягкое рассеянное освещение.',
    price: { min: 1200, max: 1800, unit: '₽/м²' },
    image: '/img/work-1.webp',
    textures: ['matovye'],
    types: ['besshchelevye'],
    rooms: ['kukhnya', 'vannaya', 'gostinaya', 'spalnya', 'detskaya', 'prikhozhaya', 'tualet'],
    manufacturers: ['msd', 'bauf'],
    features: ['Бесшовные', 'Влагостойкие', 'Экологичные'],
    seoTitle: 'Матовые белые натяжные потолки - Цена от 1200₽/м²',
    seoDescription: 'Матовые белые натяжные потолки по доступным ценам. Бесплатный замер, качественный монтаж, гарантия 3 года.'
  },
  {
    id: 'glyantsevye-chernye',
    name: 'Глянцевые черные потолки',
    description: 'Стильные глянцевые потолки черного цвета. Создают эффект зеркала и визуально увеличивают пространство.',
    price: { min: 1500, max: 2200, unit: '₽/м²' },
    image: '/img/work-2.webp',
    textures: ['glyantsevye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['msd', 'descor'],
    features: ['Зеркальный эффект', 'Визуальное увеличение пространства', 'Современный дизайн'],
    seoTitle: 'Глянцевые черные натяжные потолки - Цена от 1500₽/м²',
    seoDescription: 'Глянцевые черные натяжные потолки для современного интерьера. Зеркальный эффект, увеличение пространства.'
  },
  {
    id: 'satinovye-svetlye',
    name: 'Сатиновые светлые потолки',
    description: 'Элегантные сатиновые потолки с мягким блеском. Идеальное сочетание матовости и глянца.',
    price: { min: 1400, max: 2000, unit: '₽/м²' },
    image: '/img/work-3.webp',
    textures: ['satinovye'],
    types: ['besshchelevye'],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['bauf', 'clipso'],
    features: ['Мягкий блеск', 'Элегантность', 'Универсальность'],
    seoTitle: 'Сатиновые натяжные потолки - Цена от 1400₽/м²',
    seoDescription: 'Сатиновые натяжные потолки с мягким блеском. Элегантное решение для любого интерьера.'
  },
  {
    id: 'dvukhurovnevye-s-podsvetkoy',
    name: 'Двухуровневые потолки с подсветкой',
    description: 'Современные двухуровневые потолки со встроенной LED-подсветкой. Создают уникальную атмосферу в помещении.',
    price: { min: 2500, max: 4000, unit: '₽/м²' },
    image: '/img/work-4.webp',
    textures: ['matovye', 'glyantsevye'],
    types: ['dvukhurovnevye', 's-podsvetkoy'],
    rooms: ['gostinaya', 'spalnya', 'detskaya'],
    manufacturers: ['msd', 'teqtum'],
    features: ['LED-подсветка', 'Двухуровневая конструкция', 'Управление яркостью'],
    seoTitle: 'Двухуровневые потолки с подсветкой - Цена от 2500₽/м²',
    seoDescription: 'Двухуровневые натяжные потолки с LED-подсветкой. Современное решение для создания уникальной атмосферы.'
  },
  {
    id: 'zvezdnoe-nebo',
    name: 'Потолки "Звездное небо"',
    description: 'Волшебные потолки с эффектом звездного неба. Оптоволоконные нити создают реалистичный эффект звезд.',
    price: { min: 3500, max: 6000, unit: '₽/м²' },
    image: '/img/work-5.webp',
    textures: ['matovye'],
    types: ['zvezdnoe-nebo'],
    rooms: ['spalnya', 'detskaya'],
    manufacturers: ['lumfer', 'cerutti'],
    features: ['Оптоволоконные нити', 'Эффект звездного неба', 'Управление режимами'],
    seoTitle: 'Потолки "Звездное небо" - Цена от 3500₽/м²',
    seoDescription: 'Натяжные потолки "Звездное небо" с оптоволоконными нитями. Создайте волшебную атмосферу в спальне.'
  },
  {
    id: 's-fotopechatyu',
    name: 'Потолки с фотопечатью',
    description: 'Персонализированные потолки с нанесением любого изображения. Ваши мечты на потолке.',
    price: { min: 2000, max: 3500, unit: '₽/м²' },
    image: '/img/work-6.webp',
    textures: ['matovye', 'glyantsevye'],
    types: ['s-fotopechatyu'],
    rooms: ['gostinaya', 'spalnya', 'detskaya', 'prikhozhaya'],
    manufacturers: ['msd', 'bauf'],
    features: ['Любое изображение', 'Высокое качество печати', 'Устойчивость к выцветанию'],
    seoTitle: 'Потолки с фотопечатью - Цена от 2000₽/м²',
    seoDescription: 'Натяжные потолки с фотопечатью. Персонализируйте свой интерьер с помощью уникальных изображений.'
  },
  {
    id: 'paryashchie-potolki',
    name: 'Парящие потолки',
    description: 'Современные парящие потолки с LED-подсветкой по периметру. Создают эффект парения в воздухе.',
    price: { min: 2800, max: 4500, unit: '₽/м²' },
    image: '/img/work-1.webp',
    textures: ['matovye', 'satinovye'],
    types: ['paryashchie', 's-podsvetkoy'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['teqtum', 'lumfer'],
    features: ['Эффект парения', 'LED-подсветка по периметру', 'Современный дизайн'],
    seoTitle: 'Парящие потолки - Цена от 2800₽/м²',
    seoDescription: 'Парящие натяжные потолки с LED-подсветкой. Создайте эффект парения в вашем интерьере.'
  },
  {
    id: 'tenevye-potolki',
    name: 'Теневые потолки',
    description: 'Элегантные теневые потолки с декоративным зазором. Создают глубину и объем в помещении.',
    price: { min: 2200, max: 3500, unit: '₽/м²' },
    image: '/img/work-2.webp',
    textures: ['matovye', 'satinovye'],
    types: ['tenevye'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['bauf', 'clipso'],
    features: ['Декоративный зазор', 'Глубина и объем', 'Элегантность'],
    seoTitle: 'Теневые потолки - Цена от 2200₽/м²',
    seoDescription: 'Теневые натяжные потолки с декоративным зазором. Создайте глубину и объем в вашем интерьере.'
  },
  {
    id: 'tkanevye-potolki',
    name: 'Тканевые потолки',
    description: 'Экологичные тканевые потолки из полиэстера. Идеальны для аллергиков и детских комнат.',
    price: { min: 1800, max: 2800, unit: '₽/м²' },
    image: '/img/work-3.webp',
    textures: ['tkanevye'],
    types: ['besshchelevye'],
    rooms: ['detskaya', 'spalnya', 'gostinaya'],
    manufacturers: ['descor', 'clipso'],
    features: ['Экологичность', 'Гипоаллергенность', 'Дышащий материал'],
    seoTitle: 'Тканевые потолки - Цена от 1800₽/м²',
    seoDescription: 'Тканевые натяжные потолки из полиэстера. Экологичное решение для аллергиков и детских комнат.'
  },
  {
    id: '3d-potolki',
    name: '3D потолки',
    description: 'Объемные 3D потолки с рельефными элементами. Создают уникальный визуальный эффект.',
    price: { min: 3000, max: 5000, unit: '₽/м²' },
    image: '/img/work-4.webp',
    textures: ['fakturnye'],
    types: ['3d'],
    rooms: ['gostinaya', 'spalnya', 'prikhozhaya'],
    manufacturers: ['cerutti', 'lumfer'],
    features: ['3D рельеф', 'Объемные элементы', 'Уникальный дизайн'],
    seoTitle: '3D потолки - Цена от 3000₽/м²',
    seoDescription: '3D натяжные потолки с рельефными элементами. Создайте уникальный визуальный эффект в интерьере.'
  }
];

// Функция фильтрации продуктов
export function filterProducts(products: CeilingProduct[], filter: CatalogFilter): CeilingProduct[] {
  return products.filter(product => {
    // Фильтр по текстурам
    if (filter.textures.length > 0 && !filter.textures.some(t => product.textures.includes(t))) {
      return false;
    }
    
    // Фильтр по типам
    if (filter.types.length > 0 && !filter.types.some(t => product.types.includes(t))) {
      return false;
    }
    
    // Фильтр по помещениям
    if (filter.rooms.length > 0 && !filter.rooms.some(r => product.rooms.includes(r))) {
      return false;
    }
    
    // Фильтр по производителям
    if (filter.manufacturers.length > 0 && !filter.manufacturers.some(m => product.manufacturers.includes(m))) {
      return false;
    }
    
    // Фильтр по цене
    if (product.price.min > filter.priceRange[1] || product.price.max < filter.priceRange[0]) {
      return false;
    }
    
    return true;
  });
}

// Функция получения опций фильтров
export function getFilterOptions(products: CeilingProduct[]): CatalogData['filters'] {
  const textureCounts: Record<string, number> = {};
  const typeCounts: Record<string, number> = {};
  const roomCounts: Record<string, number> = {};
  const manufacturerCounts: Record<string, number> = {};
  
  products.forEach(product => {
    product.textures.forEach(texture => {
      textureCounts[texture] = (textureCounts[texture] || 0) + 1;
    });
    
    product.types.forEach(type => {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    });
    
    product.rooms.forEach(room => {
      roomCounts[room] = (roomCounts[room] || 0) + 1;
    });
    
    product.manufacturers.forEach(manufacturer => {
      manufacturerCounts[manufacturer] = (manufacturerCounts[manufacturer] || 0) + 1;
    });
  });
  
  return {
    textures: Object.entries(textureCounts).map(([value, count]) => ({
      value,
      label: TEXTURE_LABELS[value as keyof typeof TEXTURE_LABELS],
      count
    })),
    types: Object.entries(typeCounts).map(([value, count]) => ({
      value,
      label: TYPE_LABELS[value as keyof typeof TYPE_LABELS],
      count
    })),
    rooms: Object.entries(roomCounts).map(([value, count]) => ({
      value,
      label: ROOM_LABELS[value as keyof typeof ROOM_LABELS],
      count
    })),
    manufacturers: Object.entries(manufacturerCounts).map(([value, count]) => ({
      value,
      label: MANUFACTURER_LABELS[value as keyof typeof MANUFACTURER_LABELS],
      count
    })),
    services: Object.entries(SERVICE_LABELS).map(([value, label]) => ({
      value,
      label,
      count: 1 // Все услуги доступны
    }))
  };
}

// Функция получения данных каталога
export function getCatalogData(filter: CatalogFilter = {
  textures: [],
  types: [],
  rooms: [],
  manufacturers: [],
  services: [],
  priceRange: [0, 10000]
}): CatalogData {
  const filteredProducts = filterProducts(catalogProducts, filter);
  const filters = getFilterOptions(catalogProducts);
  
  return {
    products: filteredProducts,
    filters,
    totalCount: filteredProducts.length
  };
}

// Функция получения продукта по ID
export function getProductById(id: string): CeilingProduct | undefined {
  return catalogProducts.find(product => product.id === id);
}
