import React from 'react';
import Layout from '../components/Layout';
import CoachingList from '../components/Coaching/CoachingList';
import Title from '../components/Title';

const coaching = () => {
  return (
    <Layout>
      <div className="page">
        <Title 
        title="coaching philosophy" 
          subtitle="One-on-one coaching offers intensive, personal training tailored to your specific goals, strengths and needs. Ideal for corporate and business professionals who would like to feel more relaxed, powerful, dynamic and ‘present’ when speaking in front of others. Essential for actors and acting students who are preparing monologues and cold-readings for auditions." />
        <CoachingList />
      </div>
    </Layout>
  )
}

export default coaching
