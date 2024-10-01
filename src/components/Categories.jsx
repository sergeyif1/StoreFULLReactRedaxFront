import React from 'react';

export default function Categories({ value, onCilckCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onCilckCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
