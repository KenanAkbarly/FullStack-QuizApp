import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../apicalls/users'
import { useDispatch, useSelector } from 'react-redux'
import { SetUser } from '../../redux/usersSlice/usersSlice'
import { useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Navbar from '../Navbar/Index'
import Footer from '../.././components/Footer'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice/loaderSlice'
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
      onClick: () => navigate('/quizz'),
    },
    {
      title: "Nəticə",
      paths: ['/reports'],
      icon: <i className="ri-bar-chart-fill"></i>,
      onClick: () => navigate("/reports")
    },
    // {
    //   title: "Profil",
    //   paths: ['/profiles'],
    //   icon: <i className="ri-user-line"></i>,
    //   onClick: () => navigate("/profile")
    // },
    // {
    //   title: "Çıxış",
    //   paths: ['/logout'],
    //   icon: <i className="ri-logout-box-line"></i>,
    //   onClick: () => {
    //     localStorage.removeItem("token");
    //     navigate("/login")
    //   }
    // }

  ]
  const adminMenu = [
    {
      title: "Əsas Səhifə",
      paths: ['/quizz'],
      icon: <i className="ri-home-2-line"></i>,
      onClick: () => navigate('/quizz'),
    },
    {
      title: "Imtahanlar",
      paths: ['/admin/exams','/admin/exams/add'],
      icon: <i className="ri-file-list-line"></i>,
      onClick: () => navigate('/admin/exams'),
    },
    {
      title: "Nəticə",
      paths: ['/reports'],
      icon: <i className="ri-bar-chart-fill"></i>,
      onClick: () => navigate("/admin/reports")
    },
    // {
    //   title: "Profil",
    //   paths: ['/profiles'],
    //   icon: <i className="ri-user-line"></i>,
    //   onClick: () => navigate("/profile")
    // },
    // {
    //   title: "Çıxış",
    //   paths: ['/logout'],
    //   icon: <i className="ri-logout-box-line"></i>,
    //   onClick: () => {
    //     localStorage.removeItem("token");
    //     navigate("/login")
    //   }
    // }
  ]
  const getUserData = async () => {
    try {
      dispatch(ShowLoading())
      const response = await getUserInfo()
      dispatch(HideLoading())
      if (response.success) {
        dispatch(SetUser(response.data))
        if (response.data.isAdmin) {
          setMenu(adminMenu)
        } else {
          setMenu(userMenu)
        }
      } else {
        message.error(response.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }

  useEffect(() => {
    getUserData()
  },[])
  return (
    <>
    <Navbar menu = {menu}/>
      {children}
      <Footer/>
    </>

  )
}

export default ProtectedRoute