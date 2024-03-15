import React from 'react'
import { Menu } from 'antd'
import Icon from '../Icon/Icon';
import styles from './Navbar.module.css'

const Navbar = () => {
    const items = [
        { key: 'list_device', label: 'Danh sách thiết bị', icon: <Icon icon='list_alt.png' /> },
        { key: 'history_update_device', label: 'Lịch sử cập nhật thiết bị', icon: <Icon icon='history_toggle_off.png' /> },
        { key: 'list_account', label: 'Danh sách tài khoản', icon: <Icon icon='people_alt.png' /> },
        { key: 'management_device', label: 'Quản lý mượn trả', icon: <Icon icon='phone_android.png' /> },
        { key: 'notification', label: 'Quản lý thông báo', icon: <Icon icon='notifications.png' /> },
    ];
 
    return (
        <div className={styles.navbar}>
            <img
                src='/assets/logo.png'
                alt="logo"
                className={styles.logo}
            />
            <Menu
                className={styles.menu}
                items={items}
                defaultSelectedKeys={['list_device']}
                onSelect={({ key }) => {
                    console.log(key)
                }}
            />
        </div>
    )
}

export default Navbar