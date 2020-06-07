import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import Title from '../components/Title';
import ProductionsList from '../components/Productions/ProductionsList';

const Productions = () => {
  return (
    <Layout>
      <div className="page">
        <Title title="Productions" subtitle="A collection of Heather's production posters...any subtitle? quotes?"/>
        <ProductionsList />
      </div>
    </Layout>
  )
}

export default Productions
