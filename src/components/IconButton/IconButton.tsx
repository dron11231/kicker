import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import s from './style.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const IconButton: FC<IProps> = (props) => {
  const { children, size = 'medium', className = '', active, type = 'button', ...other } = props;

  return (
    <button
      type={type}
      className={classNames(s.button, s[size], active && s.active, className)}
      {...other}
    >
      <div>{children}</div>
    </button>
  );
};

export default IconButton;
