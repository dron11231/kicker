import React from "react";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import s from "./style.module.scss";

const playersStatistic = [
  {
    name: "Андрей",
    rate: 800,
    achievments: [
      "Достижение1",
      "Достижение2",
      "Достижение3",
      "Достижение4",
      "Достижение5",
      "Достижение6",
      "Достижение7",
      "Достижение1",
      "Достижение2",
      "Достижение3",
      "Достижение4",
      "Достижение5",
      "Достижение6",
      "Достижение7",
    ],
    id: 1,
  },
  {
    name: "Илья",
    rate: 800,
    achievments: ["Достижение1", "Достижение2"],
    id: 2,
  },
  {
    name: "Саша",
    rate: 800,
    achievments: ["Достижение1", "Достижение2"],
    id: 3,
  },
  {
    name: "Юра",
    rate: 800,
    achievments: ["Достижение1", "Достижение2"],
    id: 4,
  },
];

const StatisticTable: React.FC = () => {
  return (
    <div className={s.statisticTable}>
      <TableHeader titles={["Имя игрока", "Рейтинг", "Достижения"]} />
      {playersStatistic.map((player) => (
        <TableRow key={player.id} playerData={player} />
      ))}
    </div>
  );
};

export default StatisticTable;
