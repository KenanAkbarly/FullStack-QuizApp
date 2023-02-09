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
    <div>
    <form onSubmit={formik.handleSubmit}>
       <p>Imtahan adı</p>
      <div>
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
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
    </div>
    </div>
  )
}

export default AddEditExams