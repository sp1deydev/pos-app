import { Col, Row, Avatar, Card, Pagination, Button, Drawer} from 'antd';
import { useState } from 'react';
import { formatVietnamCurrency } from '../../../../utils/formatCurrency';
import { useDispatch, useSelector } from 'react-redux';
import { homeSlice } from '../../../../redux/Slices/homeSlice';

const productsPerPage = 18;


function ProductList(props) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.home.products)
    const [isOpenCheckoutDrawer, setIsOpenCheckoutDrawer] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    
    const displayProducts = products.dataList.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const onChangePage = (page) => {
      setCurrentPage(page);
    };
    const addToCart = (product) => {
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
                    total={products.total}
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