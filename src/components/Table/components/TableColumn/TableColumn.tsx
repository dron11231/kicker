import React, { FC } from 'react';
import s from './style.module.scss';
import { IColumnRowData, ITableColumn } from 'components/Table/types';

interface IProps {
  column: ITableColumn;
  onRowClick?: (rowId: number | string) => void;
}

export const TableColumn: FC<IProps> = (props) => {
  const { column, onRowClick } = props;
  const { title, columnRowsData } = column;

  const handleClick = (rowId: number | string) => () => onRowClick(rowId);

  return (
    <div key={title} className={s.tableColumn}>
      <div className={s.columnTitle}>{title}</div>
      {columnRowsData.map((data: IColumnRowData) => (
        <div key={data.id} onClick={handleClick(data.id)} className={s.columnRow}>
          {data.rowData}
        </div>
      ))}
    </div>
  );
};
