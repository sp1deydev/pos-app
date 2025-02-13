import { InputNumber, Table } from "antd";
import React, { useEffect, useState } from "react"
import { DeleteOutlined, MoreOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const cart = [
    {
        "id": 6,
        "name": "Samsung Galaxy Z Flip3 5G 128GB Samsung Galaxy Z Flip3 5G 128GB Flip3 5G 128GB",
        "image": "https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-violet-1-200x200.jpg",
        "price": 35000000,
        "quantity": 1,
        "isOnCart": false
    },
    {
        "id": 7,
        "name": "Iphone 13 Pro Max 256GB",
        "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-200x200.jpg",
        "price": 1780,
        "quantity": 1,
        "isOnCart": false
    },
    {
        "id": 8,
        "name": "Vivo Y5 series",
        "image": "https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg",
        "price": 1940,
        "quantity": 1,
        "isOnCart": false
    },
    {
        "id": 1,
        "name": "Iphone 11 64GB",
        "image": "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",
        "price": 2000,
        "quantity": 2,
        "isOnCart": false
    },
    {
        "id": 4,
        "name": "Huawei P50 Pro 5G",
        "image": "https://cdn.tgdd.vn/Products/Images/42/226196/huawei-p50-pro-600x600.jpg",
        "price": 1320,
        "quantity": 2,
        "isOnCart": false
    },
    {
        "id": 15,
        "name": "Iphone 13",
        "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
        "price": 2650,
        "quantity": 2,
        "isOnCart": false
    },
    {
        "id": 50,
        "name": "Iphone 13",
        "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
        "price": 2650,
        "quantity": 2,
        "isOnCart": false
    },
    {
        "id": 33,
        "name": "Iphone 13",
        "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
        "price": 2650,
        "quantity": 2,
        "isOnCart": false
    },
]

function Cart(props) {
    const [data, setData] = useState(cart);
    const [quantity, setQuantity] = useState(1);
    console.log(data);

    //DELETE A PRODUCT IN CART
    const handleDelete = (id) => {
        let index = data.findIndex(data => data.id === id)
        let temp = [...data]
        temp[index].quantity = 1;
        temp.splice(index, 1)
        console.log("delete", temp);
        setData(temp)
    }
    //DECREASE QUANTITY OF PRODUCT
    const handleMinus = (id) => {
        let index = data.findIndex(data => data.id === id)
        let temp = [...data]
        if(temp[index].quantity > 1)
            temp[index].quantity--
        console.log("minus", temp);
        setData(temp)
    }

    //INCREASE QUANTITY OF PRODUCT
    const handleAdd = (id) => {
        let index = data.findIndex(data => data.id === id)
        let temp = [...data]
        if(temp[index].quantity < 100)
            temp[index].quantity++
        setData(temp)
    }


    const columns = [
        {
            title: '',
            dataIndex: 'index',
            render:  (index) => {
                return <p>{index}</p>
            },
            width: '5%'
        },
        {
            title: '',
            dataIndex: 'delete',
            render:  id => {
                return <Button type="text" icon={<DeleteOutlined />} onClick={() => handleDelete(id)} danger/>
            },
            width: '6%'
        },
        {
            title: '',
            dataIndex: 'quantity',
            render: (element) => {
                return (
                    <React.Fragment>
                        {/* <Button type="text" icon={<MinusOutlined />} onClick={() => handleMinus(element.id)} />
                        &nbsp;
                        <b>{element.quantity}</b>
                        &nbsp;
                        <Button type="text" icon={<PlusOutlined />} onClick={() => handleAdd(element.id)}/> */}
                        <Button type="ghost" onClick={() => handleMinus(element.id)}>-</Button>
                            <InputNumber
                                controls={false}
                                min={1} 
                                max={100} 
                                value={quantity} 
                                onChange={(value) => setQuantity(value || 1)} 
                                className="custom-quantity-input"
                            />
                        <Button type="ghost" onClick={() => handleAdd(element.id)}>+</Button>
                    </React.Fragment>
                )
            },
            width: '19%'
        },
        {
            title: '',
            dataIndex: 'name',
            width: '32%'
        },
        {
            title: '',
            dataIndex: 'subtotal',
            render: (sub) => {
                return <i>{sub} đ</i>
            }
        },
        {
            title: '',
            dataIndex: 'total',
            render: (total) => {
                return <b><i>{total} đ</i></b>
            }
        },
        {
            title: '',
            dataIndex: 'action',
            render:  () => {
                return (
                    <Button type="text" icon={<MoreOutlined />} />
                )
            },
            width: '6%'
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
    console.log('src',dataSource)
    return (
        <Table 
            className="cart-table"
            showHeader={false}
            columns={columns} 
            dataSource={dataSource}
            pagination={false}
            scroll={{y: 560}}
            footer={() => (
                <div className="flex end">
                    <span className="bold size-20 mr-1">
                        Tổng tiền: 
                    </span>
                    <span className="bold size-20 primary-text-color">
                        1500000000 đ
                    </span>
                </div>
            )}
        />
    )
}

export default Cart
