import React from "react";
import "../styles/Result.css";
import Shapes2 from "./Shapes2";
const Result = ({ result }) => {
  return (
    <div className="result">
      <div className="d-flex align-items-center justify-content-center flex-column mt-4">
        <h1 className="r-title">شكرا لإكمال اختبار الصحة النفسية للأطفال </h1>
        <h5 className="r-paragraph">
          بناءً على الإجابات التي قدمتها ، {result}. ومع ذلك ، إذا كنت لا تزال
          قلقًا ، فلا تتردد في التسجيل المسبق لطفلك وإحضاره للفحص. لاختيار مركز
          الخدمات العائلية والإرشاد لطفلك ، انقر فوق الزر "ابدأ" أدناه.
        </h5>
        <a target="_blank" rel="noopener noreferrer"  href="https://www.med.tn/medecin/pedopsychiatre">
          <button className="r-btn">إبدأ الآن</button>
        </a>
      </div>
      <Shapes2 />
    </div>
  );
};

export default Result;
