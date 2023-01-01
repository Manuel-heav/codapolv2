import React from 'react';
import Feature from '../../components/feature/Feature';
import './skills.css';

const featuresData = [
  {
    title: 'HTML, CSS and Tailwind',
    text: 'Easy Frontend',
  },
  {
    title: 'Javascript',
    text: 'My whole stack revolve around this beautiful langauge.',
  },
  {
    title: 'ReactJS, NextJS, Redux',
    text: 'Favourite framework of all time',
  },
  {
    title: 'NodeJS, ExpressJS, Firebase',
    text: 'For Backend',
  },
  {
    title: 'C++ and fortran',
    text: 'For lower level programming.',
  },
  {
    title: 'Git & Github',
    text: 'For version Control.',
  },
  {
    title: 'Linux and Command Line',
    text: 'Linux for Fun, Terminal for efficiency.',
  },
];

const Skills = () => (
  <div className="gpt3__features section__padding" id="skills">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">What exactly are my skills?</h1>
      <p>I have worked with a lot of languages and frameworks in the past years, here are some of them.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Skills;