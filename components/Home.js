import { useState} from 'react';

import Head from 'next/head';
import twitter from '../public/images/twitter-512.png';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home () {

    const [messageTweet, setMessageTweet] = useState('');

    const handleSaveTweet = () =>{
        console.log('Click new tweet')
    }

    return (
        <div>
            <Head>
				<title>Hackatweet-Home</title>
			</Head>
            <div className = {styles.mainContent}>
                <div className={styles.leftContent}>
                    <Image className={styles.logo} src={twitter} width={60} height={60} alt='logo twitter'/>
                </div>
                <div className={styles.centerContent}>
                    <div className={styles.home}>
                        <h2 className = {styles.h2}>Home</h2>
                        <input className = {styles.input} type="text" placeholder="What's up?" id="messageTweet" onChange={(e) => setMessageTweet(e.target.value)} value={messageTweet} />
                        <div className = {styles.postTweet}>
                            {/* DEFINIR COUNTER LENGTH */}
                            <p className={styles.p}>Counter</p>
                            <button onClick={() => handleSaveTweet ()} id ='saveTweet'>Tweet</button>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.trends}>
                            <h2 className = {styles.h2}>Trends</h2>
                            {/* AJOUTER COMPOSANT TRENDS */}
                    </div>
                </div>
            </div>
        </div>


    );
};


export default Home;
