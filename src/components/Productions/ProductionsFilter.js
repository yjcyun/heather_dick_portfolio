import React from 'react';
import styled from 'styled-components';

// Props from ProductionsList
const ProductionsFilter = ({ categories, handleFilter, selectedFilterIndex }) => {
  return (
    <FilterBtnWrapper>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className={selectedFilterIndex === index ? 'btn filter-btn filter-btn-active' : 'btn filter-btn'}
            onClick={() => handleFilter(category, index)}
          >
            {category}
          </button>
        )
      })}
    </FilterBtnWrapper>
  )
}

const FilterBtnWrapper = styled.div`
text-align:center;
display:flex;
flex-direction:row;
justify-content:center;
`;

export default ProductionsFilter