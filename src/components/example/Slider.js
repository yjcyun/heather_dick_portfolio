import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import ImgComp from '../Home/ImgComp';
import img1 from '../../images/carousel-1.jpg';
import img2 from '../../images/carousel-2.jpg';
import img3 from '../../images/carousel-3.jpg';

const Slider = () => {
  let sliderArr = [<ImgComp src={img1} id={1} />, <ImgComp src={img2} id={2} />, <ImgComp src={img3} id={3} />];

  const [x, setX] = useState(0);

  const goToSlide = (id) => {
    console.log(id);
    setX(x + 100);
    (x === 0) ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  return (
    <SliderWrapper>
      {sliderArr.map((item, index) => {
        return (
          <div className="slider" key={index}>
            <div
              key={index}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}>
              {item}
            </div>
            <button
              className="prevBtn ctrlBtn"
              onClick={(id) => goToSlide(id)}>
              {item}
            </button>
          </div>
        )
      })}

      {/* {sliderArr.map((item, index) => {
        return (
          <button key={index} className="prevBtn ctrlBtn" onClick={prevSlide}>
            {item}
          </button>
        )
      })} */}
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
.slider{
  display:flex;
  width: 100%;
  height: 90vh;
  align-items: center;
  overflow: hidden;
}

.slide{
  min-width: 100%;
  height: 90vh;
  transition: var(--transition);
  overflow:hidden;
  position:relative;
}

.ctrlBtn {
  background:none;
  border:none;
  position:absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 7%;
  height: 7%;
  cursor: pointer;
  outline: none;
}
.ctrlBtn img {
  border-radius: 50%;
  height: 60px !important;
  width: 60px!important;
}
.ctrlBtn:nth-of-type(2) {
  top: 50%;
}
.ctrlBtn:nth-of-type(3) {
  top: 60%;
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
