import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context';

import styles from './styles.module.css'

function NavBar() {
  const { isAuthenticated } = useContext(AuthContext)

  return(
    <div className={styles.navbar}>
      <ul className={styles.navLinks}>
        <Link className={styles.link} to="/">Dashboard</Link>
        { 
          !isAuthenticated && (
            <Link className={styles.link} to="/login">Login</Link>
          )
        }
        {
          isAuthenticated && (
            <Link className={styles.link} to="/logout">Logout</Link>
          )
        }
      </ul>
    </div>
);
}

export default NavBar;
