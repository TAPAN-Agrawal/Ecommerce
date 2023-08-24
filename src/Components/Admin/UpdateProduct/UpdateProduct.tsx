import React, { useEffect, useState } from "react";
import "./UpdateProduct.scss";
import { Button, Form, Input, InputNumber, Radio, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import {updateProduct,getSingleProduct,cleanSingleProduct,
} from "../../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const singleProducts = useSelector(
    (state: any) => state.ecommerce.singleProduct
  );
  const [selectedFile, setSelectedFile] = useState<any>('');
  const [product, setProduct] = useState<any>({
    product_name: "",
    description: "",
    quantity: "",
    price: "",
    category: 0,
    product_img: "",
  });


  const validationErr = [{ required: true, message: "required" }];

  const onFinish = (values: any) => {
  
    dispatch(cleanSingleProduct());
    const updatedValues = {
      ...values,
      file: selectedFile,
      id: singleProducts.id,
    };
    
    
    
    dispatch(updateProduct(updatedValues));
    navigate("/adminpanel/product");
  };

  const onFinishFailed = (errorInfo: any) => {
    
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file); 
  };
  useEffect(() => {
    dispatch(cleanSingleProduct());

    if (location.state.id) {
      dispatch(getSingleProduct(location.state.id));
    }
  }, []);
  useEffect(() => {
    setProduct(singleProducts);
  }, [singleProducts]);

  return (
    <div className="updateProduct-wrapper">
      {singleProducts.id ? (
        <Form
          name="updateproduct-form"
          layout="vertical"   
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="updateAdmin-Form"
        >
          <h1>UpdateProduct</h1>
          <Form.Item
            label="Name"
            name="name"
            rules={validationErr}
            initialValue={singleProducts.product_name}
            className="item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            initialValue={singleProducts.description}
            rules={validationErr}
            className="item"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            initialValue={singleProducts.price}
            rules={validationErr}
            className="item"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="quantity"
            initialValue={singleProducts.quantity}
            rules={validationErr}
            className="item"
          >
            <InputNumber min={1}  />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            initialValue={singleProducts.category}
            rules={validationErr}
            className="item"
          >
            <Radio.Group>
              <Radio value={0}> Men </Radio>
              <Radio value={1}> Women </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Image" name="image" className="item" initialValue={selectedFile}>
            <input type="file" onChange={handleFileChange} />
          </Form.Item>
          <Form.Item  className="item">
            <Button type="primary" htmlType="submit">
             Update
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Spin ></Spin>
      )}
    </div>
  );
}

export default AddProduct;
