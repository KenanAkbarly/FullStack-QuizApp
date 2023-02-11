
import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from './style.module.scss'
import 'remixicon/fonts/remixicon.css'
import {Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import 'remixicon/fonts/remixicon.css'
const Index = ({menu}) => {
  const { user } = useSelector((state) => state.users)
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showModal = () => setModal(!modal);
  const navigate = useNavigate()
  const activeRoute = window.location.pathname
  const getIsActiveOrNot = (paths)=>{
      if(paths.includes(activeRoute)){
        return true
      }else{
        if(activeRoute.includes('/admin/exams/edit') && paths.includes('/admin/exams')){
          return true
        }
      }
      return false
  }
  return (
    <>
     <div className={styled.navbar}>
        <div className={styled.container}>
          <div onClick={() => navigate('/quizz')} className={styled.navbar_left}>
            <img src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-black-quill-feather-pen-with-writing-line-vector-logo-design-png-image_1840025.jpg" alt="" />
            <h1>Quizlet</h1>
          </div>
          <div className={styled.navbar_right}>
            {
              menu.map((item, index) => {
                return <div key={index} className={ `${ getIsActiveOrNot(item.paths) && styled.active_route}`}>
                  <p className={styled.items} onClick={() => item.onClick()}>{item.icon} <span>{item.title}</span></p>
                </div>
              })
            }
             <p onClick={showModal} className={modal? styled.modal_items: styled.items} >{user?.isAdmin? <i class="ri-admin-line"></i>:<i className="ri-user-line"></i> }<span>{user?.isAdmin? 'Admin':'User'}</span>

             <div className={modal? styled.active_modal : styled.none_modal}>
              <p className={styled.user_name}><i class="ri-emotion-happy-line"></i>{user?.name}</p>
              <p onClick={ () => {
      localStorage.removeItem("token");
        navigate("/login")
      }} className={styled.items}><i className="ri-logout-box-line"></i>Çıxış</p>   
             </div>
             </p>
          </div>
        </div>
      </div>
      <div className={styled.ham_menu}>

        <IconContext.Provider value={{ color: '#253858' }}>
          <div className={styled.hamburger_menu}>
            <div onClick={() => navigate('/quizz')} className={styled.ham_menu_navbar_left}>
              <img src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-black-quill-feather-pen-with-writing-line-vector-logo-design-png-image_1840025.jpg" alt="" />
              <h1>Quizlet</h1>
            </div>
            <Link to='#' className={styled.menu_bars}>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? styled.active : styled.nav_menu}>
            <ul className={styled.nav_menu_items} onClick={showSidebar}>
              <li className={styled.navbar_toggle}>
                <Link to='#' className={styled.menu_bars}>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {
                menu.map((item, index) => {
                  return <div key={index} className={styled.nav_text}>
                    <p className={styled.nav_items} onClick={() => item.onClick()}>{item.icon} <span>{item.title}</span></p>
                  </div>
                })
              }
              
              <p className={styled.nav_text}>
              <p onClick={ () => navigate("/profile")} className={styled.nav_items_user} >{user?.isAdmin? <i class="ri-admin-line"></i>:<i className="ri-user-line"></i> }<span>{user?.isAdmin? 'Admin':'User'}</span></p>
              </p>
              <p className={styled.nav_text}>
              <p onClick={ () => {
      localStorage.removeItem("token");
        navigate("/login")
      }} className={styled.nav_items_user}><i className="ri-logout-box-line"></i><span>Çıxış</span></p>
      </p>
            </ul>
          </nav>

        </IconContext.Provider>
      </div>
    </>
  )
}

export default Index