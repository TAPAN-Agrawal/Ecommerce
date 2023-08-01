import React from "react";
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
import {  message} from 'antd';
// const props = {
//     headers: {
//       authorization: 'authorization-text',
//     },
//     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//     name: 'file',
//   };

function AddProduct() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Price">
          <Input />
        </Form.Item>
        <Form.Item label="Quantity">
          <InputNumber min={1} defaultValue={0} />
        </Form.Item>
        <Form.Item label="Category">
          <Radio.Group>
            <Radio value="Men"> Men </Radio>
            <Radio value="Women"> Women </Radio>
          </Radio.Group>
        </Form.Item>
        {/* <Upload {...props}
          onChange={(response) => {
            if (response.file.status !== 'uploading') {
              console.log(response.file, response.fileList);
            }
            if (response.file.status === 'done') {
              message.success(`${response.file.name} 
                               file uploaded successfully`);
            } else if (response.file.status === 'error') {
              message.error(`${response.file.name} 
                             file upload failed.`);
            }
          }}
        >
          <Button>Upload File</Button>
        </Upload> */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProduct;
