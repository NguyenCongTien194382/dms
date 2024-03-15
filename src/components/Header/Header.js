import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.user}>
                <img
                    src='/assets/user.png'
                    alt='user'
                />
                <div>
                    <div>Xin chào <span className={styles.username}>Nguyễn Văn A</span></div>
                    <div className={styles.role}>Admin</div>
                </div>
            </div>
            <button>Đăng xuất</button>
        </div>
    )
}

export default Header