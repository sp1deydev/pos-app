
import {
  FilterOutlined,
  PictureOutlined,
  UnorderedListOutlined,
  UserAddOutlined
} from "@ant-design/icons";
import { Button, DatePicker, Form, Input, message, Modal, Select } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
// import axios from 'axios';


const iconBtns = {
    list: <UnorderedListOutlined />,
    filter: <FilterOutlined />,
    picture: <PictureOutlined />,
  };

function ProductHeader(props) {
  // const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [category, setCategory] = useState(undefined);
  //   const items = [...ProductCategories];
  const items = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addCustomer, setAddCustomer] = useState(true); //variable to get new Customers when add a customer by post api
  const [listCustomers, setListCustomers] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [currentCustomers, setCurrentCustomers] = useState();
  const [openSearchCustomer, setOpenSearchCustomer] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  useEffect(() => {
    let data = listCustomers.map((element) => {
      return { value: element.tempId, label: element.label };
    });
    setDataList(data);
  }, [addCustomer]);

  //create list of categories
  const filterData = items.map((element) => {
    return { value: element.label, label: element.label };
  });

  //on change categories
  const onChangeFilter = (value) => {
    //passing category to product component
    if (value !== undefined) props.getCategory(value);
    else props.getCategory("");

    setCategory(value);
  };

  const onChangeCustomer = (label, value) => {
    setCurrentCustomers(value);
    props.setCurrentCus(value);
    setOpenSearchCustomer(false);
  };
  const onSearchCustomer = (value) => {
    if (value === "") {
      setOpenSearchCustomer(false);
      setCurrentCustomers();
    } else {
      setOpenSearchCustomer(true);
    }
  };

  const onFinish = (values) => {
    let newCustomer = {
      tempId: Date.now(),
      firstname: values.firstname ? values.firstname : "",
      lastname: values.lastname ? values.lastname : "",
      phone: values.phone ? values.phone : "",
      email: values.email ? values.email : "",
      mailingstreet: values.mailingstreet ? values.mailingstreet : "",
      birthday: values.birthday ? values.birthday : "",
      label:
        (values.firstname ? values.firstname : "") + " " + values.lastname
          ? (values.firstname ? values.firstname : "") + " " + values.lastname
          : "",
    };
    //Post api
    // axios.post(`${process.env.REACT_APP_API_URL}/modules/RestfulApi/Contacts/${Key}`, new URLSearchParams(newCustomer))
    //   .then(res => {
    //     messageApi.open({
    //       type: 'success',
    //       content: 'Thêm khách hàng thành công',
    //     });
    //     form.resetFields()
    //     console.log(res);
    //     let newListCustomers = [...listCustomers]
    //     newListCustomers.push(newCustomer);
    //     setCurrentCustomers({value: newCustomer.tempId, label: newCustomer.label})
    //     setListCustomers(newListCustomers)
    //     setAddCustomer(!addCustomer);
    //     setIsModalOpen(false)
    //   })
    //   .catch(err => {
    //     messageApi.open({
    //       type: 'error',
    //       content: 'Lỗi khi thêm khách hàng, ' + err.message,
    //     });
    //     console.log(err);
    //   })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const productSearch = (e) => {
    //console.log(e.target.value == "");
  };

  return (
    <div className="product-header-container">
      <div className="product-header-sub-container">
        {/* {contextHolder} */}

        <Select
          showSearch
          allowClear
          listHeight={160}
          placeholder="Tên khách hàng"
          value={currentCustomers}
          optionFilterProp="children"
          style={{ minWidth: "10.5rem" }}
          popupClassName={openSearchCustomer ? "display" : "hide"}
          onChange={onChangeCustomer}
          onSearch={onSearchCustomer}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={dataList}
        />

        <Button icon={<UserAddOutlined />} onClick={showModal} />

        <Select
          value={category}
          style={{ width: "fit-content", minWidth: "10.5rem" }}
          allowClear
          placeholder="Danh mục sản phẩm"
          onChange={onChangeFilter}
          options={filterData}
        />

        <Input
          style={{ width: "fit-content", minWidth: "8.5rem" }}
          placeholder="Tên sản phẩm"
          onChange={productSearch}
        />
      </div>

      <div className="group-btn">
        {/* <Button type="ghost" shape="circle" icon={iconBtns.list}></Button> */}
        <Button
          type="ghost"
          shape="circle"
          icon={iconBtns.filter}
          className="btn"
        ></Button>
        {/* <Button
          type="ghost"
          shape="circle"
          icon={iconBtns.picture}
          className="btn"
        ></Button> */}
      </div>

      <Modal
        title="Thêm khách hàng"
        style={{ top: 40 }}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Họ" name="firstname">
            <Input placeholder="Nhập họ" />
          </Form.Item>

          <Form.Item
            label="Tên"
            name="lastname"
            rules={[{ required: true, message: "Tên khách hàng là bắt buộc!" }]}
          >
            <Input placeholder="Nhập tên" />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone">
            <Input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="Nhập số điện thoại"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", message: "Email không hợp lệ" }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="mailingstreet">
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            name="birthday"
            getValueFromEvent={(onChange) =>
              moment(onChange).format("YYYY-MM-DD")
            }
            getValueProps={(i) => moment(i)}
          >
            <DatePicker
              format="YYYY-MM-DD"
              style={{ width: "100%" }}
              placeholder="Ngày sinh"
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "8px", width: '6rem' }}
            >
              Lưu
            </Button>
            <Button type="default" style={{ width: '6rem' }} onClick={handleCancel}>
              Hủy
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ProductHeader;
