import React from 'react'
import styles from './Header.module.css'
import { doSignOut } from '../../firebase/auth'
import { useAuth } from '../../contexts/authContext'

const Header = () => {
    const { currentUser } = useAuth()

    return (
        <div className={styles.header}>
            <div className={styles.user}>
                <img
                    src='/assets/user.png'
                    alt='user'
                />
                <div>
                    <div>Xin chào <span className={styles.username}>{currentUser?.displayName || ''}</span></div>
                    <div className={styles.role}>Admin</div>
                </div>
            </div>
            <button onClick={() => doSignOut()}>Đăng xuất</button>
        </div>
    )
}

export default Header