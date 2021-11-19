import React from 'react';
import Feature from '../../components/feature/Feature';
import './offers.css';

const Offers = () => (
  <div className="gpt3__whatgpt3 section__margin" id="offers">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Quality" text="Making quality my priority, I focus on delivering products that are compatible with your expectations in a very short period of time with a fair price." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">What exactly are you looking for?</h1>
      <p><a href="#projects">Explore the Library</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Mobile Application" text="Cross platform apps that can work on both ios and android very efficiently using react native." />
      <Feature title="Full Stack Websites" text="Got any idea in mind that require a fancy design with awesome functionality?" />
      <Feature title="Design" text="Decent and awesome minimalist design that can blend in with the modern design beautifully." />
    </div>
  </div>
);

export default Offers;