import React from "react";
import "../styles/TestSection.css";
import { Link } from "react-router-dom";
const TestSection = () => {
  return (
    <div className="test-sec">
      <div className="test-box">
        <div className="test-img">
          <div className="shapex"></div>
          <img src="./assets/photo/site.jpg" alt="Test" />
        </div>
        <div className="test-text">
          <h1>قم بإختبار الصحّة النفسية الآن</h1>
          <p>
            الفحص عبر الإنترنت هو من أسرع وأسهل الطرق لتحديد إذا كنت تعاني من
            أعراض حالة صحية نفسية. يمكن أن يوفر لك هذا الفحص الأولي نظرة سريعة
            على حالتك ويساعدك على اتخاذ الخطوات الأولى نحو العلاج. الأمراض
            النفسية، كيف الاكتئاب أو القلق، هي حقيقية، شائعة ويمكن علاجها.
            العديد من الناس يواجهون هذه الحالات ويستطيعون التعافي بفضل العلاج
            والدعم المناسبين. تذكر أن التعافي ممكن، وهناك موارد ومختصون جاهزون
            لمساعدتك في كل خطوة.
          </p>
          <Link to="/quiz">
            <button className="btn-test">
              <i class="fas fa-arrow-left"></i>
              أبدا الإختبار الآن
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestSection;
