import React from 'react';
import Layout from '../components/Layout';
import CoachingList from '../components/Coaching/CoachingList';
import Title from '../components/Title';
import Event from '../components/Coaching/Event';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import question from '../images/question.png';
import CoachingQuoteList from '../components/Coaching/CoachingQuoteList';

const coaching = () => {
  return (
    <Layout>
      <SEO title="Coaching" description="Heather Dick is a well-respected acting coach and voice coach for film, television, theatre & commercials. The Sirius Theatrical Company offers acting classes and voice classes for professional actors, corporate groups & beginners in Toronto and the Greater Toronto Area." />
      <div className="page">
        <Title page="coaching" />
        <CoachingQuoteList />
        <CoachingList />
        <Event />
        <Contact btnText="send your questions" icon={question} title="Have any questions?">
          <h4 className="coaching-contact">Do you need help with your upcoming theatre/vocal project?</h4>
          <h4 className="coaching-contact strong">Contact Heather and she will guide you to the right direction.</h4>
        </Contact>
      </div>
    </Layout>
  )
}

export default coaching