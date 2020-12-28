import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import header from './header.js';




const Header = () => {
    useEffect(()=>{ header()})
    return (
        <header>
            <ul className={styles.navbar}>
                <Link to='/'> <h1>L'ennui</h1> </Link>
                
                <li><button id="btn_profil">Profil</button></li>
                <li><button id="btn_deco">Déconnexion</button></li>
                
            </ul>
        </header>
    )

}

export default Header