import React from 'react';
import './modalMobileStyle.css'

const ModalMobile = ({ children, visible, setVisible, title }) => {
  if (visible) {
    document.body.classList.add('no-scroll')
  }

  return (
    <div className={visible ? 'modal-mobile show' : 'modal-mobile hide'} onClick={() => setVisible(false)}>
      <div
        className="my-modal-content"
        style={title === 'Авторизация' ? { height: '320px' } : { height: '545px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="btn-modal-close" onClick={() => setVisible(false)}></div>
        <div className="modal-content-divider"></div>
        <h4 className="modal-mobile-title">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default ModalMobile;