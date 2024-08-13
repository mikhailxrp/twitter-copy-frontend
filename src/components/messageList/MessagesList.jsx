import React, { useEffect, useState } from 'react';
import MessageItem from '../messageItem/MessageItem';
import { fetchUsers, fetchPosts } from '../../stores/mainStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getTimeHasPassed } from '../../helpers';
import Loader from '../ui/loader/Loader'
import './MessageLIstStyle.css'

const MessagesList = ({ posts, users }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [postsUsers, setPostsUsers] = useState([])

  const getTimePost = (date) => {
    let now = Date.now();
    let messageDate = new Date(date).getTime();

    let newTime = now - messageDate;
    let timeMessage = newTime / (1000 * 60);
    return timeMessage;
  }

  const usersPosts = []
  let timeMessage = null

  const getAllUsersPosts = () => {
    if (posts.length) {
      setIsLoading(false)
      posts.map(postItem => {
        timeMessage = getTimePost(postItem.create_date_post);
        if (users.length !== 0) {
          users.map(user => {
            if (user.id === postItem.user_id) {
              postItem = {
                ...postItem,
                avatar: user.avatar !== null ? user.avatar : 'public/img/no-avatar.png',
                name: user.first_name,
                nik_name: user.nik_name,
                post_time: getTimeHasPassed(timeMessage)
              }
            }
          })
        }
        usersPosts.push(postItem)
      })
    }

  }

  useEffect(() => {

    getAllUsersPosts()

    if (usersPosts.length) {
      setPostsUsers([...usersPosts])
    }

  }, [posts, users])





  return (
    <>
      <div className="messages-inner mt-3">
        {isLoading && <Loader />}
        {!isLoading && postsUsers.map(post => {
          return <MessageItem key={post.id} post={post} />
        })}
      </div>
    </>
  );
};

export default MessagesList;