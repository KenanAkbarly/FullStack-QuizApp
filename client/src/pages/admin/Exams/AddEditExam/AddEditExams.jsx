import React from 'react'
import PageTitle from '../../../.././components/PageTitle/index'
import styled from './style.module.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
const AddEditExams = () => {
  const formik = useFormik({
    initialValues: {
      examName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      examName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={styled.addExam_body}>
    <div className={styled.addExam_text}>
        <PageTitle title='Add Exam'/>
    </div>
    <div className={styled.form_body}>
    <form onSubmit={formik.handleSubmit}>
      <div className={styled.inp_name_body}>
      <p>Imtahan adı</p>
      <div className={styled.inp_body}>
      <input
         id="examName"
         name="examName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.examName}
       />
      </div>
       {formik.touched.examName && formik.errors.examName ? (
         <div>{formik.errors.examName}</div>
       ) : null}
      </div>
      
 
       
 
       <button type="submit">Submit</button>
     </form>
    </div>
    </div>
  )
}

export default AddEditExams