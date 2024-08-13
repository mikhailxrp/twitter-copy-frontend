import React from 'react';


const MyBtn = ({ children, classBtn, ...props }) => {
  return (
    <button {...props} className={classBtn}>
      {children}
    </button>
  );
};

export default MyBtn;