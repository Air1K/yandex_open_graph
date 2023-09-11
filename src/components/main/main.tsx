import React, {useEffect, useState} from 'react';
import styles from './styles.module.sass'
import Logo from "../logo/logo";



const Main = () => {
    const [showBottom, setShowBottom] = useState(window.innerWidth)
    return (
        <div className={styles.main}>
            <div className={styles.textContent}>
                <Logo/>
                <h1 className={styles.textBoolMain}>Вступайте<br/>в клуб<br/>Самокатов</h1>
            </div>
            <div className={styles.imgContent}>
                {/*<img src={image1} alt=""/>*/}
                <div className={styles.scuter}/>
                <div className={styles.circle}/>
            </div>
        </div>
    );
};

export default Main;