import React, { useEffect, useState } from "react";
import { Button, Pagination, Popconfirm, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./AdminList.scss";
import { deleteUser, getAllAdmin, getAllUsers } from "../../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface DataType {
  key: string;
  serialno?: string;
  name: string;
  email: string;
  items: number;
  billamount: number;
}

function AdminList() {
  const users = useSelector((state: any) => state.ecommerce.users);
  const totalCount = useSelector((state: any) => state.ecommerce.totalCount);

  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const columns: ColumnsType<DataType> = [
    {
      key: "1",
      title: "Name",
      dataIndex: "username",
    },
    {
      key: "2",
      title: "Email",
      dataIndex: "email",
    },
    
    {
      key: "5",
      title: "Action",
      render: (record) => (
        <Popconfirm
          title="Delete admin"
          description="Are you sure to delete this admin?"
          onConfirm={() => deleteHandler(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const deleteHandler = (id: number) => {
    dispatch(deleteUser(id));
    setTimeout(() => {
      if (users.length === 1 && page > 1) {
        setPage(page - 1);
      }
    }, 1000);
    const pageCalculator = Math.ceil(totalCount / 8) * 10;
  };
  const pageHandler = (e: number) => {
    setPage(e);
  };
  const pageCalculator = Math.ceil(totalCount / 12) * 10;

  useEffect(() => {
    dispatch(getAllAdmin(page, 12));
  }, [page]);

  return (
    <div className="UserTable-wrapper">
      <Table
        columns={columns}
        dataSource={users}
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
  );
}

export default AdminList;
