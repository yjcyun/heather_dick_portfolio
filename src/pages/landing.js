import React from "react";
import Layout from '../components/Layout';
import Slider from '../components/Home/Slider';
import About from "../components/Home/About";

const landing = () => {
  return (
    <Layout>
      <div className="page-margin">
        <Slider />
        <About />
      </div>
    </Layout>
  )
}
export default landing;

