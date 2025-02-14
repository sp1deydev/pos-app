import { Col, Row, Avatar, Card, Pagination, Button, Drawer} from 'antd';
import { useState } from 'react';
import { formatVietnamCurrency } from '../../../../utils/formatCurrency';
import { useDispatch } from 'react-redux';
import { homeSlice } from '../../../../redux/Slices/homeSlice';

const Products = [
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
  ]


function ProductList(props) {
    const dispatch = useDispatch();
    const [isOpenCheckoutDrawer, setIsOpenCheckoutDrawer] = useState(false);
    const productsPerPage = 18;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const displayProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const onChangePage = (page) => {
        setCurrentPage(page);
    };

    const addToCart = (product) => {
        // props.onAddToCart(product);
        dispatch(homeSlice.actions.addToCart(product));
    }

    const onCloseCheckoutDrawer = () => {
      setIsOpenCheckoutDrawer(false);
    }

    const items = displayProducts.map((product, index) => {
        return (
            <Col span={8} key={index}>
                 <Card
                    hoverable
                    onClick = {() => addToCart(product)}
                    className='product-card'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Avatar src={product.image} className='avt' shape="square" size={54} /> 
                    <div>
                        <div className='product-title'>{product.name}</div>
                        <span className='primary-text-color'>{formatVietnamCurrency(product.price)}</span>
                    </div>
                </Card>
            </Col>
        )
    })
    return (
        <div className="product-list-container">
            <Row gutter={[8, 8]}>
                {items}
            </Row>
            <div className='product-footer'>
                <Pagination
                    size='medium'
                    total={Products.length}
                    current={currentPage}
                    showSizeChanger={0}
                    pageSize={productsPerPage}
                    className='pagination'
                    onChange={onChangePage}
                />
                <Button type='primary' className='checkout-btn' onClick={() => setIsOpenCheckoutDrawer(true)}>Thanh Toán</Button>
            </div>
            <Drawer
              title="Chi Tiết Đơn Hàng (Hoá Đơn X)"
              placement="right"
              width={620}
              onClose={onCloseCheckoutDrawer}
              open={isOpenCheckoutDrawer}
              extra={
                  <Button type="primary" className='checkout-btn'>
                    Xác Nhận Thanh Toán
                  </Button>
              }
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default ProductList;