import React from 'react';
import Layout from '../components/Layout';
import Info from '../components/Info';
import Title from '../components/Title';
import Button from '../components/Button';

const about = () => {
  return (
    <Layout>
      <div className="page-height extra-margin">
        <Info reverse>
          <Title
            title="WHO IS HEATHER?"
            subtitle="Heather Dick is dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Aadipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Heather Dick is dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Aadipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Heather Dick is dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit. Aadipisicing elit. Alias, reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit.Heather Dick is dolor sit amet consectetur " />
          <Button text="contact for full resume" />
        </Info>
        
      </div>
    </Layout>
  )
}

export default about
