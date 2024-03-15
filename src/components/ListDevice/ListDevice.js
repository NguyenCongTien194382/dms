import React from 'react'
import { Table } from 'antd'
import styles from './ListDevice.module.css'

const ListDevice = () => {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mã thiết bị',
            dataIndex: 'mtb',
            sorter: {
                compare: (a, b) => a.mtb - b.mtb,
            },
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name - b.name,
            },
        },
        {
            title: 'OS',
            dataIndex: 'os',
            sorter: {
                compare: (a, b) => a.os - b.os,
            },
        },
        {
            title: 'Vị trí',
            dataIndex: 'address',
            sorter: {
                compare: (a, b) => a.address - b.address,
            },
        },
        {
            title: 'Sử dụng gần nhất',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'address',
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

    return (
        <div>
            <div>
                <div>Danh sách thiết bị</div>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                rowClassName={(record, index) => index % 2 === 0 ? '' : 'bg3A7EBD'}
            />
        </div>
    )
}

export default ListDevice