import React from 'react';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import s from './style.module.scss';
import { IPlayerData } from 'common/Statistic/types';

interface IStatisticTableProps {
  data: IPlayerData[];
}

const StatisticTable: React.FC<IStatisticTableProps> = (props) => {
  const { data } = props;
  return (
    <div className={s.statisticTable}>
      <TableHeader titles={['Имя игрока', 'Рейтинг', 'Достижения']} />
      {data.map((item) => (
        <TableRow key={item.id} itemData={item} />
      ))}
    </div>
  );
};

export default StatisticTable;
