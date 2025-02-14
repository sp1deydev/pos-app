import React, { useEffect, useState } from 'react';
import CartTable from './CartTable';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { homeSlice } from '../../../redux/Slices/homeSlice';


function Cart(props) {
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.home.cartList)
    const [items, setItems] = useState([]);

    useEffect(() => {
        let tabList = []
        cartList.map((cartInfo, index) => {
            tabList.push({
                label: cartInfo.label,
                key: cartInfo.id,
                children: <CartTable cart={cartInfo.cart}/>
            })
        })
        setItems(tabList);
    }, [cartList]);

    const onChangeTab = (id) => {
        dispatch(homeSlice.actions.activateCartTab(id));
    }

    const onEditTabs = (targetKey, action) => {
      if (action === 'add') {
        dispatch(homeSlice.actions.createCart());
      } else {
        items.length > 1 && dispatch(homeSlice.actions.deleteCart(targetKey))
      }
    };

    return (
        <div>
             <Tabs
                type="editable-card"
                size='small'
                onChange={onChangeTab}
                onEdit={onEditTabs}
                items={items}
            />

        </div>
    );
}

export default Cart;