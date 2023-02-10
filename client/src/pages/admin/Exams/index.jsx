import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../../../components/PageTitle'
import styled from './style.module.scss'
const Exams = () => {
  const navigate = useNavigate();
  return (
    <div>
       <div className={styled.exams_header}>
       <PageTitle title="Exams" />

       <button className={styled.add_button} onClick={()=> navigate('/admin/exams/add')}>
        <i className='ri-add-line'></i>
        Imtahan əlavə et
       </button>
       
       </div>
    </div>
  )
}

export default Exams