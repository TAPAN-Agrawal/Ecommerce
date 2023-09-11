import React, { useEffect, useState } from "react";
import { Button, Pagination, Popconfirm, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./UserTable.scss";
import { deleteUser, getAllUsers } from "../../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastMsg } from "../../../constants/constant";

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
      key: "3",
      title: "Items",
      dataIndex: "total_purchase",
    },
    {
      key: "4",
      title: "BillAmount",
      dataIndex: "total_payment",
    },
    {
      key: "5",
      title: "Action",
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
    let role = localStorage.getItem("role");
    if (role !== "0") {
      toast.error(`${toastMsg.unauthorized}`);
    } else {
      dispatch(deleteUser(id));
      setTimeout(() => {
        if (users.length === 1 && page > 1) {
          setPage(page - 1);
        } else {
          if (totalCount % 12 === 1) {
            dispatch(getAllUsers(page, 12));
          }
        }
      }, 1000);
    }
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
        showSizeChanger={false}
      />
    </div>
  );
}

export default UserTable;
