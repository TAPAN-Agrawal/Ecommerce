import React, { useEffect, useState } from "react";
import "./UpdateProduct.scss";
import { Button, Form, Input, InputNumber, Radio, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import {
  updateProduct,
  getSingleProduct,
  cleanSingleProduct,
} from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const history = useHistory();
  const singleProducts = useSelector(
    (state: any) => state.ecommerce.singleProduct
  );
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [product, setProduct] = useState<any>({
    product_name: "t",
    description: "t",
    quantity: "t",
    price: "t",
    category: 0,
    product_img: "",
  });

  // console.log("location", location.state.id);

  const validationErr = [{ required: true, message: "required" }];

  const onFinish = (values: any) => {
    dispatch(cleanSingleProduct());
    const updatedValues = {
      ...values,

      file: selectedFile,
      id: singleProducts.id,
    };
    dispatch(updateProduct(updatedValues));
    // dispatch(addProduct(values));
    navigate("/adminpanel/product");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    // toast.warning("errorInfo")
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0]; // Get the first selected file (you can handle multiple files too if needed)
    setSelectedFile(file); // Step 4: Update the state with the selected file
  };
  useEffect(() => {
    dispatch(cleanSingleProduct());
    // console.log("idsss", location.state.id);

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
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
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
            <InputNumber min={1} defaultValue={0} />
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
          <Form.Item label="Image" name="image" className="item">
            <input type="file" onChange={handleFileChange} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="item">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Spin tip="loading.."></Spin>
      )}
    </div>
  );
}

export default AddProduct;
