import { useState} from 'react';
import { login } from '../reducers/user';
import { useDispatch } from 'react-redux';

// import Link from 'next/link';
import Head from 'next/head';
import twitter from '../public/images/twitter-512.png';
import Image from 'next/image';
import styles from '../styles/Signin.module.css';




function Signin () {

    const dispatch = useDispatch();

	const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');


    // Verifier donnees de connexion et rediriger vers page d'accueil
    
    const handleLogin = ()=> {
        console.log('click signup bouton')
        dispatch(login({ username: signInUsername}));
		setSignInUsername('');
		setSignInPassword('');

        // AJOUTER ROUTE BACKEND CONNEXION
        // fetch('http://localhost:3000/users/signin', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		// }).then(response => response.json())
		// 	.then(data => {
		// 		if (data.result) {
		// 			dispatch(login({ username: signInUsername, token: data.token }));
		// 			setSignInUsername('');
		// 			setSignInPassword('');
		// 			setIsModalVisible(false)
		// 		}
		// 	});
    }

  
      return (
        <div>
            <Head>
                 <title>Hackatweet-Signin</title>
            </Head>
            <div className = {styles.signinContainer}>
                <Image src={twitter} width={200} height={200} alt='logo twitter'/>
                <span>Connect to Hackatweet</span>
                <input type="text" placeholder="Username" id="signupUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                <input type="text" placeholder="Password" id="signupPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                <button id ='register' onClick={() => handleLogin()}>Sign in</button>
            </div>
        </div>
      );
    }

export default Signin;



// const handleRegister = () => {
//     fetch('http://localhost:3000/users/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
//     }).then(response => response.json())
//         .then(data => {
//             if (data.result) {
//                 dispatch(login({ username: signUpUsername, token: data.token }));
//                 setSignUpUsername('');
//                 setSignUpPassword('');
//                 setIsModalVisible(false)
//             }
//         });
// };
