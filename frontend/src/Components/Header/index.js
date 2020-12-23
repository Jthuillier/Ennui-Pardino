import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {

    return (
        <header>
            <ul className={styles.navbar}>
                <Link to='/'> <h1>L'ennui</h1> </Link>
                <li> <Link to='/Profil'>Profil</Link>   </li>
                <li> <Link>Déconnexion</Link>   </li>
                </ul>
        </header>
    )

}

export default Header