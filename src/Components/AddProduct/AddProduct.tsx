import React, { useEffect } from "react";
import "./AddProduct.scss";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { message } from "antd";
import { addProduct, getSingleProduct } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("location", location.state.id);
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(addProduct(values));
    navigate("/adminpanel/product");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    // toast.warning("errorInfo")
  };

  // useEffect(() => {
  //   if (location.state.id) {
  //     dispatch(getSingleProduct(location.state.id));
  //   }
  // }, []);

  return (
    <div className="addProduct-wrapper">
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="addAdmin-Form"
      >
        <h1>AddProduct</h1>
        <Form.Item label="Title" name="title" className="item">
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" className="item">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Price" name="price" className="item">
          <Input />
        </Form.Item>
        <Form.Item label="Quantity" name="quantity" className="item">
          <InputNumber min={1} defaultValue={0} />
        </Form.Item>
        <Form.Item label="Category" name="category" className="item">
          <Radio.Group>
            <Radio value={0}> Men </Radio>
            <Radio value={1}> Women </Radio>
          </Radio.Group>
        </Form.Item>
      <input type="file"/>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="item">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProduct;
