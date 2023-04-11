import { Tag } from 'antd';
import React from 'react';
import { IPlayerData } from '../../../../types';
import { PlayerTypes } from '../../../../types';
import s from './style.module.scss';

interface ITableRowProps {
  playerData: IPlayerData;
}

const TableRow: React.FC<ITableRowProps> = (props) => {
  const { playerData } = props;

  const rowItems = Object.keys(playerData).filter((item) => item !== PlayerTypes.ID);
  const playerAchievments = playerData.achievments.map((achievment) => (
    <Tag className={s.achievment} key={achievment}>
      {achievment}
    </Tag>
  ));

  return (
    <div className={s.row}>
      {rowItems.map((rowItem) => (
        <div key={playerData.id} className={s.rowItem}>
          {rowItem === PlayerTypes.ACHIEVMENTS ? (
            playerAchievments
          ) : (
            <span className={s.itemData}>{playerData[rowItem]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
