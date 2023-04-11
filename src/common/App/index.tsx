import Header from 'components/Header';
import React from 'react';
import s from './style.module.scss';

const App: React.FC = () => {
  return (
    <div className={s.mainContainer}>
      <Header />
    </div>
  );
};

export default App;
