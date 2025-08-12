'use client';

import React, { useState } from 'react';
import { CatalogFilter, FilterOption } from '../../types/catalog';
import './catalogFilters.scss';

interface CatalogFiltersProps {
  filters: {
    textures: FilterOption[];
    types: FilterOption[];
    rooms: FilterOption[];
    manufacturers: FilterOption[];
    services: FilterOption[];
  };
  currentFilter: CatalogFilter;
  onFilterChange: (filter: CatalogFilter) => void;
}

export default function CatalogFilters({ 
  filters, 
  currentFilter, 
  onFilterChange 
}: CatalogFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    textures: true,
    types: true,
    rooms: false,
    manufacturers: false,
    services: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (
    filterType: keyof Omit<CatalogFilter, 'priceRange'>,
    value: string,
    checked: boolean
  ) => {
    const newFilter = { ...currentFilter };
    
    if (checked) {
      newFilter[filterType] = [...newFilter[filterType], value as any];
    } else {
      newFilter[filterType] = newFilter[filterType].filter(item => item !== value);
    }
    
    onFilterChange(newFilter);
  };

  const clearAllFilters = () => {
    onFilterChange({
      textures: [],
      types: [],
      rooms: [],
      manufacturers: [],
      services: [],
      priceRange: [0, 10000]
    });
  };

  const hasActiveFilters = Object.values(currentFilter).some(
    filter => Array.isArray(filter) && filter.length > 0
  );

  const renderFilterSection = (
    title: string,
    sectionKey: string,
    options: FilterOption[],
    filterType: keyof Omit<CatalogFilter, 'priceRange'>
  ) => {
    const isExpanded = expandedSections[sectionKey];
    const activeCount = currentFilter[filterType].length;

    return (
      <div className="filter-section">
        <button
          className="filter-section-header"
          onClick={() => toggleSection(sectionKey)}
        >
          <span className="filter-section-title">{title}</span>
          {activeCount > 0 && (
            <span className="filter-active-count">{activeCount}</span>
          )}
          <span className={`filter-section-arrow ${isExpanded ? 'expanded' : ''}`}>
            ▼
          </span>
        </button>
        
        {isExpanded && (
          <div className="filter-options">
            {options.map(option => (
              <label key={option.value} className="filter-option">
                <input
                  type="checkbox"
                  checked={currentFilter[filterType].includes(option.value as any)}
                  onChange={(e) => handleFilterChange(filterType, option.value, e.target.checked)}
                />
                <span className="filter-option-label">{option.label}</span>
                <span className="filter-option-count">({option.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="catalog-filters">
      <div className="filters-header">
        <h3 className="filters-title">Фильтры</h3>
        {hasActiveFilters && (
          <button 
            className="clear-filters-btn"
            onClick={clearAllFilters}
          >
            Очистить все
          </button>
        )}
      </div>

      <div className="filters-content">
        {renderFilterSection('По фактуре', 'textures', filters.textures, 'textures')}
        {renderFilterSection('Виды потолков', 'types', filters.types, 'types')}
        {renderFilterSection('Помещение', 'rooms', filters.rooms, 'rooms')}
        {renderFilterSection('Производители', 'manufacturers', filters.manufacturers, 'manufacturers')}
        {renderFilterSection('Услуги', 'services', filters.services, 'services')}
      </div>

      {hasActiveFilters && (
        <div className="active-filters">
          <h4>Активные фильтры:</h4>
          <div className="active-filters-tags">
            {currentFilter.textures.map(texture => (
              <span key={texture} className="active-filter-tag">
                {filters.textures.find(f => f.value === texture)?.label}
                <button
                  onClick={() => handleFilterChange('textures', texture, false)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.types.map(type => (
              <span key={type} className="active-filter-tag">
                {filters.types.find(f => f.value === type)?.label}
                <button
                  onClick={() => handleFilterChange('types', type, false)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.rooms.map(room => (
              <span key={room} className="active-filter-tag">
                {filters.rooms.find(f => f.value === room)?.label}
                <button
                  onClick={() => handleFilterChange('rooms', room, false)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.manufacturers.map(manufacturer => (
              <span key={manufacturer} className="active-filter-tag">
                {filters.manufacturers.find(f => f.value === manufacturer)?.label}
                <button
                  onClick={() => handleFilterChange('manufacturers', manufacturer, false)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
            {currentFilter.services.map(service => (
              <span key={service} className="active-filter-tag">
                {filters.services.find(f => f.value === service)?.label}
                <button
                  onClick={() => handleFilterChange('services', service, false)}
                  className="remove-filter-btn"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
