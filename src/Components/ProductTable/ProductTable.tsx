import React, { useEffect, useState } from "react";
import {
  Button, FloatButton, Popconfirm, Table,} from "antd";
import type { ColumnsType } from "antd/es/table";
import img from "../../Assets/Images/logo-color.png";
import "./ProductTable.scss";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteProduct, getAllProducts } from "../../Redux/Action/Action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  coverPhoto: string;
  price: number;
  description: string;
}

function ProductTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const datas = useSelector((state: any) => state.ecommerce.products);
  console.log("product table", datas);

  const addHandler = () => {
    navigate("/adminpanel/addproduct");
  };

  const deleteHandler=(id:number)=>{
    dispatch(deleteProduct(id));
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "product_name",
      key: "name",
    },
    {
      title: "CoverPhoto",
      dataIndex: "product_img",
      key: "coverPhoto",
      render: (coverPhoto: string) => (
        
        <img src={`http://192.168.1.69:8000/${coverPhoto}`} alt="Cover" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div>
          <Button
            onClick={() => {
              console.log("update product", record.id);
              navigate('/adminpanel/updateproduct',{
                state:{
                  id: record.id,
                }
              })
            }}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete product"
            description="Are you sure to delete this product?"
            onConfirm={()=>deleteHandler(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              // onClick={() => {
              //   dispatch(deleteProduct(record.id));
              // }}
            >
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getAllProducts(1,5));
  }, []);
  return (
    <div className="ProductTable-wrapper">
      <FloatButton icon={<PlusOutlined />} onClick={addHandler} />
      <Table columns={columns} dataSource={datas} />
    </div>
  );
}

export default ProductTable;
