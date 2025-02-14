import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const homeSlice = createSlice({
    name: 'home',
    initialState: { 
        products: {
            total: 19,
            dataList: [
                {
                  "id": 1,
                  "name": "Iphone 11 64GB",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",
                  "price": 20000000,
                },
                {
                  "id": 2,
                  "name": "Samsung S22 5G 128GB",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/231110/Galaxy-S22-Black-600x600.jpg",
                  "price": 1500000,
                },
                {
                  "id": 3,
                  "name": "Xiaomi Redmi Note 10S 8GB",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/235969/xiaomi-redmi-note-10s-xanh-1-200x200.jpg",
                  "price": 800,
                },
                {
                  "id": 4,
                  "name": "Huawei P50 Pro 5G",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/226196/huawei-p50-pro-600x600.jpg",
                  "price": 1320,
                },
                {
                  "id": 5,
                  "name": "Oppo Reno5 5G",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/233460/oppo-reno5-5g-thumb-600x600.jpg",
                  "price": 1234,
                },
                {
                  "id": 6,
                  "name": "Samsung Galaxy Z Flip3 5G 128GB",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-violet-1-200x200.jpg",
                  "price": 3500,
                },
                {
                  "id": 7,
                  "name": "Iphone 13 Pro Max 256GB",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-200x200.jpg",
                  "price": 1780,
                },
                {
                  "id": 8,
                  "name": "Vivo Y5 series",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/249720/Vivo-y15s-2021-xanh-den-660x600.jpg",
                  "price": 1940,
                },
                {
                  "id": 9,
                  "name": "Iphone SE (2020)",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-2020-trang-600x600-600x600.jpg",
                  "price": 2134,
                },
                {
                  "id": 10,
                  "name": "OPPO A95",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-2-600x600.jpg",
                  "price": 2310,
                },
                {
                  "id": 11,
                  "name": "Realme 8 series",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg",
                  "price": 2412,
                },
                {
                  "id": 12,
                  "name": "Nokia G11",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/272148/Nokia-g11-x%C3%A1m-thumb-600x600.jpg",
                  "price": 1200,
                },
                {
                  "id": 13,
                  "name": "POCO C40",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/277057/xiaomi-poco-c40-thumb-vang-600x600.jpg",
                  "price": 2350,
                },
                {
                  "id": 14,
                  "name": "Nokia 105 4G",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/240194/nokia-105-4g-blue-600x600.jpg",
                  "price": 400,
                },
                {
                  "id": 15,
                  "name": "Iphone 13",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
                  "price": 2650,
                },
                {
                  "id": 15,
                  "name": "Iphone 13",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
                  "price": 2650,
                },
                {
                  "id": 15,
                  "name": "Iphone 13",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
                  "price": 2650,
                },
                {
                  "id": 15,
                  "name": "Iphone 13",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
                  "price": 2650,
                },
                {
                  "id": 15,
                  "name": "Iphone 13",
                  "image": "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-starlight-1-600x600.jpg",
                  "price": 2650,
                },
            ],
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
                        "price": 35000000,
                        "quantity": 1,
                    },
                ]
            },
            {
                id: 'default 2', 
                label: 'HĐ 2', 
                cart: [
                    {
                        "id": 1,
                        "name": "Iphone 11 64GB",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-tim-200x200.jpg",
                        "price": 200000,
                        "quantity": 2,
                    },
                    {
                        "id": 4,
                        "name": "Huawei P50 Pro 5G",
                        "image": "https://cdn.tgdd.vn/Products/Images/42/226196/huawei-p50-pro-600x600.jpg",
                        "price": 132000,
                        "quantity": 2,
                    },
                ]
            },
        ],
    },
    reducers: {
        // CART REDUCERS:
        createCart: (state) => {
            const id = uuidv4();
            const newCart = {
                id: uuidv4(),
                label: `HĐ ${id.slice(2, 6)}`,
                cart: [],
            }
            state.cartList.push(newCart)
        },
        deleteCart: (state, action) => {
            const id = action.payload;
            const index = state.cartList.findIndex(cartInfo => cartInfo.id === id)
            if (id === state.activeCart) {
                if (index + 1 == state.cartList.length) {
                    state.activeCart = state.cartList[index - 1].id;
                }
                else {
                    state.activeCart = state.cartList[index + 1].id;
                }
            }
            state.cartList.splice(index, 1)
        },
        activateCartTab: (state, action) => {
            state.activeCart = action.payload;
        },
        deleteProductInCart: (state, action) => {
            const id = action.payload;
            const cartIndex = state.cartList.findIndex(cartInfo => cartInfo.id === state.activeCart)
            const productIndex = state.cartList[cartIndex].cart.findIndex(cart => cart.id === id)
            state.cartList[cartIndex].cart.splice(productIndex, 1)
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const cartIndex = state.cartList.findIndex(cartInfo => cartInfo.id === state.activeCart)
            const productIndex = state.cartList[cartIndex].cart.findIndex(cart => cart.id === id)
            if(state.cartList[cartIndex].cart[productIndex].quantity === 1) {
                return;
            }
            state.cartList[cartIndex].cart[productIndex].quantity--;
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const cartIndex = state.cartList.findIndex(cartInfo => cartInfo.id === state.activeCart)
            const productIndex = state.cartList[cartIndex].cart.findIndex(cart => cart.id === id)
            if(state.cartList[cartIndex].cart[productIndex].quantity === 100) {
                return;
            }
            state.cartList[cartIndex].cart[productIndex].quantity++;
        },
        changeQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const cartIndex = state.cartList.findIndex(cartInfo => cartInfo.id === state.activeCart)
            const productIndex = state.cartList[cartIndex].cart.findIndex(cart => cart.id === id)
            state.cartList[cartIndex].cart[productIndex].quantity = quantity
        },
        clearCart: (state) => {
            const cartIndex = state.cartList.findIndex(cartInfo => cartInfo.id === state.activeCart)
            state.cartList[cartIndex].cart = [];
        },
        addToCart: (state, action) => {
            const product = action.payload
            const cartIndex = state.cartList.findIndex(cartInfo => cartInfo.id === state.activeCart)
            const cartProductIndex = state.cartList[cartIndex].cart.findIndex(cart => cart.id === product.id)
            if(cartProductIndex == -1) {
                state.cartList[cartIndex].cart.push({...product, quantity: 1})
                return;
            }
            if (state.cartList[cartIndex].cart[cartProductIndex].quantity < 100){
                state.cartList[cartIndex].cart[cartProductIndex].quantity++;
                return;
            }
        },
    }

})