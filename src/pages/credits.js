import React from 'react';
import styled from 'styled-components';

const credits = () => {
  return (
    <CreditsWrapper>
      <h1>Website Credits</h1>

      <h4>Images from  <a style={{ textDecoration: 'underline', color: 'blue' }} href='https://www.freepik.com/vectors/frame'>www.freepik.com</a></h4>
      <p>
        bcg.jpg<br />
      leaf.svg
      </p><br />

      <h4>Background images from  <a style={{ textDecoration: 'underline', color: 'blue' }} href='https://www.transparenttextures.com/'>www.transparenttextures.com</a></h4>
      <p>simple-horizontal-light.png<br /> subtle-dark-vertical.png</p>
      <br />

      <h4>Icons from  <a style={{ textDecoration: 'underline', color: 'blue' }} href='https://www.flaticon.com/'>www.flaticon.com</a></h4>
      <p>clap.png<br />
     horn.png<br />
     music.png<br />
     question.png<br />
     spotlight.png<br /></p>

    </CreditsWrapper>
  )
}

const CreditsWrapper = styled.section`
  height: calc(100vh - 80px - 213px);
  max-width:1170px;
  margin: 5rem auto 0;
  padding: 1rem;
  h1{
    font-size: 3.5rem;
    margin: 2rem 0;
  }
`;

export default credits