import React, { useState } from 'react'
import styles from './Login.module.css'
import { doSignInWithMicrosoft } from '../../firebase/auth'

const Login = () => {
    const [isSigningIn, setIsSigningIn] = useState(false)

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithMicrosoft().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div className={styles.login}>
            <img
                src='/assets/login.png'
                alt='login'
                className={styles.background}
            />
            <div className={styles.container}>
                <img
                    src='/assets/logo_login.png'
                    alt='login'
                />
                <div
                    onClick={(e) => { onGoogleSignIn(e) }}
                    className={styles.social}
                >
                    <span>Đăng nhập hệ thống</span>
                    <div className={styles.loginWith}>
                        <img
                            src='/assets/icons/google.png'
                            alt='google'
                        />
                        <span>Đăng nhập với google</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login