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
  -webkit-transition: var(--transition);
  transition: var(--transition);
  display: -ms-grid;
  display: grid;
  position:relative;
  box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.1);
-webkit-box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.1);
-moz-box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.1);

}

.poster-img:hover{
  box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.43);
-webkit-box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.43);
-moz-box-shadow: 5px 7px 10px 0px rgba(0,0,0,0.43);
}

.poster-gatsby-img{
  height: 20rem;
}

.poster-footer{
  padding: 8px;
  padding: 1rem 0.5rem;
  height: 5rem; 
  text-align:center;
}

.poster-layover{
  background:-webkit-linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  background:linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  height: 20rem;
  width: 100%;
  position:absolute;
  top:0;
  left:0;
  opacity:0;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.poster-img:hover .poster-layover{
  opacity:1;
}
`;
export default ProductionsItem
