import { DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Empty, InputNumber, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import CartFooter from '../CartFooter';
import { formatVietnamCurrency } from '../../../../utils/formatCurrency';


function CartTable(props) {
    const [data, setData] = useState(props.cart);

    const handleDelete = (id) => {

    }
    const handleMinus = (id) => {
    }

    const handleAdd = (id) => {
    }


    const columns = [
        {
            title: '',
            dataIndex: 'index',
            render:  (index) => {
                return <p>{index}</p>
            },
            className: 'index-column',
            width: '4%'
        },
        {
            title: '',
            dataIndex: 'name',
            width: '32%',
            render: (name) => {
                return <b>{name}</b>
            },
        },
        {
            title: '',
            dataIndex: 'subtotal',
            render: (subTotal) => {
                return <i>{formatVietnamCurrency(subTotal)}</i>
            },
            width: '15%'
        },
        {
            title: '',
            dataIndex: 'quantity',
            render: (element) => {
                return (
                    <React.Fragment>
                        <Button type="ghost" onClick={() => handleMinus(element.id)}>-</Button>
                            <InputNumber
                                controls={false}
                                min={1} 
                                max={100} 
                                value={element.quantity} 
                                // onChange={} 
                                className="custom-quantity-input"
                            />
                        <Button type="ghost" onClick={() => handleAdd(element.id)}>+</Button>
                    </React.Fragment>
                )
            },
            className: "quantity-column",
            width: '16%'
        },
        {
            title: '',
            dataIndex: 'total',
            render: (total) => {
                return <b className="primary-text-color"><i>{formatVietnamCurrency(total)}</i></b>
            },
            width: '17%'
        },
        {
            title: '',
            dataIndex: 'delete',
            render:  id => {
                return (
                    <Popconfirm
                        placement="rightBottom"
                        title="Xoá sản phẩm khỏi giỏ hàng"
                        description="Bạn có chắc chắn?"
                        icon={<DeleteOutlined style={{ color: 'red' }} />}
                        cancelText="Hủy"
                        okText="Xác nhận"
                        onConfirm={() => handleDelete(id)}
                    >
                        <Button type="text" icon={<DeleteOutlined />} danger/>
                    </Popconfirm>
                )
            },
            className: 'delete-column',
            width: '4%'
        },
        {
            title: '',
            dataIndex: 'action',
            render:  () => {
                return (
                    <Button type="text" icon={<MoreOutlined />} />
                )
            },
            className: 'action-column',
            width: '4%'
        },
    ]
    //DATA OF TABLE
    const dataSource = data.map((element, index) => {
        return {
            key: element.id,
            delete: element.id,
            index: index + 1,
            name: element.name,
            quantity: element,
            subtotal: element.price,
            total: element.price * element.quantity
        }
    })
    return (
        <Table 
            className="cart-table"
            showHeader={false}
            columns={columns} 
            dataSource={dataSource}
            pagination={false}
            scroll={{y: 488}}
            footer={() => <CartFooter cart={data}/>}
            locale={{
                emptyText: (
                  <Empty
                    // image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="Không có sản phẩm nào trong giỏ hàng"
                  />
                ),
            }}
        />
    )
}

export default CartTable
