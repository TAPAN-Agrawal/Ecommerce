import React, { useState } from "react";
import "./AddProduct.scss";
import { Button, Form, Input, InputNumber, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { addProduct } from "../../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface AddProductInterface {
  id?: number;
  name: string;
  description: string;
  price: number | any;
  quantity: number | any;
  category: number | any;
  file: string | any;
}

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState<any>("");

  const validationErr = [{ required: true, message: "Required" }];

  const onFinish = (values: AddProductInterface) => {
    const updatedValues = { ...values, file: selectedFile };
    dispatch(addProduct(updatedValues));
    setTimeout(() => {
      navigate("/adminpanel/product");
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="addProduct-wrapper">
      <Form
        name="addproduct-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="addAdmin-Form"
      >
        <h1>AddProduct</h1>
        <Form.Item
          label="Name"
          name="name"
          rules={validationErr}
          className="item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={validationErr}
          className="item"
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={validationErr}
          className="item"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Quantity"
          name="quantity"
          rules={validationErr}
          className="item"
          initialValue={1}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={validationErr}
          className="item"
        >
          <Radio.Group>
            <Radio value={0}> Men </Radio>
            <Radio value={1}> Women </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          rules={validationErr}
          className="item"
          initialValue={selectedFile}
        >
          <input type="file" onChange={handleFileChange} />
        </Form.Item>
        <Form.Item className="item">
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProduct;
