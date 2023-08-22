import React from 'react';
import Work from '../../components/work/Work';
import './works.css';

const Works = () => (
  <div className="gpt3__blog section__padding" id="projects">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Few of the projects I have worked on.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
      <Work imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.nIwGgctXlwglyQ3dgOS6FwHaEK%26pid%3DApi&f=1" date="CSniffer" text="An app initially built with react-native for NASA's space app challenge as one of  ethiopia's competitor."/>
        <Work imgUrl="https://i.pinimg.com/originals/61/f7/5b/61f75b7d9f039d37a7eda44154a2670b.jpg" date="Netflix Clone" text="A decent clone of netflix, super realistic, don't get lost." hostedLink="https://netflix-clone-660fc.web.app/"/>
        <Work imgUrl="https://fixthephoto.com/blog/UserFiles/Image/img/amazon-music-hd-interface.png" date="Amazon Clone" text="Implementing React-context-api on an amazon clone" hostedLink="https://clone-4eeab.web.app/"/>
        <Work imgUrl="https://dfd5gcc6b7vw5.cloudfront.net/assets/thenx-header-b0f1a2685be5ff4f739a7333baf90c8045a39f170347548609b634e39709357c.jpg"  date="Thenx Clone" text="I built this to show my students on my FEM(Front End Mastery) course how CSS can be used to do any design." hostedLink="https://manuel-heav.github.io/thenx-clone/"/>
      </div>
    </div>
  </div>
);

export default Works;
