import React from 'react';
import { Tabs } from 'antd';
import Statistic from '../../common/Statistic';

import s from './style.module.scss';

const Header: React.FC = () => {
  const tabsItems = [
    {
      label: 'Статистика',
      key: '1',
      children: <Statistic />
    },
    {
      label: 'Достижения',
      key: '2',
      children: 'Здесь будут достижения'
    }
  ];

  return (
    <header className={s.header}>
      <div className={s.headerTabs}>
        <Tabs defaultActiveKey="1" centered items={tabsItems}></Tabs>
      </div>
    </header>
  );
};

export default Header;
