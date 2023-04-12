export enum PlayerTypes {
  NAME = 'name',
  RATE = 'rate',
  ACHIEVEMENTS = 'achievements',
  ID = 'id'
}

export interface IAchievment {
  name: string;
}

export interface IPlayerData {
  name: string;
  rate: number | string;
  achievements: IAchievment[];
  id: number | string;
}
