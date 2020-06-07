import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const ProductionsItem = ({ item }) => {
  const { img, title, subtitle, date } = item;
  return (
    <ProductionsItemWrapper>
      <div className="poster-img">
        <img src={img} alt="posters" />
        <div className="poster-layover">
          <h4></h4>
        </div>
      </div>
    </ProductionsItemWrapper>
  )
}

const ProductionsItemWrapper = styled.div`
.poster-img{
  height: 25rem;
  cursor: pointer;
  position: relative;
}

img{
  height: 100%;
}

`;
export default ProductionsItem
