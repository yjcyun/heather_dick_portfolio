import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Carousel from 'react-bootstrap/Carousel';
import img from '../../images/carousel-1.jpg';

const getImage = graphql`
 query {
    img1:file(relativePath: {eq: "carousel-1.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    img2:file(relativePath: {eq: "carousel-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    img3:file(relativePath: {eq: "carousel-3.jpg"}) {
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
  const img = data.img1.childImageSharp.fluid;
  const img2 = data.img2.childImageSharp.fluid;
  const img3 = data.img3.childImageSharp.fluid;

  return (
    <SliderWrapper>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <Image fluid={img} className="carousel-img" />
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid={img2} className="carousel-img" />
        </Carousel.Item>
        <Carousel.Item>
          <Image fluid={img3} className="carousel-img" />
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
 .carousel-control-prev,
 .carousel-control-next{
   display: none;
 }

 .carousel-indicators li{
   background-color: black;
   height: 10px;
   width: 30px;

 }
`;

export default Slider

