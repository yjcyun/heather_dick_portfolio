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
          <button className="btn production-btn">learn more<hr className="short-hr"/>
          </button>
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
  transition: var(--transition);
  position:relative;
}

.poster-gatsby-img{
  height: 100%;
}

.poster-layover{
  background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  height: 25rem;
  width: 100%;
  position:absolute;
  top:0;
  left:0;
  opacity:0;
  transition: var(--transition);
  display:flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.poster-img:hover .poster-layover{
  opacity:1;
}

`;
export default ProductionsItem
