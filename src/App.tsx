import React from 'react';
import './App.sass'
import Main from "./components/main/main";
import styles from "./components/main/styles.module.sass";

function App() {
    console.log("рендер App")
    return (
        <div className={'app'}>
            <div className={styles.gradient1}></div>
            <div className={styles.gradient2}></div>
            <div className={"container"}>
                <main className={styles.container}>
                    <Main/>
                </main>
            </div>
        </div>

    );
}

export default App;
