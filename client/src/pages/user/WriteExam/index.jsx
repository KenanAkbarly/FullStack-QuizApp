import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getExamById } from '../../../apicalls/exmas';
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice/loaderSlice';
import Instructions from './Instructions';
import styled from './style.module.scss'
const WriteExam = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [examData, setExamData] = useState([]);
    const getExamData = async () => {
        try {
          dispatch(ShowLoading());
          const response = await getExamById({
            examId: params.id,
          });
          dispatch(HideLoading());
          if (response.success) {
            setExamData(response.data);
          } else {
            message.error(response.message);
          }
        } catch (error) {
          dispatch(HideLoading());
          message.error(error.message);
        }
      };
      useEffect(() => {
        if (params.id) {
          getExamData();
        }
      }, []);
  return (
   examData && (
   <div className={styled.writeExam_body}>
    <div className={styled.header_text}>
     <h1>{examData.name}</h1>
    </div>
    <Instructions
    examData={examData}
    />
    </div>
   )
  )
}

export default WriteExam