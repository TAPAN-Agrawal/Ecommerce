import React, { useEffect, useState } from "react";
import { Button, Pagination, Popconfirm, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./UserTable.scss";
import { deleteUser, getAllUsers } from "../../Redux/Action/Action";
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

function UserTable() {
  const users = useSelector((state: any) => state.ecommerce.users);
  const totalCount = useSelector((state: any) => state.ecommerce.totalCount);

  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "username",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Items",
      dataIndex: "items",
      key: "items",
    },
    {
      title: "BillAmount",
      dataIndex: "billamount",
      key: "billamount",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Popconfirm
          title="Delete user"
          description="Are you sure to delete this user?"
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
  };
  const pageHandler = (e: number) => {
    setPage(e);
  };
  const pageCalculator = Math.ceil(totalCount / 12) * 10;

  useEffect(() => {
    dispatch(getAllUsers(page, 12));
  }, [page]);

  return (
    <div className="UserTable-wrapper">
      <Table columns={columns} dataSource={users} pagination={false} />
      <Pagination
        defaultCurrent={1}
        total={pageCalculator}
        onChange={pageHandler}
      />
    </div>
  );
}

export default UserTable;
