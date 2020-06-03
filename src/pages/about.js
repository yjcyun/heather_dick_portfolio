import React from 'react';
import Layout from '../components/Layout';
import Info from '../components/Info';
import Title from '../components/Title';
import Banner from '../components/Banner';

const about = () => {
  return (
    <Layout>
      <div className="page-height page-margin">
        <Banner
         heading="Be ri-DICK-ulous!"
         subHeading="learn about heather and her work"
        ></Banner>
        <Info reverse>
          <Title
            title="WHO IS"
            title2="Heather?"
            subtitle="Heather Dick is dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Aadipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Heather Dick is dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Aadipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Heather Dick is dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Aadipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Heather Dick is dolor sit amet consectetur " />
        </Info>
      </div>
    </Layout>
  )
}

export default about
