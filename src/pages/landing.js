import React from "react";
import Layout from '../components/Layout';
import Slider from '../components/Home/Slider';

const landing = () => {
  return (
    <Layout>
    <div className="page-margin">
      <Slider />
    </div>
    </Layout>
  )
}
export default landing;

