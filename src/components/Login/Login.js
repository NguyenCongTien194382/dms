import React from 'react'
import styles from './Login.module.css'

const Login = () => {
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
                <div className={styles.social}>
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