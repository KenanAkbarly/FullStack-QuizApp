import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../apicalls/users'
import { useDispatch, useSelector } from 'react-redux'
import { SetUser } from '../redux/usersSlice'
import { useNavigate } from 'react-router-dom'
// 2A5473
import styled from './style.module.scss'
import 'remixicon/fonts/remixicon.css'
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.users)
  const [menu, setMenu] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const userMenu = [
    {
      title: "Əsas Səhifə",
      paths: ['/quizz'],
      icon: <i className="ri-home-2-line"></i>,
      onClick : ()=> navigate('/quizz'),
    },
    {
      title: "Nəticə",
      paths: ['/reports'],
      icon: <i className="ri-bar-chart-fill"></i>,
      onClick : () => navigate("/reports")
    },
    {
      title: "Profil",
      paths: ['/profiles'],
      icon: <i className="ri-user-line"></i>,
      onClick : () => navigate("/profile")
    },
    {
      title: "Çıxış",
      paths: ['/logout'],
      icon: <i className="ri-logout-box-line"></i>,
      onClick : () => {
        localStorage.removeItem("token");
        navigate("/login")
      }
    }

  ]
  const adminMenu = [

  ]
  const getUserData = async () => {
    try {
      const response = await getUserInfo()
      if (response.success) {
        dispatch(SetUser(response.data))
        if(response.data.isAdmin){
          setMenu(adminMenu)
        }else{
          setMenu(userMenu)
        }
      } else {
        message.error(response.message)
      }
    } catch (error) {
      message.error(error.message)
    }
  }
  useEffect(() => {
    getUserData()
  }, [])
  return (
    <div className={styled.navbar}>
      <div className={styled.container}>
      <div onClick={()=> navigate('/quizz')} className={styled.navbar_left}>
      <img src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-black-quill-feather-pen-with-writing-line-vector-logo-design-png-image_1840025.jpg" alt="" />
      <h1>Quizlet</h1>
      </div>
      <div className={styled.navbar_right}>
       
          {
            menu.map((item,index)=>{
              return <div key={index}>
                <p className={styled.items} onClick={()=> item.onClick()}>{item.icon} <span>{item.title}</span></p>
              </div>
            })
          }
       
        <div>
          <p>{user?.name}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProtectedRoute