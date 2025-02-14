import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const homeSlice = createSlice({
    name: 'home',
    initialState: { 
        products: {
            total: '',
            dataList: [],
        },
        activeCart: 'default',
        cartList: [
            {
                id: 'default', 
                label: 'HĐ 1', 
                cart: [
                    {
                        "id": 6,
                        "name": "Samsung Galaxy Z Flip3 5G 128GB",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-violet-1-200x200.jpg",
                        "price": 3500000000,
                        "quantity": 1,
                        "isOnCart": false
                    },
                    {
                        "id": 7,
                        "name": "Iphone 13 Pro Max 256GB",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-200x200.jpg",
                        "price": 1780000,
                        "quantity": 1,
                        "isOnCart": false
                    },
                    {
                        "id": 8,
                        "name": "Vivo Y5 series",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg",
                        "price": 194000,
                        "quantity": 1,
                        "isOnCart": false
                    },
                    {
                        "id": 1,
                        "name": "Iphone 11 64GB",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",
                        "price": 200000,
                        "quantity": 2,
                        "isOnCart": false
                    },
                    {
                        "id": 4,
                        "name": "Huawei P50 Pro 5G",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/226196/huawei-p50-pro-600x600.jpg",
                        "price": 132000,
                        "quantity": 2,
                        "isOnCart": false
                    },
                    {
                        "id": 15,
                        "name": "Iphone 13 Testing",
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
                    {
                        "id": 33,
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
                    {
                        "id": 33,
                        "name": "Iphone 13",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
                        "price": 2650,
                        "quantity": 2,
                        "isOnCart": false
                    },
                ]
            },
        ],
    },
    reducers: {
        createCart: (state) => {
            const id = uuidv4();
            const newCart = {
                id: uuidv4(),
                label: `HĐ ${id.slice(2, 6)}`,
                cart: [],
            }
            state.activeCart = id;
            state.cartList.push(newCart)
        },
        deleteCart: (state, action) => {
            const id = action.payload;
            const index = state.cartList.findIndex(cartInfo => cartInfo.id === id)
            state.cartList.splice(index, 1)
        },
        activateCartTab: (state, action) => {
            state.activeCart = action.payload;
        },
    }
})