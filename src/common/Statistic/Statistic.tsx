import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatistic } from 'redux/thunks/statistic/getStatistic';
import { getIsLoading, getPlayersStatistic } from 'redux/reducers/StatisticReducer/selectors';
import { Table } from 'components';
import { IColumnRowData, ITableColumn } from 'components/Table/types';
import s from './style.module.scss';
import { PlayerInfoModal } from 'modules';

export const Statistic: React.FC = () => {
  const dispatch = useDispatch();

  const playersStatistic = useSelector(getPlayersStatistic);
  const isLoading = useSelector(getIsLoading);

  const [playerInfoId, setPlayerInfoId] = useState<number | string>(null);

  const statisticTableTitles = { name: 'Имя игрока', rate: 'Рейтинг игрока' };

  const statisticTitlesKeys = Object.keys(statisticTableTitles);

  const statisticTableColumns: ITableColumn[] = statisticTitlesKeys.map((titleKey) => {
    const title = statisticTableTitles[titleKey];

    const columnData: IColumnRowData[] = playersStatistic.reduce(
      (data, player) => [...data, { rowData: player[titleKey], id: player.id }],
      []
    );

    return { title: title, columnRowsData: columnData };
  });

  const handleClickPlayer = (playerId: number | string) => setPlayerInfoId(playerId);

  const handleClosePlayerInfoModal = () => setPlayerInfoId(null);

  useEffect(() => {
    dispatch(getStatistic());
  }, []);

  return (
    <div className={s.statisticContainer}>
      {!isLoading ? (
        <Table onRowClick={handleClickPlayer} columns={statisticTableColumns} />
      ) : (
        <span>loading...</span>
      )}
      {playerInfoId && (
        <PlayerInfoModal playerId={playerInfoId} onClose={handleClosePlayerInfoModal} />
      )}
    </div>
  );
};
