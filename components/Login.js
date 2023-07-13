import { Popover, Button } from 'antd';

import Head from 'next/head';
import Image from 'next/image';
import Signin from './Signin';
import Signup from './Signup';

import 'antd/dist/antd.css';
import twitter from '../public/images/twitter-512.png';
import styles from '../styles/Login.module.css';


function Login () {

// METTRE EN FORME POPOVER
  const popoverSignUpContent = (
    <div className = {styles.popoverSignUpContent}>
      <Signup></Signup>      
    </div>
  );

// METTRE EN FORME POPOVER
  const popoverSignInContent = (
    <div className = {styles.popoverSignUpContent}>
      <Signin></Signin>      
    </div>
  );

  return (
    <div>
      <Head>
				<title>Hackatweet-Login</title>
			</Head>
      <div className={styles.mainContent}>
        <div className = {styles.leftContainer}>
        <Image className = {styles.logo} src={twitter} width={200} height={200} alt='logo twitter'/>
        </div>
        <div className = {styles.rightContainer}>
          <div className={styles.content}>
            <Image className={styles.logo} src={twitter} width={40} height={40} alt='logo twitter'/>
            <h1 className={styles.h1}>See What's happening</h1>
            <h2 className={styles.h2}>Join Hackatweet today.</h2>
            <Popover content={popoverSignUpContent} className={styles.popover} trigger="click">
              <Button className={styles.buttonsignup}>Sign up</Button>
            </Popover>
            <p className = {styles.p}>Already have an account?</p>
            <Popover content={popoverSignInContent} className={styles.popover} trigger="click">
              <Button className={styles.buttonsignin}>Sign in</Button>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
