import React from 'react';

import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Book',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navbar">
      <div className="nav1">
        <header>
          <h1 className="Title">Bookstore CMS</h1>
        </header>
        <ul className="Links">
          {links.map((link) => (
            <li key={link.id} className={link.name}>
              <NavLink to={link.path} exact>
                {link.text}
                {' '}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
