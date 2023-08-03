import React, { useEffect, useState } from "react";
// import "./AddProduct.scss";
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

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const validationErr=[{required:true,message:"required"}]

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const updatedValues={...values,file:selectedFile}
    dispatch(addProduct(updatedValues));
    navigate("/adminpanel/product");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    // toast.warning("errorInfo")
  };
  const handleFileChange = (event:any) => {
    const file = event.target.files[0]; // Get the first selected file (you can handle multiple files too if needed)
    setSelectedFile(file); // Step 4: Update the state with the selected file
  };
 

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
        <Form.Item label="Name" name="name" rules={validationErr} className="item">
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={validationErr} className="item">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Price" name="price" rules={validationErr} className="item">
          <Input />
        </Form.Item>
        <Form.Item label="Quantity" name="quantity" rules={validationErr} className="item">
          <InputNumber min={1} defaultValue={0} />
        </Form.Item>
        <Form.Item label="Category" name="category" rules={validationErr} className="item">
          <Radio.Group>
            <Radio value={0}> Men </Radio>
            <Radio value={1}> Women </Radio>
          </Radio.Group>
        </Form.Item>
     <Form.Item label="Image" name="image" rules={validationErr} className="item">
     <input type="file" onChange={handleFileChange}/>
     </Form.Item>
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
