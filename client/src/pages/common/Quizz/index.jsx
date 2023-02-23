import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ShowLoading,
  HideLoading,
} from "../../.././redux/loaderSlice/loaderSlice";
import { getAllExams } from "../../../apicalls/exmas";
import PageTitle from "../../../components/PageTitle";
import styled from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { toggleDarkMode } from "../../../redux/darkModeSlice/darkModeSlice";
const Quizz = () => {
  const [exams, setExams] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [examName, setExamName] = useState("");
  const {mode} = useSelector((state)=> state.darkMode)
  const handleChange = (event) => {
    setExamName(event.target.value);
  };
  const getExams = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getAllExams();
      if (response.success) {
        setExams(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  useEffect(() => {
    getExams();
  }, []);
  return (
    <div className={mode? styled.quizz_body: styled.dark_quizz_body}>
      <div className={styled.container}>
        <div className={styled.header_text}>
          <PageTitle
            title={`Salam  ${
              user ? user.name : ""
            } , Quizlet Portalına Xoş Gəlmisən.`}
          />
          <button onClick={()=> dispatch(toggleDarkMode())}>click</button>
        </div>
        <div className={styled.search_filter}>
          <div className={styled.search}>
            <FiSearch />
            <input
              value={examName}
              onChange={handleChange}
              placeholder="Imtahan axtar..."
              type="text"
            />
          </div>
        </div>
        <div className={styled.card_body}>
          {exams &&
            exams
              .filter((exam) => {
                if (examName === "") {
                  return exam;
                } else if (
                  exam.name.toLowerCase().includes(examName.toLocaleLowerCase())
                ) {
                  return exam;
                }
              })
              .map((exam) => {
                return (
                  <div key={exam._id} className={styled.card}>
                    {/* <div className={styled.card_logo}>
                    <img src="https://dev-jobs-site.netlify.app/assets/logos/officelite.svg" alt="" />
                    </div> */}
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
                      Müddət : {exam.duration} dəqiqə
                    </p>
                    <div className={styled.btn_body}>
                      <button
                        onClick={() => navigate(`/user/write-exam/${exam._id}`)}
                      >
                        İmtahana Başla
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Quizz;
