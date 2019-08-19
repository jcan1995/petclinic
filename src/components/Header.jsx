import React from 'react';
import menuItems from '../resources/menu.json';
import 'materialize-css/dist/css/materialize.css';

const Header = () => {
  const { navItems, appTitle } = menuItems;
  return (
    <nav>
      <div className="nav-wrapper">
        <a style={{paddingLeft: "5px"}} href="/appointments" className="brand-logo">{appTitle}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
          navItems.map((item, key) => {
            return (
              <li><a href={`/${item.toLowerCase()}`}>{item}</a></li>
            );
          })
        }
        </ul>
      </div>
    </nav>
  );
}

export default Header;
