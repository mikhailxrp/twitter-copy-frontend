import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/img/twitter-copy.svg'
import mainBg from '../../assets/img/cover-bg.jpeg'
import MyBtn from '../../components/ui/MyBtn/MyBtn';
import bgMobile from '../../assets/img/bg-mobile.png'
import MessagesList from '../../components/messageList/MessagesList'
import SidebarContainer from '../../components/sidebar/SidebarContainer';
import ModalMobile from '../../components/Modals/ModalMobile';
import RegistrationForm from '../../components/forms/RegistrationForm';
import FormLogin from '../../components/forms/FormLogin';
import { useDispatch, useSelector } from "react-redux";
import { register, login, fetchUsers, fetchPosts } from '../../stores/mainStateSlice';
import { swipe } from '../../helpers';
import { useResize } from '../../hooks/useresize';
import './mainLayout.css'


const MainLayout = () => {
  const {
    visibleStateRegister,
    visibleStateLogin,
    posts,
    users,
  } = useSelector(state => state.mainState)
  const [usersCount, setUsersCount] = useState(0)
  const [messageCount, setMessageCount] = useState(0)

  const dispatch = useDispatch()
  const windowWidth = useResize()

  const visibleRegister = (val) => {
    dispatch(register(val))
    document.body.classList.remove('no-scroll')
  }
  const visibleLogin = (val) => {
    dispatch(login(val))
    document.body.classList.remove('no-scroll')
  }

  const getAllUsersAndPosts = () => {
    dispatch(fetchUsers())
    dispatch(fetchPosts())
  }

  useEffect(() => {
    if (posts.length === 0 && users.length === 0) {
      getAllUsersAndPosts()
    }
    setMessageCount(posts.length)
    setUsersCount(users.length)
  }, [posts, users])


  useEffect(() => {
    if (windowWidth < 576) {
      swipe(visibleRegister, visibleStateRegister, visibleLogin, visibleStateLogin)
    } else {
      return;
    }
  })


  return (
    <>
      <div className='main-layout'>
        <header className='header'>
          <div className="header-top">
            <div className='header-top-img'>
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="header-content">
            <div className='header-content-wrapper'>
              <div className='header-content-logo'>
                <img src={logo} alt="logo" />
              </div>
              <h1 className="header-title text-center">
                Оставайся на связи
                с друзьями, даже когда их нет рядом
              </h1>
              <div className='header-wrapper-btn'>
                <MyBtn classBtn="btn-register btn btn-primary" onClick={() => visibleRegister(true)} >Зарегистрироваться</MyBtn>
                <MyBtn
                  classBtn="btn-login btn btn-outline-primary mt-2"
                  onClick={() => visibleLogin(true)}
                >
                  Войти
                </MyBtn>
              </div>
            </div>

            <div className="header-main-bg">
              <img src={mainBg} alt="" />
            </div>

            <div className="header-mobile-bg mt-4">
              <img src={bgMobile} alt="bg" />
            </div>
          </div>
        </header>

        <div className="header-counts">
          <div className="header-counts-item">
            <p className='count-item'>{usersCount}</p>
            <p>Пользователей <br /> зарегистрированно</p>
          </div>
          <div className="header-counts-item">
            <p className='count-item'>{messageCount}</p>
            <p>Сообщений <br /> написано</p>
          </div>
          <div className="header-counts-item">
            <p className='count-item'>58</p>
            <p>Написано <br /> сегодня</p>
          </div>
        </div>

        <main className='main'>
          <div className="main-list-container">
            <h2 className="last-messages-title mt-5">
              Последние сообщения
            </h2>

            <div className='message-list-container'>
              <MessagesList posts={posts} users={users} />
              <SidebarContainer />
              <div className="white-bottom-block"></div>
            </div>
          </div>
        </main>

        <Outlet />

        <footer>
          <div className="container">
            <h2 className="footer-title mt-5">
              Зарегистрируйтесь
              и узнайте обо всём первым
            </h2>
            <div className='mt-5 mb-5 footer-btn-wrapper'>
              <MyBtn
                classBtn="btn-register footer-btn-register btn btn-primary"
                onClick={() => visibleRegister(true)}
              >
                Зарегистрироваться
              </MyBtn>
              <MyBtn
                classBtn="btn-login footer-btn-login btn btn-outline-primary mt-2"
                onClick={() => visibleLogin(true)}
              >
                Войти
              </MyBtn>
            </div>
          </div>
        </footer>
        <ModalMobile title="Регистрация" visible={visibleStateRegister} setVisible={visibleRegister}>
          <RegistrationForm />
        </ModalMobile>
        <ModalMobile title="Авторизация" visible={visibleStateLogin} setVisible={visibleLogin}>
          <FormLogin />
        </ModalMobile>
      </div>
    </>
  );
};

export default MainLayout;