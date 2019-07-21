import React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from '../withStyles';

import styles from './style.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink exact activeClassName={styles.active} to={'/'}>
        首页
      </NavLink>
      <br />
      <NavLink activeClassName={styles.active} to={'/login'}>
        登陆
      </NavLink>
      <br />
      <NavLink activeClassName={styles.active} to={'/404'}>
        找不到
      </NavLink>
      <br />
    </div>
  );
};

export default withStyles(Header, styles);
