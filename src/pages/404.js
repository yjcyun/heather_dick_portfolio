import React from 'react';
import { Link } from 'gatsby';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import styled from 'styled-components';
import Layout from "../components/Layout";
import error from '../images/404.png';

const Error = () => {
  return (
    <Layout>
      <ErrorWrapper>
        <img src={error} alt="error icon" style={{width: '100px'}}/>
        <h1>Oops! This page doesn't exist.</h1>
        <Link to="/" className="btn blog-btn">
          <FaLongArrowAltLeft className="blog-icon" /> <span>take me home</span>
        </Link>
      </ErrorWrapper>
    </Layout>
  )
}

const ErrorWrapper = styled.section`
  height: calc(100vh - 80px - 213px);
  max-width:1170px;
  margin: 5rem auto 0;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  h1{
    font-size: 3.5rem;
    margin: 2rem 0;
  }
`;
export default Error
