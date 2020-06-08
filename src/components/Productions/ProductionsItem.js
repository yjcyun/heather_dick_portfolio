import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const ProductionsItem = ({ item }) => {
  const { img } = item;
  return (
    <ProductionsItemWrapper>
      <div className="poster-img">
        <Image fluid={img.childImageSharp.fluid} alt="posters" className="poster-gatsby-img" />
        <div className="poster-layover">
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

.poster-gatsby-img{
  height: 100%;
}

`;
export default ProductionsItem
