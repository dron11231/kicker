import React from 'react';
import classNames from 'classnames';
import s from './style.module.scss';

export interface IButtonComponent extends Omit<IButtonProps, 'children'> {
  size?: SizeType;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  active?: boolean;
  children: React.ReactNode;
}

type SizeType = 'small' | 'medium' | 'large';

/**
 *  @param Button HTML Attributes
 *  @param size - SizeType
 *  @param icon - JSX.Element
 *  @param iconPosition - 'left' | 'right'
 *  @param active - boolean
 */

export const Button: React.FC<IButtonComponent> = (props) => {
  const {
    children,
    size = 'medium',
    type = 'button',
    active = false,
    className = '',
    icon,
    iconPosition = 'left',
    ...other
  } = props;

  const classList = classNames(
    s.button,
    !!icon && s[iconPosition],
    active && s.active,
    s[size],
    className
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classList} {...other}>
      {icon && <div className={classNames(s.icon, s[iconPosition])}>{icon}</div>}
      {children}
    </button>
  );
};
