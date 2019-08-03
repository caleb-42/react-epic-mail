import React from 'react';
import PropTypes from 'prop-types';

const TopNav = ({ navs }) => {
  return (
    <ul className="top-nav navig w-100 anim">
      {
        navs.map((nav, navIndex) => {
          <li key={navIndex}>
            <h3 data-route={nav.route} data-nav={nav.name} className={nav.active ? 'active' : ''}>{nav.label}
              {nav.menu && <span className="d-arrow img-con anim down"></span>}</h3>
            {nav.menu && <ul className="mail-types anim w-100 open">
              {
                nav.menu.map((menu, menuIndex) => {
                  <li key={menuIndex} data-route={menu.route} data-parent-nav={nav.name} data-nav={menu.name} className={menu.active ? 'active' : ''}>Inbox</li>
                })
              }
            </ul>}
          </li>
        })
      }
    </ul>
  );
};

TopNav.propTypes = {
  navs: PropTypes.array,
}

export default TopNav;