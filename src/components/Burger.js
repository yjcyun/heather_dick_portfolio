import React from 'react';
import styled from 'styled-components';

const MenuButton = ({ isOpen, toggle }) => {
  const classes = isOpen ? 'menu-button active' : 'menu-button';

  return (
    <MenuBtnWrapper>
      <button className={classes} onClick={toggle}>
        <span className='bar'></span>
      </button>
    </MenuBtnWrapper>
  );
}

const MenuBtnWrapper = styled.div`
.menu-button {
  background-color: transparent;
  border: none;
  color: #FFF;
  height: 48px;
  margin: 0px;
  min-height: 48px;
  min-width: 48px;
  padding: 0px;
  width: 48px;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  
  &:hover, 
  &:focus,
  &:active {
    outline: none;
  }
}

.menu-button.active .bar{
  background-color: transparent;
  -webkit-transition: .2s;
  transition: .2s;
}

.menu-button.active .bar:before {
  -webkit-transform: rotate(45deg) translate(4px, 9px);
  transform: rotate(45deg) translate(4px, 9px);
  -webkit-transition: .3s;
  transition: .3s;
  width: 28px;
  left: 1px;
}

.menu-button.active .bar:after {
  -webkit-transform: rotate(-45deg) translate(3px, -7px);
  transform: rotate(-45deg) translate(3px, -7px);
  -webkit-transition: .3s;
  transition: .3s;
  width: 28px;
  left: 1px;
}

.bar {
  background-color: #FFF;
  width: 24px;
  height: 3px;
  margin: 4px auto;
  border-radius: 3px;
  display: block;
  position: relative;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.bar:before,
.bar:after {
  content: '';
  background-color: #FFF;
  border-radius: 3px;
  width: 24px;
  height: 3px;
  margin: 4px auto;
  position: absolute;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.bar:before {
  top: -12px;
  left: 0px;
}

.bar:after {
  bottom: -12px;
  left: 0px;
}

@media(min-width:996px) {
  display:none;
}

`;
export default MenuButton;