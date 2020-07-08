import React from 'react';
import Layout from '../components/Layout';
import CoachingList from '../components/Coaching/CoachingList';
import Title from '../components/Title';
import Event from '../components/Coaching/Event';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import question from '../images/question.png';
import CoachingQuote from '../components/Coaching/CoachingQuote';

const coaching = () => {
  return (
    <Layout>
      <SEO title="Coaching" description="Heather Dick is a well-respected acting coach and voice coach for film, television, theatre & commercials. The Sirius Theatrical Company offers acting classes and voice classes for professional actors, corporate groups & beginners in Toronto and the Greater Toronto Area." />
      <div className="page">
        <Title
          title="my coaching philosophy">
          <strong>“Inspired, truthful acting is grounded in solid technique!”</strong> <br /><span>- Heather Dick</span><br />
            I’m grateful to the wonderful master coaches who shared their wisdom, training and passion with me - Marie Mumford (acting), Robert Barash (original member of the Actors Studio Directors Unit - acting), Samantha Langevin (acting) and Kristin Linklater (<a href="https://www.linklatervoice.com/" style={{ color: 'blue', textDecoration: 'underline' }}>Linklater Voice</a>). Now it’s my wish to share my wisdom with you.<br /><br />
My work and coaching are grounded in the teachings of <strong>Lee Strasberg, Uta Hagen</strong> and <strong>Kristin Linklater</strong>. Through improvisation and exploration, I guide you to physically, emotionally and vocally embody the characters you create, so that they are real human beings with passion, strength, vulnerability and hope. My approach is practical, tactile, imaginative and creative so that you can be <strong>present, dynamic</strong> and <strong>exciting</strong>.
          <br />
        </Title>
        <CoachingQuote quote="Working with Heather over the last couple of years has allowed me to open my voice and body in ways that I didn’t think were possible. Heather’s empathy, depth of knowledge and unwavering commitment to discovery and play provided me with a safe place to grow as an actor and a person." author="-  Mary Thomas, Voice & Acting Student" />
        <CoachingList />
        <CoachingQuote />
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
