import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'


const Menu = () => (
  <>
            <p><a href="#home">Home</a></p>
            <p><a href="#offers">Offers</a></p>
            <p><a href="#skills">Skills</a></p>
            <p><a href="#projects">Projects</a></p>
  </>
)
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <h1>CP</h1>
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu />
          </div>
        </div>

        <div className="gpt3__navbar-sign">
          <button type="button"><a href="mailto:manuelheav@gmail.com">Contact</a></button>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}

           {toggleMenu && (
             <div className="gpt3__navbar-menu_container scale-up-center">
               <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                  <div className="gpt3__navbar-menu_container-links-sign">
          {/* <p>Sign in</p> */}
          <button type="button"><a href="mailto:manuelheav@gmail.com">Contact</a></button>
        </div>
               </div>
             </div>
           )}
        </div>
      </div>
  )
}

export default Navbar
