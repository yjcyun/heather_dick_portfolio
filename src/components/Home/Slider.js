import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../../images/carousel-1.jpg';
// import img2 from '../../images/carousel-2.jpg';
// import img3 from '../../images/carousel-3.jpg';

const getImage = graphql`
 query {
    file(relativePath: {eq: "carousel-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Slider = (props) => {
  const data = useStaticQuery(getImage);
  const img = data.file.childImageSharp.fluid;

  return (
    <SliderWrapper>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <Image fluid={img} className="carousel-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src=""
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src=""
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </SliderWrapper>
  );
}


const SliderWrapper = styled.div`
.carousel-img{
  height: 80vh;
}
 .carousel-img img{
   max-height:80vh !important;
 
 }
`;
export default Slider
