import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context';

import { Button } from '../Button';

import styles from './styles.module.css'

function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext)

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
            <Button
              handleClick={logout}
              variant='secondary'
            >
              Logout
            </Button>
          )
        }
      </ul>
    </div>
);
}

export default NavBar;
