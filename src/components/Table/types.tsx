export type IColumnRowData = {
  id: number | string;
  rowData: string | number | JSX.Element;
};

export interface ITableColumn {
  title: string;
  columnRowsData: IColumnRowData[];
}
