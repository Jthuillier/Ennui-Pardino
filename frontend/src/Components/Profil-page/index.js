import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Header from '../Header';


const Profil = () => {
    return(
        <div> 
            <Header />
            <div className={styles.container}>
                <div className={styles.filterBox}>
                    <p>Compte</p>
                    <span></span>
                    <p className={styles.mail}>Modifier l'adresse mail</p>
                    <p className={styles.password}>Modifier le mot de passe</p>

            </div>
        </div>
    </div>
    )
}

export default Profil