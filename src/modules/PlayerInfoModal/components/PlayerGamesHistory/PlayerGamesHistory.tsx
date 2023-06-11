import React, { FC } from 'react';
import s from './style.module.scss';
import classNames from 'classnames';

export interface IGameResults {
  win: boolean;
  firstTeamScore: number;
  secondTeamScore: number;
  date?: Date;
}

interface IProps {
  gamesHistory: IGameResults[];
}

export const PlayerGamesHistory: FC<IProps> = (props) => {
  const { gamesHistory } = props;

  return (
    <div className={s.gamesList}>
      {gamesHistory.map((game, index) => {
        return (
          <div
            key={`${game}${index}`}
            className={classNames(s.game, game.win ? s.winGame : s.loseGame)}
          >
            {/* <img src={ballImage} width={20} height={20} /> */}
            <span className={s.gameText}>{game.win ? 'Победа' : 'Поражение'}</span>
          </div>
        );
      })}
    </div>
  );
};
