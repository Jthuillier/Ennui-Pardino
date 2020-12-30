import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import styles from './lecteur.module.css';
import lecteur from './lecteur.js';
import mp3_file from '../../../src/sound/sound.mp3';
import Image from '../../img/Musiquevector3.png';



const Lecteur = () => {
    useEffect(()=>{ lecteur()})
    return (

        <div className={styles.container} className={styles.container} style={{
            backgroundImage: 'url(' + Image + ')', 
            backgroundSize: 'cover' 
            }}>
            <p className={styles.pLecteur}>Cher lecteur pour une meilleure immersion
                il est recommandé d'activer la musique</p>
            <div className={styles.containerLecteur}>
                <div className={styles.containerButton}>
                    <button className={styles.Button} id="btn_play"><h1>play</h1></button>
                    <button className={styles.Button} id="btn_pause"><h1>pause</h1></button>
                </div>
                    <audio id='sound' src={mp3_file} controls loop autoplay/>
            </div>
            <div>
                <p className={styles.text}>
                    Crédit : Constantine Bard  -  Lana del Ray Médieval Style
                </p>
            </div>
            
        </div>
    )

}

export default Lecteur