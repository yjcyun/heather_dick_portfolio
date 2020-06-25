import React, { useState } from 'react'
import ProductionsFilter from './ProductionsFilter';
import Gallery from './Gallery';
import Gallery2 from './Gallery2';

// get unique cateogories
const getCategories = items => {
  let tempItems = items.map(item => {
    return item.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = ['all', ...categories];
  return categories;
}

const ProductionsList = ({ posters }) => {
  const [items] = useState(posters);
  const [posterItems, setPosterItems] = useState(posters);
  const [categories] = useState(getCategories(posters));
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleFilter = (category, index) => {
    let tempPosters = [...items];
    if (category === 'all') {
      setPosterItems(tempPosters);
    }
    else {
      let filteredItems = tempPosters.filter((item) => item.category === category);
      setPosterItems(filteredItems);
    }
    setSelectedFilterIndex(index);
  }

  return (
    <>
      <ProductionsFilter
        categories={categories}
        handleFilter={handleFilter}
        selectedFilterIndex={selectedFilterIndex}
      />
      <Gallery photos={posterItems}/>
      {/* <Gallery2 photos={posterItems}/> */}
     </>
  )
}

export default ProductionsList
