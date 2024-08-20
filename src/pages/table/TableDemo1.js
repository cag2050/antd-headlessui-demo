import {useState} from "react";
import {Table} from "antd";

const TableDemo1 = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
        ],
    };

    const data = [];
    for (let i = 0; i < 4; i++) {
        data.push({
            prn: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    return (
        <div style={{margin: 10}}>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{
                hideOnSinglePage: true
            }}/>
        </div>
    )
}

export default TableDemo1;