import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    {/* <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h1>CP</h1>
        <p>Addis Ababa, Ethiopia, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href="https://github.com/manuel-heav"> Github</a></p>
        <p><a href="https://t.me/mr_blogrammer">Telegram</a></p>
        <p><a href="https://www.linkedin.com/in/amanuel-kebede-691497244">LinkedIn</a></p>
        <p><a href="https://twitter.com/the_blogrammer">Twitter</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Primary Phone: +251938085067</p>
        <p>Secondary Phone: +251799113869</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Codapol. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;