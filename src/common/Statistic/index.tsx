import React, { useEffect } from 'react';
import StatisticTable from './components/StatisticTable';
import s from './style.module.scss';
import { useDispatch } from 'react-redux';
import { getStatistic } from 'redux/thunks/statistic/getStatistic';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  achievments: string[];
}

const Statistic: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistic());
  }, []);

  return (
    <div className={s.statisticContainer}>
      {/* <Table columns={columns} dataSource={data} /> */}
      <StatisticTable />
    </div>
  );
};

export default Statistic;
