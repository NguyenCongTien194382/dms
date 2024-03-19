import React, { useState } from 'react'
import { Table } from 'antd'
import { FaArrowRotateLeft } from "react-icons/fa6";
import styles from './ListDevice.module.css'
import Select from '../Select/Select'
import Input from '../Input/Input'

const ListDevice = () => {
    const [pageCurrent, setPageCurrent] = useState(1)

    const phoneOptions = [
        { value: 'iphone', label: 'iPhone' },
        { value: 'samsung', label: 'Samsung' },
        { value: 'google', label: 'Google Pixel' },
        { value: 'huawei', label: 'Huawei' },
        { value: 'oneplus', label: 'OnePlus' },
        { value: 'xiaomi', label: 'Xiaomi' },
        { value: 'sony', label: 'Sony Xperia' },
        { value: 'lg', label: 'LG' },
        { value: 'oppo', label: 'OPPO' },
        { value: 'vivo', label: 'Vivo' }
    ];
    const columns = [
        {
            title: 'STT',
            dataIndex: 'name',
            width: '5%',
            render: (text, record, index) => index + 1 + (pageCurrent - 1) * 20,
        },
        {
            title: 'Mã thiết bị',
            dataIndex: 'mtb',
            width: '12%',
            sorter: {
                compare: (a, b) => a.mtb - b.mtb,
            },
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'name',
            width: '12%',
        },
        {
            title: 'OS',
            dataIndex: 'os',
            width: '5%',
        },
        {
            title: 'Version',
            dataIndex: 'version',
            width: '7%',
        },
        {
            title: 'Vị trí',
            dataIndex: 'address',
            width: '15%',
        },
        {
            title: 'Sử dụng gần nhất',
            dataIndex: 'address',
            width: '10%',
            key: 'address',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'address',
            width: '10%',
            key: 'address',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'address',
            width: '10%',
            key: 'address',
        }
    ];


    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park1',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park2',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park3',
            tags: ['cool', 'teacher'],
        },
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
                    options={phoneOptions}
                    label='Loại thiết bị'
                    onChange={handleSelectChange}
                />
                <Select
                    options={phoneOptions}
                    label='Trạng thái thiết bị'
                    onChange={handleSelectChange}
                />
                <Select
                    options={phoneOptions}
                    label='Tình trạng thiết bị'
                    onChange={handleSelectChange}
                />
                <Select
                    options={phoneOptions}
                    label='Hệ điều hành'
                    onChange={handleSelectChange}
                />
                <Select
                    options={phoneOptions}
                    label='Phiên bản'
                    onChange={handleSelectChange}
                />
            </div>
            <Table
                columns={columns}
                dataSource={data}
                // rowClassName={(record, index) => index % 2 === 0 ? '' : 'bg3A7EBD'}
                scroll={{ y: '1600px' }}
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