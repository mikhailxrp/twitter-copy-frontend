import React from 'react';
import './modalMobile.css'

const ModalMobile = (children, visible, setVisible) => {
  return (
    <div className='modal-mobile'>
      <div className="modal-content">
        <div className="modal-content-divider"></div>
      </div>
    </div>
  );
};

export default ModalMobile;