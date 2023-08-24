import React, { useEffect, useState } from "react";
import { Button, FloatButton, Pagination, Popconfirm, Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./ProductTable.scss";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  cleanAllProduct,
  deleteProduct,
  getAllProducts,
} from "../../../Redux/Action/Action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const totalCount = useSelector((state: any) => state.ecommerce.totalCount);

  const datas = useSelector((state: any) => state.ecommerce.products);
  const [page, setPage] = useState<number>(1);

  const addHandler = () => {
    let role = localStorage.getItem("role");
    if (role !== "0") {
      toast.error("You are not authorized");
    } else {
      navigate("/adminpanel/addproduct");
    }
  };

  const deleteHandler = (id: number) => {
    dispatch(deleteProduct(id));

   setTimeout(()=>{
    if (datas.length === 1 && page > 1) {
      setPage(page - 1);
    }
   },1000)
    const pageCalculator = Math.ceil(totalCount / 8) * 10;
  };

  const updateHandler = (record: any) => {
    let role = localStorage.getItem("role");
    if (role !== "0") {
      toast.error("You are not authorized");
    } else {
      navigate("/adminpanel/updateproduct", {
        state: {
          id: record.id,
        },
      });
    }
  };
  const pageHandler = (e: number) => {
    setPage(e);
  };

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
        <img
          src={`${process.env.REACT_APP_BASEURL}/${coverPhoto}`}
          alt="Cover"
          style={{ width: 50, height: 50 }}
        />
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
            style={{ backgroundColor: "#279EFF", margin: "1rem" }}
            onClick={() => updateHandler(record)}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete product"
            description="Are you sure to delete this product?"
            onConfirm={() => deleteHandler(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const pageCalculator = Math.ceil(totalCount / 8) * 10;

  useEffect(() => {
    dispatch(cleanAllProduct());
  }, []);
  useEffect(() => {
    dispatch(getAllProducts(page, 8, null, null));
  }, [page]);
  // console.log(datas);

  return (
    <>
      {datas.length !== 0 ? (
        
        <div className="ProductTable-wrapper">
          <FloatButton icon={<PlusOutlined />} onClick={addHandler} />
          <Table
            columns={columns}
            dataSource={datas}
            pagination={false}
            rowKey="id"
          />
          <Pagination
            current={page}
            defaultCurrent={1}
            total={pageCalculator}
            onChange={pageHandler}
            className="pagination"
          />
        </div>
      ) : (
        <Spin tip="loading..." size="large">
          {" "}
          <div className="content" />
        </Spin>
      )}
    </>
  );
}

export default ProductTable;
