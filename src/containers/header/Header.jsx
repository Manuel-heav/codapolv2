import React from 'react'
import './header.css'
import ai from '../../assets/ai.svg'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Hello, My Name Is Amanuel Kebede</h1>
        <p>I am a freelancing react developer in Ethiopia. I have managed to teach myslef full stack web development while specializing on react for 3 years now.</p>
        <div className="gpt3__header-content__input">
          <button type="button"><a href="#offers">My Offers</a></button>
        </div>
      </div>


      <div className="gpt3__header-image">
          <img src={ai} />
        </div>
    </div>
  )
}

export default Header
