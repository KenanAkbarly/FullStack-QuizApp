import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getExamById } from "../../../apicalls/exmas";
import {
  HideLoading,
  ShowLoading,
} from "../../../redux/loaderSlice/loaderSlice";
import Instructions from "./Instructions";
import styled from "./style.module.scss";

const WriteExam = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const [examData, setExamData] = useState([]);
  const [view, setView] = useState("instructions");
  const [questions = [], setQuestions] = useState([]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [selectedOption = [], setSelectedOption] = useState({});
  const [result = {}, setResult] = useState({});

  const getExamData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getExamById({
        examId: params.id,
      });
      dispatch(HideLoading());
      if (response.success) {
        setExamData(response.data);
        setQuestions(response.data.questions);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
  const calculateResult = () => {
    let correctAnswer = [];
    let wrongAnswer = [];
    questions.forEach((question, index) => {
      if (question.correctOption === selectedOption[index]) {
        correctAnswer.push(question);
      } else {
        wrongAnswer.push(question);
      }
    });

    let verdict = "Təbriklər keçdiniz";
    if (correctAnswer.length < examData.passingMarks) {
      verdict = "Kəsildiniz";
    }
    setResult({
      correctAnswer,
      wrongAnswer,
      verdict,
    });

    setView("result");
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

        {view === "instructions" && (
          <Instructions examData={examData} setView={setView} />
        )}
        <div className={styled.writeExam}>
          {view === "questions" && (
            <div className={styled.question_body}>
              {/* <div className={styled.question_count}>
               
           
              </div> */}
              <div className={styled.question_option}>
                <h3>
                  {selectedQuestionIndex + 1}.{" "}
                  {questions[selectedQuestionIndex] &&
                    questions[selectedQuestionIndex].name}
                </h3>
                <div className={styled.option_body}>
                  {Object.keys(questions[selectedQuestionIndex].options).map(
                    (option, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedOption({
                              ...selectedOption,
                              [selectedQuestionIndex]: option,
                            });
                          }}
                        >
                          <p
                            className={`${
                              selectedOption[selectedQuestionIndex] === option
                                ? styled.Selectedoption
                                : styled.option
                            }`}
                          >
                            {option}:{" "}
                            {questions[selectedQuestionIndex].options[option]}
                          </p>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className={styled.next_previous_btns}>
                  {selectedQuestionIndex > 0 && (
                    <button
                      className={styled.previous_btn}
                      onClick={() => {
                        setSelectedQuestionIndex(selectedQuestionIndex - 1);
                      }}
                    >
                      Əvvəlki
                    </button>
                  )}
                  {selectedQuestionIndex < questions.length - 1 && (
                    <button
                      className={styled.next_btn}
                      onClick={() => {
                        setSelectedQuestionIndex(selectedQuestionIndex + 1);
                      }}
                    >
                      Növbəti
                    </button>
                  )}
                  {selectedQuestionIndex === questions.length - 1 && (
                    <button
                      className={styled.submit_btn}
                      onClick={() => {
                        calculateResult();
                      }}
                    >
                      Təsdiqlə
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styled.result_body}>
          {view === "result" && (
            <div className={styled.result_container}>
              <div className={styled.result_items}>
                <h1>Imtahan Nəticəsi</h1>
                <div className={styled.marks}>
                  <p>Umimi Sual : {examData.totalMarks}</p>
                  <p>Düzgün cavab sayı: {result.correctAnswer.length}</p>
                  <p>Yalnış cavab sayı: {result.wrongAnswer.length}</p>
                  <p>
                    Imtahandan keçmək üçün minimum nəticə:{" "}
                    {examData.passingMarks}
                  </p>
                  <p>Status:{result.verdict}</p>
                </div>
              </div>
              <div className={styled.lottie_animation}>
                {result.verdict === "Təbriklər keçdiniz" && (
                  <lottie-player
                    src="https://assets2.lottiefiles.com/packages/lf20_uu0x8lqv.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                )}
                 {result.verdict === "Kəsildiniz" && (
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_CJFDsxSINb.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          )}
              </div>
            </div>
          )}
         
        </div>
      </div>
    )
  );
};

export default WriteExam;
