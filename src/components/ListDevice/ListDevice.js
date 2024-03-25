import React, { useEffect, useState, version } from 'react'
import { Table } from 'antd'
import { FaArrowRotateLeft } from "react-icons/fa6";
import styles from './ListDevice.module.css'
import requestApi from '../../helpers/api';
import Select from '../Select/Select'
import Input from '../Input/Input'

const ListDevice = () => {
    const [pageCurrent, setPageCurrent] = useState(1)
    const [listDevice, setListDevice] = useState([])
    const [deviceType, setDeviceType] = useState([])
    const [osVersion, setOsVersion] = useState([])
    const list_device_status = [{ label: 'Đã mượn', value: 'Đã mượn' }, { label: 'Đang mượn', value: 'Đang mượn' }]
    const list_status = [{ label: 'Bình thường', value: 'Bình thường' }, { label: 'Hỏng', value: 'Hỏng' }, { label: 'Đã mất', value: 'Đã mất' }]
    const list_device_os = [{ label: 'IOS', value: 'IOS' }, { label: 'Android', value: 'Android' }]

    useEffect(() => {
        handleGetListDeviceType()
        handleGetListOsVersion()
        handleGetListDevice()
    }, [])

    const handleGetListDeviceType = () => {
        requestApi('/device_type', 'GET', {})
            .then(res => {
                const device_type = res.data.data.map(device => ({ value: device.name, label: device.name }))
                setDeviceType(device_type)
            })
            .catch(err => { })
    }

    const handleGetListOsVersion = () => {
        requestApi('/device-os-version', 'GET', {})
            .then(res => {
                const os_version = res.data.data.os_version.map(version => ({ value: version, label: version }))
                setOsVersion(os_version)
            })
            .catch(err => { })
    }

    const handleGetListDevice = () => {
        requestApi('/devices?offset=1&limit=20&sort_field=device_code&sort_type=asc', 'GET', {})
            .then(res => {
                setListDevice(res.data.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const columns = [
        {
            title: 'STT',
            width: '5%',
            render: (text, record, index) => index + 1 + (pageCurrent - 1) * 20,
        },
        {
            title: 'Mã thiết bị',
            dataIndex: 'device_code',
            width: '12%',
            sorter: {
                compare: (a, b) => a.mtb - b.mtb,
            },
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'device_name',
            width: '12%',
        },
        {
            title: 'OS',
            dataIndex: 'device_os',
            width: '5%',
        },
        {
            title: 'Version',
            dataIndex: 'os_version',
            width: '7%',
        },
        {
            title: 'Vị trí',
            dataIndex: 'address',
            width: '15%',
        },
        {
            title: 'Sử dụng gần nhất',
            dataIndex: '',
            width: '10%',
            key: 'address',
        },
        {
            title: 'Trạng thái',
            dataIndex: '',
            width: '10%',
            key: 'address',
        },
        {
            title: 'Tình trạng',
            dataIndex: '',
            width: '10%',
            key: 'address',
        }
    ];

    const handleSelectChange = (newSelectedOptions) => {
        console.log('test')
    };

    return (
        <div>
            <div className={styles.title}>Danh sách thiết bị</div>
            <div className={styles.search}>
                <div className={styles.input}>
                    <Input
                        placeholder='Nhập tên thiết bị để tìm kiếm (Ví dụ: iphone 6s)'
                    />
                </div>
                <button className={styles.reset}>
                    <FaArrowRotateLeft />
                    <span>Reset</span>
                </button>
            </div>
            <div className={styles.select}>
                <Select
                    options={deviceType}
                    label='Loại thiết bị'
                    onChange={handleSelectChange}
                />
                <Select
                    options={list_device_status}
                    label='Trạng thái thiết bị'
                    onChange={handleSelectChange}
                />
                <Select
                    options={list_status}
                    label='Tình trạng thiết bị'
                    onChange={handleSelectChange}
                />
                <Select
                    options={list_device_os}
                    label='Hệ điều hành'
                    onChange={handleSelectChange}
                />
                <Select
                    options={osVersion}
                    label='Phiên bản'
                    onChange={handleSelectChange}
                />
            </div>
            <Table
                columns={columns}
                dataSource={listDevice}
                // rowClassName={(record, index) => index % 2 === 0 ? '' : 'bg3A7EBD'}
                scroll={{ y: '600px' }}
                pagination={{
                    style: { paddingBottom: 30, justifyContent: 'center' },
                    current: pageCurrent,
                    pageSize: 20,
                    onChange(page, pageSize) {
                        if (page !== pageCurrent) {
                            setPageCurrent(page);
                        }
                    },
                }}
            />
        </div>
    )
}

export default ListDevice