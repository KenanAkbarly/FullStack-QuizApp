import React from "react";
import styled from "./style.module.scss";
const Instructions = ({ examData }) => {
  return (
    <div className={styled.Instructions_body}>
      <h1>İmtahan Təlimatları</h1>
      <ul className={styled.Instructions_items}>
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
      </ul>
    </div>
  );
};

export default Instructions;
