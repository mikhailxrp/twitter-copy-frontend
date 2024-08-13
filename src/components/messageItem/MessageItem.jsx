import React, { useState } from 'react';
import arrow from '../../assets/img/icon/arrow.svg'
import heart from '../../assets/img/icon/heart.svg'
import download from '../../assets/img/icon/download.svg'
import './MessageItemStyle.css'

const MessageItem = ({ post }) => {
  return (
    <div className='message-item'>
      <div className="message-item-top">
        <div className="message-item-img">
          <img src={post.avatar} alt="user" />
        </div>
        <div className="message-item-wrapper-top">
          <div className='item-name-wrapper'>
            <div className="user-name">{post.name}</div>
            <div className="user-nikname">{post.nik_name}</div>
          </div>
          <div className="item-message-time">
            {post.post_time}
          </div>
        </div>
      </div>
      <div className="message-content mt-2">
        {post.content}
        <span className="user-content-image mt-2">
          <img src={post.image} alt="" />
        </span>
      </div>
      <div className="message-item-bottom mt-3">
        <div className="message-item-wrapper-bottom">
          <div className="message-item-inner-bottom">
            <div className='message-item-bottom-img'>
              <img src={arrow} alt="arrow" />
            </div>
            <div className='message-item-bottom-text' >21</div>
          </div>

          <div className="message-item-inner-bottom">
            <div className='message-item-bottom-img'>
              <img src={heart} alt="heart" />
            </div>
            <div className='message-item-bottom-text' >200</div>
          </div>

          <div className="message-item-inner-bottom">
            <div className='message-item-bottom-img'>
              <img src={download} alt="download" />
            </div>
            <div className='message-item-bottom-text' >21</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;