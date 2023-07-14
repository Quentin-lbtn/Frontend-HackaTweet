import { useState} from 'react';
import { login } from '../reducers/user';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import Head from 'next/head';
import twitter from '../public/images/twitter-512.png';
import Image from 'next/image';
import styles from '../styles/Signup.module.css';


function Signup () {

    const dispatch = useDispatch();


    const [signUpFirstName, setSignUpFirstName] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    // const [isModal, setIsModal] = useState(true)


    // Enregistrer donnees pour un nouvel utilisateur et rediriger vers page d'accueil
    
    const handleRegister = ()=> {
        console.log('click signup bouton')
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signUpFirstName, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: signUpUsername, token: data.token }));
                    setSignUpFirstName('');
                    setSignUpUsername('');
                    setSignUpPassword('');
                    // rediriger sur page accueil
                }else{
                    console.log('champ non saisi ou utilisateur deja existant')
                }
        });
    };
  
      return (
        <div>
            <Head>
                 <title>Hackatweet-Signup</title>
            </Head>
            <div className = {styles.signupContainer}>
                {/* AJOUTER ONCLICK POUR FERMER FENETRE */}
                <FontAwesomeIcon icon={faXmark} style={{color: "#ebeef4",}} />
                <div className={styles.content}>
                    <Image className={styles.logo} src={twitter} width={40} height={40} alt='logo twitter'/>
                    <span>Create your Hackatweet account</span>
                    <input type="text" placeholder="Firstname" id="signupFirstname" onChange={(e) => setSignUpFirstName(e.target.value)}  value={signUpFirstName} />
                    <input type="text" placeholder="Username" id="signupUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                    <input type="text" placeholder="Password" id="signupPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                {/* VERIFIER REDIRECTION PAGE */}
                    <button id ='register' onClick={() => handleRegister()}>Sign up</button>
                    {/* <Link href= '/accueil' id ='register' onClick={() => handleRegister()}>Sign up</Link> */}
                </div>
            </div>
        </div>
      );
    }

export default Signup;


{/* <button id ='register' onClick={() => handleRegister()}>Sign up</button> */}
