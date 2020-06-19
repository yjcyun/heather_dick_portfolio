import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Modal from 'react-modal';
import ProductionsItem from './ProductionsItem';
import ProductionsFilter from './ProductionsFilter';

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
          <div style={{marginTop:'1rem'}}>
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
      <ProductionsFilter
        categories={categories}
        handleFilter={handleFilter}
        selectedFilterIndex={selectedFilterIndex}
      />
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

              <Modal
                isOpen={selectedPoster !== null}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
              >
                {productionChildren()}
                <div style={{position:'absolute', top:'0', right:'0'}}>
                  <button onClick={closeModal} style={{background:'transparent', outline:'none', border:'none'}} className="modal-close">
                    <IoMdClose style={{fontSize:'1.5rem'}}/>
                  </button>
                </div>
              </Modal>
            </div>
          )
        })}
      </ProductionsListWrapper>
    </>
  )
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ProductionsListWrapper = styled.div`
display:grid;
grid-row-gap: 1.5rem;
padding: 3rem 2rem;
border-radius: 1rem;

@media(min-width: 768px){
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-gap: 1.5rem;
}
`;
export default ProductionsList
