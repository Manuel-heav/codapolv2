import React from 'react';
import Feature from '../../components/feature/Feature';
import './skills.css';

const featuresData = [
  {
    title: 'HTML, CSS and Bootstrap',
    text: 'What is a developer without these skills.',
  },
  {
    title: 'Javascript',
    text: 'My whole stack revolve around this beautiful langauge.',
  },
  {
    title: 'React',
    text: 'My favourite framework of all time.',
  },
  {
    title: 'Node and Express',
    text: 'I wanted to learn other backend languages. But my heart is still with javascript. So I sticked around with NodeJs.',
  },
  {
    title: 'C++ and fortran',
    text: 'Not an expert on them. But familiar with them, for the sake of experience.',
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