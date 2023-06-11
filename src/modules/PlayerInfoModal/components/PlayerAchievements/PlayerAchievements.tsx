import React, { FC, useState } from 'react';
import { IAchievment } from 'common/Statistic/types';
import { ballImage } from 'Images';

import s from './style.module.scss';
import { Button } from 'components';
import { AchievementInfoModal } from 'modules/AchievementInfoModal/AchievementInfoModal';

interface IProps {
  achievements: IAchievment[];
}

export const PlayerAchievements: FC<IProps> = (props) => {
  const { achievements } = props;

  const [achievementOpenData, setAchievementOpenData] = useState(null);

  const handleClick = (achievement: IAchievment) => () => setAchievementOpenData(achievement);

  const handleCloseAchievementModal = () => setAchievementOpenData(null);

  return (
    <div className={s.achievementsList}>
      {achievements.map((achievement, index) => {
        return (
          <Button
            onClick={handleClick(achievement)}
            key={`${achievement}${index}`}
            className={s.achievement}
          >
            <img src={ballImage} width={20} height={20} />
            <span className={s.achievementText}>{achievement.name}</span>
          </Button>
        );
      })}
      {achievementOpenData && (
        <AchievementInfoModal
          onClose={handleCloseAchievementModal}
          achievement={achievementOpenData}
        />
      )}
    </div>
  );
};
