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
} from "../../Redux/Action/Action";
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
  const totalCount = useSelector((state: any) => state.ecommerce.totalCount)

  const datas = useSelector((state: any) => state.ecommerce.products);
  const [page, setPage] = useState<number>(1);

  const addHandler = () => {
    navigate("/adminpanel/addproduct");
  };

  const deleteHandler = (id: number) => {
    dispatch(deleteProduct(id));
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
          src={`http://192.168.1.69:8000/${coverPhoto}`}
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
          style={{backgroundColor:"#279EFF",margin:"1rem"}}
            onClick={() => {
              navigate("/adminpanel/updateproduct", {
                state: {
                  id: record.id,
                },
              });
            }}
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

  const pageCalculator =  Math.ceil(totalCount/8)*10
  useEffect(() => {
    dispatch(cleanAllProduct());
  }, []);
  useEffect(() => {
    dispatch(getAllProducts(page, 8, null, null));
  }, [page]);
  return (
    <>
      {datas.length !== 0 ? (
        <div className="ProductTable-wrapper">
          <FloatButton icon={<PlusOutlined />} onClick={addHandler} />
          <Table columns={columns} dataSource={datas} pagination={false} />
          <Pagination defaultCurrent={1} total={pageCalculator} onChange={pageHandler} />
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
