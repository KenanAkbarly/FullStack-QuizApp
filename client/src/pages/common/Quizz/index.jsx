import {message} from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ShowLoading,HideLoading} from '../../.././redux/loaderSlice/loaderSlice'
import {getAllExams} from '../../../apicalls/exmas'
import PageTitle from '../../../components/PageTitle'
import styled from './style.module.scss'
import {useNavigate} from 'react-router-dom'
const Quizz = () => {
  const [exams, setExams] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.users);
  const getExams = async () =>{
    try {
      dispatch(ShowLoading());
      const response = await getAllExams();
      if(response.success){
        setExams(response.data);
      }else{
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message);
    }
  }
  useEffect(()=>{
   getExams();
  },[])
  return (
    <div>
      <div className={styled.container}>
      <div className={styled.header_text}>
     <PageTitle title={
        `Salam  ${user? user.name:''} , Quizlet Portalına Xoş Gəlmisən.`
      }/>
     </div>
     <div>
      <input type="text" />
     </div>
     <div className={styled.card_body}>
      {
       exams && exams.map((exam) =>{
          return (
            <div key={exam._id} className={styled.card}>
            <h1>{exam.name}</h1>
             <p className={styled.category}>
               Kategorya : {exam.category}
             </p>
             <p className={styled.totalMark}>
               Maximum nəticə : {exam.totalMarks}
             </p>
             <p className={styled.passingMark}>
             Minimum nəticə : {exam.passingMarks}
             </p>
             <p className={styled.duration}>
               Müddət : {exam.duration}
             </p>
             <div className={styled.btn_body}>
               <button onClick={()=> navigate(`/user/write-exam/${exam._id}`)}>İmtahana Başla</button>
             </div>
           </div>
          )
        })
      }
      
       <div  className={styled.card}>
            <h1>JavaScript Basics</h1>
             <p className={styled.category}>
               Kategorya : 
             </p>
             <p className={styled.totalMark}>
               Maximum nəticə :
             </p>
             <p className={styled.passingMark}>
             Minimum nəticə : 
             </p>
             <p className={styled.duration}>
               Müddət : 
             </p>
             <div className={styled.btn_body}>
               <button >İmtahana Başla</button>
             </div>
           </div>
       <div  className={styled.card}>
            <h1>JavaScript Basics</h1>
             <p className={styled.category}>
               Kategorya : 
             </p>
             <p className={styled.totalMark}>
               Maximum nəticə :
             </p>
             <p className={styled.passingMark}>
             Minimum nəticə : 
             </p>
             <p className={styled.duration}>
               Müddət : 
             </p>
             <div className={styled.btn_body}>
               <button >İmtahana Başla</button>
             </div>
           </div>
     </div>
      </div>
     

    </div>
  )
}

export default Quizz