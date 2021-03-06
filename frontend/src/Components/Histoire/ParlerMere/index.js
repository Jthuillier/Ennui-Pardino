import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';
import Header from '../../Header';
import Image from '../../../img/parlermere.png';

const Parler = () => {
  
    return(
            <div>  
             <Header/>
                 <div className={styles.container} style={{
                    backgroundImage: 'url(' + Image + ')', 
                    backgroundSize: 'cover' 
                    }}>


                {/* GAUCHE */}
                <div className={styles.filterBox}>
                <div className={styles.btnP}>
                <button> <Link to="/accepterSonDestinSuite" className={styles.Link}>Page précédente</Link></button>
                </div>
                
        <p className={styles.text}>Vous ouvrez la porte de votre chambre et ressentez immédiatement une chaleur réconfortante. Est-ce le feu de cheminée qui vous procure cet effet, ou bien est-ce la présence de votre mère qui vous souris tendrement en voyant votre visage ?</p>
        <p className={styles.text}>Une chose est sûre, l’atmosphère est apaisante.</p>
        <p className={styles.text}>« Tout va bien mon chéri ? Tu as une drôle de mine…Viens un peu par ici » dit-elle en vous faisant signe d’approcher. « Tu n’as pas de fièvre au moins ? »</p>
        <p className={styles.text}>-Non non, tout va bien maman, j’étais simplement perdu dans mes pensées…</p>
        <p className={styles.text}>Tandis qu’elle vous sonde brièvement du regard, elle finit par conclure : « Très bien, dans ce cas couvre-toi et n’oublie pas d’aller aider ton père à traire les vaches » avant de se replonger dans une broderie ambitieuse.</p>
     

                {/* DROITE */}
         
                <button className={styles.destiny}><Link to='/parleraCharlie'>parler à Charlie le Coq </Link></button>
                <button className={styles.destiny}><Link to='/parleraGladys'>parler à Gladys la chèvre </Link></button>
     
                </div>
            </div>
        </div>

    )
}


export default Parler