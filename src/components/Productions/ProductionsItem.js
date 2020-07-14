import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const ProductionsItem = ({ item }) => {
  const { img, show } = item;
  return (
    <ProductionsItemWrapper>
      <div className="poster-img">
        <div style={{overflow:'hidden'}}>
          <Image fluid={img.childImageSharp.fluid} alt="posters" className="poster-gatsby-img" />
        </div>
        <div className="poster-footer">
          <p><strong>{show}</strong></p>
        </div>
      </div>
    </ProductionsItemWrapper>
  )
}

const ProductionsItemWrapper = styled.div`
.poster-img{
  cursor: pointer;
  position: relative;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  display: -ms-grid;
  display: grid;
  position:relative;
  transition: var(--transition);
}

.poster-img:hover .poster-gatsby-img{
  transform:scale(1.05);
} 

.poster-gatsby-img{
  height: 25rem;
  transition: var(--transition);
}

.poster-footer{
  font-family: var(--mainFont);
  padding: 8px;
  padding: 1rem 0.5rem;
  text-align:center;
}

.poster-footer p {
  font-size: 1rem;
}
`;
export default ProductionsItem