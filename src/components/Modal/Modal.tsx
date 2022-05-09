import { FC } from 'react';
import s from './Modal.module.css';
import ReactDOM from 'react-dom';

const modalRootElement = document.querySelector('#modal') as HTMLDivElement;

interface IModal {
  modal: boolean;
}

const refreshPage = () => {
  window.location.reload();
};

const Modal: FC<IModal> = ({ modal }) => {
  return ReactDOM.createPortal(
    <div>
      {modal && (
        <div className={s.modalContainer}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <h1>GAME OVER :(</h1>
            <button onClick={() => refreshPage()}>Restart</button>
          </div>
        </div>
      )}
    </div>,
    modalRootElement
  );
};

export default Modal;
