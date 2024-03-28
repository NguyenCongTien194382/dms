import React, { useEffect, useState, version } from 'react'
import { Table } from 'antd'
import { FaArrowRotateLeft } from "react-icons/fa6";
import styles from './ListDevice.module.css'
import requestApi from '../../helpers/api';
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'

const ListDevice = () => {
    const [formSearch, setFormSearch] = useState({})
    const [pageCurrent, setPageCurrent] = useState(1)
    const [totalRecords, setTotalRecords] = useState()
    const [listDevice, setListDevice] = useState([])
    const [deviceType, setDeviceType] = useState([])
    const [osVersion, setOsVersion] = useState([])
    const list_device_status = [{ label: 'Đã mượn', value: 'Đã mượn' }, { label: 'Đang mượn', value: 'Đang mượn' }]
    const list_status = [{ label: 'Bình thường', value: 'Bình thường' }, { label: 'Hỏng', value: 'Hỏng' }, { label: 'Đã mất', value: 'Đã mất' }]
    const list_device_os = [{ label: 'IOS', value: 1 }, { label: 'Android', value: 2 }]

    useEffect(() => {
        handleGetListDeviceType()
        handleGetListOsVersion()
    }, [])

    useEffect(() => {
        handleGetListDevice(pageCurrent)
    }, [pageCurrent])

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

    const handleGetListDevice = (page) => {
        requestApi(`/devices?offset=${page}&limit=20&sort_field=device_code&sort_type=asc`, 'GET', {})
            .then(res => {
                setListDevice(res.data.data.data)
                if (!totalRecords) {
                    setTotalRecords(res.data.data.total_record)
                }
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
            render: (text, record, index) => (
                <div>
                    {record?.device_os === 2 ? 'Android' : (record?.device_os === 1 ? 'Ios' : '')}
                </div>
            ),
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
            render: (text, record, index) => (
                <div>
                    {record?.address && (
                        <a
                            href={`https://www.google.com/maps?q=${record.lat},${record.lng}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: 'underline' }}
                        >
                            {record.address}
                        </a>
                    )}
                </div>
            ),
        },
        {
            title: 'Sử dụng gần nhất',
            dataIndex: 'last_user',
            width: '10%',
        },
        {
            title: 'Trạng thái mượn',
            dataIndex: '',
            width: '10%',
            render: (text, record, index) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {record?.status === 2 && (
                        <div style={{ width: '16px', height: '16px', backgroundColor: 'red', borderRadius: '50%' }}>
                        </div>
                    )}
                    {record?.status === 1 && (
                        <div style={{ width: '16px', height: '16px', backgroundColor: 'green', borderRadius: '50%' }}>
                        </div>
                    )}
                </div>
            ),
        },
        {
            title: 'Tình trạng',
            dataIndex: '',
            width: '10%',
            render: (text, record, index) => (
                <div>
                    {record?.status === 1 && (
                        <div>Bình thường</div>
                    )}
                </div>
            ),
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
                scroll={{ y: '600px' }}
                rowClassName="table-row"
                pagination={{
                    style: { paddingBottom: 30, justifyContent: 'center' },
                    current: pageCurrent,
                    pageSize: 20,
                    total: totalRecords,
                    showSizeChanger: false,
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