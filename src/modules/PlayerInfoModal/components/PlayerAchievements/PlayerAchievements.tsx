import React, { FC } from 'react';
import { IAchievment } from 'common/Statistic/types';
import { ballImage } from 'Images';

import s from './style.module.scss';
import { Button } from 'components';

interface IProps {
  achievements: IAchievment[];
}

export const PlayerAchievements: FC<IProps> = (props) => {
  const { achievements } = props;

  return (
    <div className={s.achievementsList}>
      {achievements.map((achievement, index) => {
        return (
          <Button key={`${achievement}${index}`} className={s.achievement}>
            <img src={ballImage} width={20} height={20} />
            <span className={s.achievementText}>{achievement.name}</span>
          </Button>
        );
      })}
    </div>
  );
};
