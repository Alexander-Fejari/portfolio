import React, { useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/js/dist/collapse';
import Style from './Header.module.scss';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const li = useRef(null);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const navSpan = document.querySelectorAll('.end');
  const menuToggle = document.getElementById('navbarNav');
  navSpan.forEach(l => {
    l.addEventListener('transitionend', () => {
      menuToggle.classList.remove('show');
      handleNavCollapse();
    });
  });

  return (
    <nav
      className={` navbar navbar-expand-lg navbar-dark ${Style.navBar} ${
        !isNavCollapsed ? '' : 'border-b'
      }`}>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Alexander Fejari
        </Link>
        <button
          className={`navbar-toggler ${Style.navBarToggler}`}
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}>
          <span
            className={`navbar-toggler-icon ${Style.iconBar} ${
              !isNavCollapsed ? Style.iconBar__active : ''
            }`}></span>
        </button>
        <div
          className={'collapse navbar-collapse ' + Style.navBarCollapse}
          id='navbarNav'>
          <ul className={'navbar-nav ' + Style.navBarCollapseNav}>
            <li className={'nav-item'}>
              <NavLink
                className={`nav-link  ${Style.navLink}`}
                ref={li}
                to='/a_propos'>
                <div className={Style.original}>
                  <span>à</span>
                  <span>&nbsp;</span>
                  <span>p</span>
                  <span>r</span>
                  <span>o</span>
                  <span>p</span>
                  <span>o</span>
                  <span>s</span>
                </div>
                <div className={Style.hoverClone}>
                  <span>à</span>
                  <span>&nbsp;</span>
                  <span>p</span>
                  <span>r</span>
                  <span>o</span>
                  <span>p</span>
                  <span>o</span>
                  <span className={'end'}>s</span>
                </div>
              </NavLink>
            </li>
            <li className={'nav-item'}>
              <NavLink
                className={`nav-link  ${Style.navLink}`}
                ref={li}
                to='/projets'>
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
                  <span className={'end'}>s</span>
                </div>
              </NavLink>
            </li>
            <li className={'nav-item'}>
              <NavLink
                className={`nav-link ${Style.navLink}`}
                ref={li}
                to='/contacte'>
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
                  <span className={'end'}>e</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
