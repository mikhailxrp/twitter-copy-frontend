import React from 'react';

const TagsBlock = () => {
  return (
    <div className='tags-block'>
      <h5 className="tags-block-title">Актуальные темы</h5>
      <div className="tags-block-wrapper">
        <div className="tags-block-item">
          <p className="item-title">#javascript</p>
          <p className="item-count">
            <span>29 718 </span> сообщений
          </p>
        </div>

        <div className="tags-block-item">
          <p className="item-title">#python3</p>
          <p className="item-count">
            <span>29 718 </span> сообщений
          </p>
        </div>

        <div className="tags-block-item">
          <p className="item-title">#ruby</p>
          <p className="item-count">
            <span>29 718 </span> сообщений
          </p>
        </div>

        <div className="tags-block-item">
          <p className="item-title">#как_научиться_коду?</p>
          <p className="item-count">
            <span>29 718 </span> сообщений
          </p>
        </div>

        <div className="tags-block-item">
          <p className="item-title">#помогите_с_кодом</p>
          <p className="item-count">
            <span>29 718 </span> сообщений
          </p>
        </div>
      </div>
    </div>
  );
};

export default TagsBlock;