import React from 'react';
import PropTypes from 'prop-types';

const TopNav = ({ navs, activeNav, navigate }) => {
  return (
    <ul className={`appNav top-nav ${activeNav.open || 'hide'} navig w-full anim bg-gray-800`}>
      {
        navs.map((nav, navIndex) => (
          <li key={navIndex}>
            <h3 onClick={
              () => navigate({ menu: nav.name })
            } className={`${nav.name === activeNav.menu ? 'active' : ''} nav text-white px-12 py-6 text-xl font-semibold`}>{nav.name}</h3>
            {nav.subNavs && <ul className="mail-types bg-gray-750 anim w-100 open">
              {
                Object.values(nav.subNavs).map((subNav, subNavIndex) => (
                  <li onClick={
                    () => navigate({
                      menu: nav.name,
                      subMenu: subNav
                    })
                  } key={subNavIndex} className={`${subNav === activeNav.subMenu ? 'active' : 'text-white'} subnav px-12 py-4 text-md`}>{subNav}</li>
                ))
              }
            </ul>}
          </li>
        ))
      }
    </ul>
  );
};

TopNav.propTypes = {
  navs: PropTypes.array,
  activeNav: PropTypes.object,
  navigate: PropTypes.func,
}

export default TopNav;