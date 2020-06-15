import React, { useState } from 'react'
import styled from 'styled-components';
import Image from 'gatsby-image';
import ProductionsItem from './ProductionsItem';
import ProductionModal from './ProductionModal';
import subtle from '../../images/subtle-dark-vertical.png';

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
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(null);

  const openModal = (item) => {
    setPoster(item);
  }

  const closeModal = () => {
    setPoster(null);
  }

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

  const productionChildren = () => {
    if (selectedPoster) {
      const { img, company, show, date, role, category } = selectedPoster;
      return (
        <div className="modal-container">
          <Image fluid={img.childImageSharp.fluid} alt="poster" className="modal-img" />
          <div className="modal-text">
            <p><strong>{show}</strong> from {company}</p>
            {category === 'directing'
              ? <p> Produced on  {date}</p>
              : <p>Heather Dick as {role} on {date}</p>
            }
          </div>
        </div>
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
              className={selectedFilterIndex === index ? 'btn filter-btn filter-btn-active' : 'btn filter-btn'}
              onClick={() => handleFilter(category,index)}
            >{category}</button>
         
          )
        })}
      </FilterBtnWrapper>
      <ProductionsListWrapper>
        {posterItems.map(item => {
          return (
            <div key={item.id}>
              <div
                role="button"
                tabIndex={0}
                onKeyDown={() => openModal(item)} onClick={() => openModal(item)}
              >
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
display:flex;
flex-direction:row;
justify-content:center;
`;

const ProductionsListWrapper = styled.div`
display:grid;
grid-row-gap: 1.5rem;
padding: 3rem 2rem;
background: var(--lightestPurple);
background-image: url(${subtle});
border-radius: 1rem;

.modal-container{
  display:grid;
  overflow: hidden;
  grid-gap: 1rem;
  max-height: 80vh;
}

.modal-img{
  height: 100%;
  object-fit: contain;
} 

@media(min-width: 768px){
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  /* grid-auto-rows: 1fr; */
  grid-gap: 1.5rem;
}
`;
export default ProductionsList
