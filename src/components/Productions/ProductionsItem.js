import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const ProductionsItem = ({ item }) => {
  const { img, show } = item;
  return (
    <ProductionsItemWrapper>
      <div className="poster-img">
        <Image fluid={img.childImageSharp.fluid} alt="posters" className="poster-gatsby-img" />
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
  box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.1);
  -webkit-box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.1);
  overflow:hidden;
  transition: var(--transition);
}

.poster-img:hover{
  box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.43);
-webkit-box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.43);
-moz-box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.43);
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
`;
export default ProductionsItem
