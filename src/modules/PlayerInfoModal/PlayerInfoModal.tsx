import React, { FC, useState } from 'react';
import IconButton from 'components/IconButton/IconButton';

import { useSelector } from 'react-redux';
import { getPlayersStatistic } from 'redux/reducers/StatisticReducer/selectors';
import { avatarImage } from 'Images';
import { Button, Modal } from 'components';
import { TimeIcon } from 'Icons';

import s from './style.module.scss';
import { PlayerAchievements } from './components';
import classNames from 'classnames';

interface IProps {
  playerId: number | string;
  onClose: () => void;
}

export const PlayerInfoModal: FC<IProps> = (props) => {
  const { playerId, onClose } = props;

  const playersStatistic = useSelector(getPlayersStatistic);
  const [isAchievementsOpen, setAchievementsOpen] = useState(false);

  const playerData = playersStatistic.find((player) => player.id === playerId);

  const toggleAchievementsOpen = () => setAchievementsOpen((previousState) => !previousState);

  return (
    <Modal title="Карточка игрока" onClose={onClose}>
      <div className={s.playerInfoWrapper}>
        <div className={s.playerInfoHeader}>
          <div className={s.avatarWrapper}>
            <img src={avatarImage} className={s.avatarImage} width={50} height={50} />
          </div>
          <div className={s.basicPlayerInfo}>
            <span className={s.playerName}>{playerData.name}</span>
            <span className={s.playerRate}>Рейтинг: {playerData.rate}</span>
          </div>
        </div>
        <div
          className={classNames(s.playerInfoButtons, isAchievementsOpen && s.infoButtonsPadding)}
        >
          <Button onClick={toggleAchievementsOpen} className={s.achievementsButton}>
            {isAchievementsOpen ? 'Скрыть' : 'Показать'} достижения...
          </Button>
          <IconButton className={s.historyButton} title="Показать историю игр">
            <TimeIcon fill="#00bd00" />
          </IconButton>
        </div>
        {isAchievementsOpen && <PlayerAchievements achievements={playerData.achievements} />}
      </div>
    </Modal>
  );
};
