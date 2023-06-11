import React, { FC } from 'react';
import s from './style.module.scss';
import { IAchievment } from 'common/Statistic/types';
import { Modal } from 'components';
import achievImage from './achiev2.png';

interface IProps {
  achievement: IAchievment;
  onClose?: () => void;
}

export const AchievementInfoModal: FC<IProps> = (props) => {
  const { achievement, onClose } = props;

  return (
    <Modal onClose={onClose} title="Достижение">
      <div className={s.achievementInfoWrapper}>
        <div className={s.achievementInfoHeader}>
          <div className={s.line} />
          <img src={achievImage} width={100} height={100} />
          <div className={s.line} />
        </div>
        <div className={s.achievementModalBody}>
          <h3 className={s.achievementName}>{achievement.name.toUpperCase()}</h3>
          <span className={s.achievementDescription}>
            Забейте количество голов, превосходящее всех игроков за один сезон
          </span>
        </div>
      </div>
    </Modal>
  );
};
