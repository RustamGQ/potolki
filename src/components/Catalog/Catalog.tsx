'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { CatalogFilter, CatalogData } from '../../types/catalog';
import { getCatalogData } from '../../lib/catalog';
import CatalogFilters from './CatalogFilters';
import CatalogProductCard from './CatalogProductCard';
import './catalog.scss';

interface CatalogProps {
  citySlug?: string;
  initialData?: CatalogData;
}

export default function Catalog({ citySlug, initialData }: CatalogProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [catalogData, setCatalogData] = useState<CatalogData>(initialData || getCatalogData());
  const [currentFilter, setCurrentFilter] = useState<CatalogFilter>({
    textures: [],
    types: [],
    rooms: [],
    manufacturers: [],
    services: [],
    priceRange: [0, 10000]
  });
  const [isLoading, setIsLoading] = useState(false);

  // Синхронизация с URL параметрами
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const newFilter: CatalogFilter = {
      textures: params.get('textures')?.split(',').filter(Boolean) || [],
      types: params.get('types')?.split(',').filter(Boolean) || [],
      rooms: params.get('rooms')?.split(',').filter(Boolean) || [],
      manufacturers: params.get('manufacturers')?.split(',').filter(Boolean) || [],
      services: params.get('services')?.split(',').filter(Boolean) || [],
      priceRange: [
        parseInt(params.get('minPrice') || '0'),
        parseInt(params.get('maxPrice') || '10000')
      ]
    };

    setCurrentFilter(newFilter);
    updateCatalogData(newFilter);
  }, [searchParams]);

  const updateCatalogData = (filter: CatalogFilter) => {
    setIsLoading(true);
    const newData = getCatalogData(filter);
    setCatalogData(newData);
    setIsLoading(false);
  };

  const handleFilterChange = (filter: CatalogFilter) => {
    setCurrentFilter(filter);
    
    // Обновление URL
    const params = new URLSearchParams();
    
    if (filter.textures.length > 0) {
      params.set('textures', filter.textures.join(','));
    }
    if (filter.types.length > 0) {
      params.set('types', filter.types.join(','));
    }
    if (filter.rooms.length > 0) {
      params.set('rooms', filter.rooms.join(','));
    }
    if (filter.manufacturers.length > 0) {
      params.set('manufacturers', filter.manufacturers.join(','));
    }
    if (filter.services.length > 0) {
      params.set('services', filter.services.join(','));
    }
    if (filter.priceRange[0] > 0) {
      params.set('minPrice', filter.priceRange[0].toString());
    }
    if (filter.priceRange[1] < 10000) {
      params.set('maxPrice', filter.priceRange[1].toString());
    }

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newUrl, { scroll: false });
  };

  const getResultsText = () => {
    const count = catalogData.totalCount;
    if (count === 0) return 'Товары не найдены';
    if (count === 1) return 'Найден 1 товар';
    if (count < 5) return `Найдено ${count} товара`;
    return `Найдено ${count} товаров`;
  };

  return (
    <div className="catalog">
      <div className="catalog-header">
        <div className="catalog-title-section">
          <h1 className="catalog-title">Каталог натяжных потолков</h1>
          <p className="catalog-subtitle">
            Выберите подходящий потолок из нашего каталога
          </p>
        </div>
        
        <div className="catalog-results">
          <span className="results-count">{getResultsText()}</span>
        </div>
      </div>

      <div className="catalog-content">
        <aside className="catalog-sidebar">
          <CatalogFilters
            filters={catalogData.filters}
            currentFilter={currentFilter}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <main className="catalog-main">
          {isLoading ? (
            <div className="catalog-loading">
              <div className="loading-spinner"></div>
              <p>Загрузка товаров...</p>
            </div>
          ) : catalogData.products.length === 0 ? (
            <div className="catalog-empty">
              <div className="empty-icon">🔍</div>
              <h3>Товары не найдены</h3>
              <p>Попробуйте изменить параметры фильтрации</p>
              <button 
                className="reset-filters-btn"
                onClick={() => handleFilterChange({
                  textures: [],
                  types: [],
                  rooms: [],
                  manufacturers: [],
                  services: [],
                  priceRange: [0, 10000]
                })}
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="catalog-grid">
              {catalogData.products.map(product => (
                <CatalogProductCard
                  key={product.id}
                  product={product}
                  citySlug={citySlug}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
