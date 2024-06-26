import React, { useState } from "react";
import "../styles/Gallery.css";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      title: "*تسليم الجوائز*",
      height: "420",
      src: "./assets/photo/11.jpg",
      description:
        "عودة إلى حدثنا الوقائي حول اضطرابات التعلم لدى الأطفال في المدرسة الابتدائية ابن الجزّار بالقيروان. كان لنا الشرف باستقبال ممثلين عن وزارة الأسرة والطفولة وكبار السن وكذلك خبراء في علم نفس الطفولة. تضمن الحدث ورشات تفاعلية وجلسات توعية للأولياء والمعلمين، مسلطين الضوء على استراتيجيات فعالة لمساعدة الأطفال على تجاوز صعوبات التعلم لديهم.",
    },
    {
      title: "*صورة لنا رفقة مسئولي الجمعية",
      height: "420",
      src: "./assets/photo/12.jpg",
      description:
        "عودة إلى حدثنا الوقائي حول اضطرابات التعلم لدى الأطفال في المدرسة الابتدائية ابن الجزّار بالقيروان. كان لنا الشرف باستقبال ممثلين عن وزارة الأسرة والطفولة وكبار السن وكذلك خبراء في علم نفس الطفولة. تضمن الحدث ورشات تفاعلية وجلسات توعية للأولياء والمعلمين، مسلطين الضوء على استراتيجيات فعالة لمساعدة الأطفال على تجاوز صعوبات التعلم لديهم.",
    },
    {
      title: "ورشة تثقيفية للأولياء",
      height: "420",
      src: "./assets/photo/13.jpg",
      description:
        "عودة إلى حدثنا الوقائي حول اضطرابات التعلم لدى الأطفال في المدرسة الابتدائية ابن الجزّار بالقيروان. كان لنا الشرف باستقبال ممثلين عن وزارة الأسرة والطفولة وكبار السن وكذلك خبراء في علم نفس الطفولة. تضمن الحدث ورشات تفاعلية وجلسات توعية للأولياء والمعلمين، مسلطين الضوء على استراتيجيات فعالة لمساعدة الأطفال على تجاوز صعوبات التعلم لديهم.",
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <div className="gallery">
      <h1>معرض الصور</h1>
      <div className="gallery-content">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <div className="white-box">
            <h3>{currentItem.title}</h3>
            <p>{currentItem.description}</p>
          </div>
          <div className="navigation">
            <button onClick={handlePrevious}>
              <i class="fas fa-arrow-left"></i>
            </button>
            <button onClick={handleNext}>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="img-gal">
          <img
            src={currentItem.src}
            height={currentItem.height}
            alt="Gallery item"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
