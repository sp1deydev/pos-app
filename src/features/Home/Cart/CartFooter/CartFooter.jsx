import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react';
import { formatVietnamCurrency } from '../../../../utils/formatCurrency';
import { handleTotalPrice } from '../../../../utils/handleTotalPrice';

function CartFooter(props) {
    const { cart } = props
    return (
            <div className="flex space-between" style={{lineHeight: '1.5rem'}}>
                <div>
                    <Popconfirm
                        placement="topRight"
                        title="Xóa toàn bộ sản phẩm trong giỏ hàng"
                        description="Bạn có chắc chắn?"
                        icon={<DeleteOutlined style={{ color: 'red' }} />}
                        cancelText="Hủy"
                        okText="Xác nhận"
                        // onConfirm={() => handleDelete(id)}
                    >
                        <Button type="text" icon={<DeleteOutlined />} danger/>
                    </Popconfirm>
                    <span className='ml-05 description-text-color'>Số loại sản phẩm trong giỏ hàng: <b>{cart.length}</b></span>
                </div>
                <div>
                    <span className="bold size-20 mr-1">
                        Tổng tiền: 
                    </span>
                    <span className="bold size-20 primary-text-color">
                        {formatVietnamCurrency(handleTotalPrice(cart))}
                    </span>
                </div>
            </div>
    );
}

export default CartFooter;