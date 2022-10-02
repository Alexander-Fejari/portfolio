import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Style from './Navbar.module.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = (to = null) => {
    const end_state = to === null ? !isActive : to;
    // console.log('to: ', to, 'isActive: ', isActive, 'end state: ', end_state);
    setIsActive(end_state);
  };

  // const spanEnd = document.querySelectorAll('.end');

  // spanEnd.forEach(l => {
  //   l.addEventListener('onTransitionEnd', () => {
  //     toggleNavBar(false);
  //   });
  // });

  return (
    <header className={Style.navBarHeader}>
      <Link className={Style.navBarHeaderBrand} to='/'>
        Alexander<span>Fejari</span>
      </Link>
      <nav className={isActive ? Style.navBarMobile : Style.navBar}>
        <ul className={Style.navBarList}>
          <li className={Style.navBarListItem}>
            <NavLink
              className={Style.navBarListLink}
              to='/a_propos'
              onClick={toggleNavBar(false)}>
              <div className={Style.original}>
                <span>à</span>
                <span>&nbsp;</span>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>p</span>
                <span>o</span>
                <span className='end'>s</span>
              </div>
              <div className={Style.hoverClone}>
                <span>à</span>
                <span>&nbsp;</span>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>p</span>
                <span>o</span>
                <span>s</span>
              </div>
            </NavLink>
          </li>
          <li className={Style.navBarListItem}>
            <NavLink className={Style.navBarListLink} to='/projets'>
              <div className={Style.original}>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>j</span>
                <span>e</span>
                <span>t</span>
                <span>s</span>
              </div>
              <div className={Style.hoverClone}>
                <span>p</span>
                <span>r</span>
                <span>o</span>
                <span>j</span>
                <span>e</span>
                <span>t</span>
                <span className='end'>s</span>
              </div>
            </NavLink>
          </li>
          <li className={Style.navBarListItem}>
            <NavLink className={Style.navBarListLink} to='/contacte'>
              <div className={Style.original}>
                <span>c</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                <span>e</span>
              </div>
              <div className={Style.hoverClone}>
                <span>c</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                <span className='end'>e</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        type='button'
        onClick={() => toggleNavBar()}
        className={`btn ${
          isActive ? Style.navBarHeaderTogglerActive : Style.navBarHeaderToggler
        }`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Navbar;
