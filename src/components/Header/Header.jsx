import React, { useRef, useEffect } from 'react';
import { Row } from 'reactstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import './Header.css';

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/team',
    display: 'Team'
  },
  {
    path: '/mentors',
    display: 'Mentors'
  },
];

const Header = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isSticky = scrollTop > 80;
      headerRef.current.classList.toggle('sticky__header', isSticky);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    stickyHeaderFunc();
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');


  return (
    <header className="header" ref={headerRef}>
      <Row>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          {/* Logo */}
          <div className="logo" onClick={location.pathname === '/home' ? scrollToTop : null}>
            {/* Make the logo clickable and navigate to the home page */}
            <Link to="/home">
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* Logo */}

          {/* menu start */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu d-flex align-items-center gap-4">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                    <NavLink
                      exact
                      to={item.path}
                      activeClassName="active__link"
                      onClick={location.pathname === '/home' ? scrollToTop : null}
                    >
                      {item.display}
                    </NavLink>
                  
                </li>
              ))}
            </ul>
          </div>
          {/* menu end */}

          <div className="nav__right d-flex align-items-center gap-1 ">
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </header>
  );
};

export default Header;
