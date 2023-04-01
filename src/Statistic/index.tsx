import React from "react";
import s from "./style.module.scss";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import StatisticTable from "./components/StatisticTable";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  achievments: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Имя игрока",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Рейтинг",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Достижения",
    key: "achievments",
    dataIndex: "achievments",
    render: (_, { achievments }) => (
      <>
        {achievments.map((achievment) => {
          const test = 123;
          return <Tag key={achievment}>{achievment.toUpperCase()}</Tag>;
        })}
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    achievments: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    achievments: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    achievments: ["cool", "teacher"],
  },
];

const Statistic: React.FC = () => {
  return (
    <div className={s.statisticContainer}>
      {/* <Table columns={columns} dataSource={data} /> */}
      <StatisticTable />
    </div>
  );
};

export default Statistic;
