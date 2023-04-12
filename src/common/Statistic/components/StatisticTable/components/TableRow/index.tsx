import { Tag } from 'antd';
import React from 'react';
import { IPlayerData, PlayerTypes } from '../../../../types';
import s from './style.module.scss';

interface ITableRowProps {
  itemData: IPlayerData;
}

const TableRow: React.FC<ITableRowProps> = (props) => {
  const { itemData } = props;

  const rowItems = Object.keys(itemData).filter((item) => item !== PlayerTypes.ID);
  const playerAchievements = itemData.achievements.map((achievement) => (
    <Tag className={s.achievment} key={achievement.name}>
      {achievement?.name}
    </Tag>
  ));

  return (
    <div className={s.row}>
      {rowItems.map((rowItem, index) => (
        <div key={index} className={s.rowItem}>
          {rowItem === PlayerTypes.ACHIEVEMENTS ? (
            playerAchievements
          ) : (
            <span className={s.itemData}>{`${itemData[rowItem]}`}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
