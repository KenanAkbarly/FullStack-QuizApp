import React from 'react'
import PageTitle from '../../../.././components/PageTitle/index'
import styled from './style.module.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { GiDuration } from 'react-icons/gi';
const AddEditExams = () => {
  const formik = useFormik({
    initialValues: {
      examName: '',
      duration: '',
      category: '',
      maxMarks: '',
    },
    validationSchema: Yup.object({
      examName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        duration: Yup.string()
        .min(1, 'Must be 1 characters or more')
        .required('Required'),
        category: Yup.string()
        .min(1, 'Must be 1 characters or more')
        .required('Required'),
      
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
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
         id="examName"
         name="examName"
         type="text"
         placeholder='İmtahan adını daxil edin.'
        
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.examName}
       />
      </div>
       {formik.touched.examName && formik.errors.examName ? (
         <div>{formik.errors.examName}</div>
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
         <div>{formik.errors.duration}</div>
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
         <div>{formik.errors.category}</div>
       ) : null}
      </div>


      <div className={styled.inp_name_body}>
      <p className={styled.exam_name}>Imtahan kategoriyası</p>
      <div className={styled.inp_body}>
        <BiCategoryAlt/>
      <input
         id="maxMarks"
         name="maxMarks"
         type="number"
         placeholder='İmtahan kategoriyanını daxil edin.'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.maxMarks}
       />
      </div>
       {formik.touched.category && formik.errors.maxMarks ? (
         <div>{formik.errors.maxMarks}</div>
       ) : null}
      </div>
      
      
 
       
 
       <button type="submit">Submit</button>
     </form>
    </div>
    </div>
  )
}

export default AddEditExams