import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import ImgComp from './ImgComp';
import img1 from '../../images/carousel-1.jpg';
import img2 from '../../images/carousel-2.jpg';
import img3 from '../../images/carousel-3.jpg';

const Slider = () => {
  let sliderArr = [<ImgComp src={img1} />, <ImgComp src={img2} />, <ImgComp src={img3} />];
  const [x, setX] = useState(0);

  const prevSlide = () => {
    setX(x + 100);
    (x === 0) ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const nextSlide = () => {
    (x === -100 * (sliderArr.length - 1)) ? setX(0) : setX(x - 100);
  };

  return (
    <SliderWrapper style={{ marginTop: '129.59px' }}>
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
            {item}
          </div>
        )
      })}
      <button className="prevBtn ctrlBtn" onClick={prevSlide}>
        <FaChevronLeft className="ctrl-icon"/>
      </button>
      <button className="nextBtn ctrlBtn" onClick={nextSlide}>
        <FaChevronRight className="ctrl-icon"/>
      </button>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display:flex;
  align-items: center;
  overflow: hidden;

.slide{
  min-width: 100%;
  height: 70vh;
  transition: var(--transition);
  overflow:hidden;
  position:relative;
}

.ctrlBtn {
  background:none;
  border:none;
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 5%;
  cursor: pointer;
  outline: none;
}
.prevBtn{
  left: 0;
 
}
.nextBtn{
right:0;
}
.ctrl-icon {
  font-size: 2rem;
  color: var(--mainWhite);
}

`;
export default Slider
