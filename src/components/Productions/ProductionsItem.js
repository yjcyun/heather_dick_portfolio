import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const ProductionsItem = ({ item }) => {
  const { img, show, company } = item;
  return (
    <ProductionsItemWrapper>
      <div className="poster-img">
        <Image fluid={img.childImageSharp.fluid} alt="posters" className="poster-gatsby-img" />
        <div className="poster-footer">
          <p><strong>{show}</strong> by {company}</p>
        </div>



        {/* POSTER LAYOVER */}
        <div className="poster-layover">
          <button className="btn production-btn">learn more<hr className="short-hr" />
          </button>
        </div>
      </div>
    </ProductionsItemWrapper>
  )
}

const ProductionsItemWrapper = styled.div`
.poster-img{
  cursor: pointer;
  position: relative;
  transition: var(--transition);
  display: grid;
  position:relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.poster-gatsby-img{
  height: 25rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.poster-footer{
  padding: 0.5rem;
  background: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
  border-radius: 10px;
}

.poster-img:hover .poster-layover{
  opacity:1;
}


`;
export default ProductionsItem
