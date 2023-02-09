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
const AddEditExams = () => {
  const formik = useFormik({
    initialValues: {
      examName: '',
      duration: '',
      category: '',
      maxMarks: '',
      minMarks: '',
    },
    validationSchema: Yup.object({
      examName: Yup.string()
        .max(15, 'İmtahan adı 15 simvoldan çox ola bilməz')
        .required('*Bu xananı doldurun!'),
        duration: Yup.string()
        .min(1, 'İmtahan vaxtı 1 dəqiqədən az ola bilməz')
        .required('*Bu xananı doldurun!'),
        category: Yup.string()
        .max(15, 'İmtahan kategoriyası 15 simvoldan çox ola bilməz')
        .required('*Bu xananı doldurun!'),
        maxMarks: Yup.string()
        .min(1, 'Maximum nəticə 1-dən az ola bilməz')
        .required('*Bu xananı doldurun!'),
        minMarks: Yup.string()
        .min(1, 'Minimum nəticə 1-dən az ola bilməz')
        .required('*Bu xananı doldurun!'),
      
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
         <div className={styled.require}>{formik.errors.examName}</div>
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
         id="maxMarks"
         name="maxMarks"
         type="number"
         placeholder='İmtahanda maximum nəticəni daxil edin.'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.maxMarks}
       />
      </div>
       {formik.touched.maxMarks && formik.errors.maxMarks ? (
         <div className={styled.require}>{formik.errors.maxMarks}</div>
       ) : null}
      </div>

      <div>
      <div className={styled.inp_name_body}>
      <p className={styled.exam_name}>Minimum nəticə</p>
      <div className={styled.inp_body}>
        <VscPass/>
      <input
         id="minMarks"
         name="minMarks"
         type="number"
         placeholder='Lazım olan minimum nəticəni daxil edin.'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.minMarks}
       />
      </div>
       {formik.touched.minMarks && formik.errors.minMarks ? (
         <div className={styled.require}>{formik.errors.minMarks}</div>
       ) : null}
      </div>
       <button type="submit">Əlavə et</button></div>
     </form>
    </div>
    </div>
  )
}

export default AddEditExams