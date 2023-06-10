import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import s from './style.module.scss';
import { useHistory } from 'react-router-dom';

export const Header: React.FC = () => {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;

  const tabsItems = [
    {
      label: 'Статистика',
      key: '/statistic'
    },
    {
      label: 'Достижения',
      key: '/achievements'
    }
  ];

  const switchTabHandler = (activeKey: string) => {
    history.push(activeKey);
  };

  useEffect(() => {
    if (pathname !== '/statistic' && pathname !== '/achievements') {
      switchTabHandler('/statistic');
    }
  }, []);

  return (
    <header className={s.header}>
      <div className={s.headerTabs}>
        <Tabs
          onChange={switchTabHandler}
          className={s.tabs}
          defaultActiveKey="/statistic"
          activeKey={pathname}
          centered
          items={tabsItems}
        ></Tabs>
      </div>
    </header>
  );
};
