import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "./style.module.scss";
const Instructions = ({ examData, setView, startTimer }) => {
  const navigate = useNavigate();
  return (
    <div className={styled.Instructions_body}>
      <h1>İmtahan Təlimatları</h1>
      <ol className={styled.gradient_list}>
        <li>İmtahan müddəti {examData.duration} dəqiqədir.</li>
        <li>
          İmtahan {examData.duration} dəqiqədən sonra avtomatik olaraq
          sonlanacaq.
        </li>
        <li>Cavabı təsdiqlədikdən sonra variantı dəyişə bilməzsiniz.</li>
        <li>İmtahan müddətində səhifəni yeniləməyin.</li>
        <li>
          Suallar arasında <strong>"Əvvəlki"</strong> və{" "}
          <strong>"Növbəti"</strong> buttonları vasitəsi ilə keçid edə
          bilərsiniz.
        </li>
        <li>
          İmtahandı ümumi sualların sayı <strong>{examData.totalMarks}</strong>.
        </li>
        <li>
          İmtahandan keçmək üçün yazılmalı olan minimum sual sayı{" "}
          <strong>{examData.passingMarks}</strong>.
        </li>
      </ol>
      <div className={styled.btn_body}>
        <button onClick={() => navigate(-1)}>Legv et</button>
        <button onClick={() => {
          startTimer();
          setView("questions")
        }}>İmtahana Başla</button>
      </div>
    </div>
  );
};

export default Instructions;
