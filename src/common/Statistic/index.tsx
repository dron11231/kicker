import React, { useEffect } from 'react';
import StatisticTable from './components/StatisticTable';
import s from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistic } from 'redux/thunks/statistic/getStatistic';
import { getIsLoading, getPlayersStatistic } from 'redux/reducers/StatisticReducer/selectors';

const Statistic: React.FC = () => {
  const dispatch = useDispatch();

  const playersStatistic = useSelector(getPlayersStatistic);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(getStatistic());
  }, []);

  return (
    <div className={s.statisticContainer}>
      {/* <Table columns={columns} dataSource={data} /> */}
      {playersStatistic ? <StatisticTable data={playersStatistic} /> : <span>loading...</span>}
    </div>
  );
};

export default Statistic;
