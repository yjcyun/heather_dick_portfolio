import React from 'react'
import styled from 'styled-components';
import posters from '../../constants/posters';
import ProductionsItem from './ProductionsItem';

const ProductionsList = () => {
  return (
    <ProductionsListWrapper>
      {
        posters.map(item => {
          return (
            <ProductionsItem key={item.id} item={item} />
          )
        })
      }
    </ProductionsListWrapper>
  )
}

const ProductionsListWrapper = styled.div`
display:grid;
grid-row-gap: 1.5rem;
@media(min-width: 768px){
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
}
`;
export default ProductionsList
