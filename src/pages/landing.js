import React from "react";
import Layout from '../components/Layout';
import Slider from '../components/example/Slider';
import About from "../components/Home/About";

const landing = () => {
  return (
  
      <div className="page-margin">
        <Slider />
        <About />
      </div>
  )
}
export default landing;

