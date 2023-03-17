import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenue ! Je suis</h5>
        <h1>Matis Chabanat</h1>
        <h5 className="text-light">Computer Science Student</h5>

        <CTA /> {/* Call to action button */}

        <div className="me">
          <img src={ME} alt="moi" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header