import React from 'react';
import ReactDOM from 'react-dom';
import s from './stlye.module.scss';
import { Button } from '..';

interface IModalProps {
  title: string;
  children?: JSX.Element;
  onClose?: () => void;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { title, children, onClose } = props;

  const modal = (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <div className={s.modalHeader}>
          <h2 className={s.modalTitle}>{title}</h2>
        </div>
        <div className={s.modalBody}>{children}</div>
        <Button onClick={onClose} className={s.closeButton}>
          Закрыть
        </Button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
};
