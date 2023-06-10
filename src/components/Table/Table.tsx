import React from 'react';
import s from './style.module.scss';
import { ITableColumn } from './types';
import { TableColumn } from './components';

interface IProps {
  columns: ITableColumn[];
  onRowClick?: (rowId: number) => void;
}

export const Table: React.FC<IProps> = (props) => {
  const { columns, onRowClick } = props;

  return (
    <div className={s.statisticTable}>
      {columns.map((column) => (
        <TableColumn onRowClick={onRowClick} key={column.title} column={column} />
      ))}
    </div>
  );
};
