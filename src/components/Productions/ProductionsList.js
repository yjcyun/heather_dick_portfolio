import React, { useState } from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image';
import ProductionsItem from './ProductionsItem';
import ProductionModal from './ProductionModal';

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
  const [selectedPoster, setPoster] = useState(null);
  const [items] = useState(posters);
  const [posterItems, setPosterItems] = useState(posters);
  const [categories] = useState(getCategories(posters));

  const openModal = (item) => {
    setPoster(item);
  }

  const closeModal = () => {
    setPoster(null);
  }

  const handleFilter = (category) => {
    let tempPosters = [...items];
    if (category === 'all') {
      setPosterItems(tempPosters);
    }
    else {
      let filteredItems = tempPosters.filter((item) => item.category === category);
      setPosterItems(filteredItems);
    }
  }

  const productionChildren = () => {
    if (selectedPoster) {
      const { img, company, show, date, role, category } = selectedPoster;
      return (
        <>
          <Image fluid={img.childImageSharp.fluid} alt="poster" className="modal-img" />
          <div className="modal-text">
            <p><strong>{show}</strong> from {company}</p>
            {category === 'directing'
              ? <p> Produced on  {date}</p>
              : <p>Heather Dick as {role} on {date}</p>
            }
          </div>
        </>
      )
    } else {
      return null;
    }
  }

  return (
    <>
    <FilterBtnWrapper>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="btn filter-btn"
            onClick={() => handleFilter(category)}
          >{category}</button>
        )
      })}
      </FilterBtnWrapper>
      <ProductionsListWrapper>
        {posterItems.map(item => {
          return (
            <div key={item.id}>
              <div role="button" tabIndex={0} onKeyDown={() => openModal(item)} onClick={() => openModal(item)}>
                <ProductionsItem item={item} />
              </div>

              <ProductionModal
                show={selectedPoster !== null}
                closeModal={closeModal}
              >
                <div className="modal-children">
                  {productionChildren()}
                </div>
              </ProductionModal>
            </div>
          )
        })
        }
      </ProductionsListWrapper>
    </>
  )
}

const FilterBtnWrapper = styled.div`
text-align:center;
`;

const ProductionsListWrapper = styled.div`
display:grid;
grid-row-gap: 1.5rem;

.modal-children{
  display:grid;
  grid-template-rows:auto;
  grid-gap: 1rem;
  max-height: 70vh;
}

.modal-text{
  padding-bottom: 1rem;
  display:flex;
  flex-direction: column;
}

@media(min-width: 768px){
  padding: 0;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
}
`;
export default ProductionsList
