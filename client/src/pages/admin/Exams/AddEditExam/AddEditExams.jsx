import {message} from "antd";
import React from 'react'
import PageTitle from '../../../.././components/PageTitle/index'
import styled from './style.module.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { GiDuration } from 'react-icons/gi';
import { SiVirustotal } from 'react-icons/si';
import { VscPass } from 'react-icons/vsc';
import { addExam } from '../../../../apicalls/exmas';
import {useNavigate} from 'react-router-dom'
const AddEditExams = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      duration: '',
      category: '',
      totalMarks: '',
      passingMarks: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'İmtahan adı 15 simvoldan çox ola bilməz')
        .required('*Bu xananı doldurun!'),
        duration: Yup.string()
        .min(1, 'İmtahan vaxtı 1 dəqiqədən az ola bilməz')
        .required('*Bu xananı doldurun!'),
        category: Yup.string()
        .max(15, 'İmtahan kategoriyası 15 simvoldan çox ola bilməz')
        .required('*Bu xananı doldurun!'),
        totalMarks: Yup.string()
        .min(1, 'Maximum nəticə 1-dən az ola bilməz')
        .required('*Bu xananı doldurun!'),
        passingMarks: Yup.string()
        .min(1, 'Minimum nəticə 1-dən az ola bilməz')
        .required('*Bu xananı doldurun!'),
      
    }),
    onSubmit: async values => {
       try{
        let response;
        response = await addExam(values);
        if(response.success) {
          message.success(response.message);
          navigate("/admin/exams")
        }else{
          message.error(response.message);
        }
       }catch (error){
        message.error(error.message);
       }
    },
  });
  return (
    <div className={styled.addExam_body}>
    <div className={styled.addExam_text}>
        <PageTitle title='İmtahan əlavə et'/>
    </div>
    <div className={styled.form_body}>
    <form onSubmit={formik.handleSubmit}>

      <div className={styled.inp_name_body}>
      <p className={styled.exam_name}>Imtahan adı</p>
      <div className={styled.inp_body}>
        <MdOutlineDriveFileRenameOutline/>
      <input
         id="name"
         name="name"
         type="text"
         placeholder='İmtahan adını daxil edin.'
        
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
       />
      </div>
       {formik.touched.name && formik.errors.name ? (
         <div className={styled.require}>{formik.errors.name}</div>
       ) : null}
      </div>

      <div className={styled.inp_name_body}>
      <p className={styled.exam_name}>Imtahan müddəti</p>
      <div className={styled.inp_body}>
        <GiDuration/>
      <input
         id="duration"
         name="duration"
         type="number"
         placeholder='İmtahan müddətin daxil edin.'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.duration}
       />
      </div>
       {formik.touched.duration && formik.errors.duration ? (
         <div className={styled.require}>{formik.errors.duration}</div>
       ) : null}
      </div>

      <div className={styled.inp_name_body}>
      <p className={styled.exam_name}>Imtahan kategoriyası</p>
      <div className={styled.inp_body}>
        <BiCategoryAlt/>
      <input
         id="category"
         name="category"
         type="text"
         placeholder='İmtahan kategoriyanını daxil edin.'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.category}
       />
      </div>
       {formik.touched.category && formik.errors.category ? (
         <div className={styled.require}>{formik.errors.category}</div>
       ) : null}
      </div>


      <div className={styled.inp_name_body}>
      <p className={styled.exam_name}>Maximum nəticə</p>
      <div className={styled.inp_body}>
        <SiVirustotal/>
      <input
         id="totalMarks"
         name="totalMarks"
         type="number"
         placeholder='İmtahanda maximum nəticəni daxil edin.'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.totalMarks}
       />
      </div>
       {formik.touched.totalMarks && formik.errors.totalMarks ? (
         <div className={styled.require}>{formik.errors.totalMarks}</div>
       ) : null}
      </div>

      <div>
      <div className={styled.inp_name_body}>
      <p className={styled.exam_name}>Minimum nəticə</p>
      <div className={styled.inp_body}>
        <VscPass/>
      <input
         id="passingMarks"
         name="passingMarks"
         type="number"
         placeholder='Lazım olan minimum nəticəni daxil edin.'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.passingMarks}
       />
      </div>
       {formik.touched.passingMarks && formik.errors.passingMarks ? (
         <div className={styled.require}>{formik.errors.passingMarks}</div>
       ) : null}
      </div>
       <button type="submit">Əlavə et</button></div>
     </form>
    </div>
    </div>
  )
}

export default AddEditExams