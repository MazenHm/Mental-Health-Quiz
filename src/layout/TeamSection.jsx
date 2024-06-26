import React from "react";
import "../styles/TeamSection.css";
const TeamSection = () => {
  return (
    <div className="team-sec">
      <div className="d-flex justify-content-center gap-5">
        <div className="team-img">
          <img src="./assets/photo/45.webp" alt="" height="500" width="500" />
        </div>
        <div className="d-flex align-tems-center justify-content-center gap-3 flex-column">
          <h1>شكون أحنا ؟ و شنية أهدافنا ؟</h1>
          <p>
            "شكون أحنا و شنوة أهدافنا؟ أحنا مجموعة من طلبة سنة ثالثة في هندسة
            الإعلامية بالمدرسة الخاصة للتقنيات في سوسة. في إطار مشروع اجتماعي
            وثقافي، عملنا شراكة مع منظمة لتنظيم يوم توعوي وترفيهي للأولياء
            والمدرسين والتلاميذ بمدرسة الرحبة بالقيروان. كما قمنا بتأسيس هذا
            الموقع اللي يمكننا من الكشف على المشاكل النفسية."
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
