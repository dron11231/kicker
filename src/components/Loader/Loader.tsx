import React from 'react';
import s from './style.module.scss';

export const Loader = () => (
  <div className={s.loaderWrapper}>
    <span className={s.loader}>
      <div className={s.particles}>
        <span className={s.particle}></span>
        <span className={s.particle}></span>
        <span className={s.particle}></span>
      </div>
    </span>
  </div>
);
