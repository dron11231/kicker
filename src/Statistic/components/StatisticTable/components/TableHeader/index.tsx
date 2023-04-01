import React from "react";
import s from "./style.module.scss";

interface ITableHeaderProps {
  titles: string[];
}

const TableHeader: React.FC<ITableHeaderProps> = (props) => {
  const { titles } = props;

  return (
    <div className={s.tableHeader}>
      {titles.map((title) => {
        return (
          <div key={title} className={s.titleContainer}>
            <span className={s.title}>{title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TableHeader;
