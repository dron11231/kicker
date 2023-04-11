export enum PlayerTypes {
  NAME = 'name',
  RATE = 'rate',
  ACHIEVMENTS = 'achievments',
  ID = 'id'
}

export type Player = Record<string, string | string[] | number>;

export interface IPlayerData extends Player {
  name: string;
  rate: number | string;
  achievments: string[];
  id: number | string;
}
