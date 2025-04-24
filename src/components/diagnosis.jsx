import React from "react";
import { useState } from "react";
import "../components/diagnosis.css";
import Data from "../components/diagnostics.json";
import 'aos';
import 'aos/dist/aos.css';

function diagnosis() {
 

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeButton, setActiveButton] = useState(1);

  const [diagnosis, setDiagnosis] = useState(Data[0].sections1);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };



  const handleButtonClick = (buttonNumber, e) => {
    e.preventDefault();
    setActiveButton(buttonNumber);
    // setCategory(e.target.value);

    if (buttonNumber === 1) {
        setDiagnosis(Data[0].sections1)  
    } else if (buttonNumber === 2) {
        setDiagnosis(Data[0].sections2)
    } else if (buttonNumber === 3) {
        setDiagnosis(Data[0].sections3)
    }else if (buttonNumber === 4) {
        setDiagnosis(Data[0].sections4)
    }else if (buttonNumber === 5) {
        setDiagnosis(Data[0].sections5)
    }else if (buttonNumber === 6) {
        setDiagnosis(Data[0].sections6)
    }else if (buttonNumber === 7) {
      setDiagnosis(Data[0].sections7)
  }
  };



  return (
    <div>
      <div className="row  types">
        <div className="col-lg-3 ">
          <div className="button-section">
            <button
              className={activeButton === 1 ? "active" : "btnn"}
              onClick={(e) => {
                handleButtonClick(1, e);
              }}
              value="one"
            >
              TMT
            </button>
            <button
              className={activeButton === 2 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(2, e)}
              value="two"
            >
              2D Echo
            </button>

            <button
              className={activeButton === 3 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(3, e)}
              value="three"
            >
              Vascular Doppler
            </button>
            <button
              className={activeButton === 4 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(4, e)}
              value="four"
            >
              Ultra Sonography
            </button>
            <button
              className={activeButton === 5 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(5, e)}
              value="five"
            >
              Bone Mineral Densitometry
            </button>
            <button
              className={activeButton === 6 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(6, e)}
              value="six"
            >
              X Ray
            </button>
            <button
              className={activeButton === 7 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(7, e)}
              value="six"
            >
              ECG
            </button>
          </div>
        </div>
        <div className="col-lg-8">
          { diagnosis && ( <div>
              {diagnosis.map((items,index) => {
                return (
                  <div className="diagnosis-section">
                    <div className="img-div">
                    <img src={items.image} alt={`marigold-hospital-diagosis-${index}`} />
                    </div>
                    <p className="mt-5 mb-5" data-aos="fade-in">{items.content}</p>
                    <div>
                      <div className="sub-head pb-4">FAQ'S</div>
                      {items.faqs.map((faq, index) => (
                        <div key={index} className="faq" data-aos="fade-up">
                          <div
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                          >
                            {faq.question}
                            <span
                              className={`faq-icon ${
                                activeIndex === index ? "active" : ""
                              }`}
                            >
                              {activeIndex === index ? "-" : "+"}
                            </span>
                          </div>
                          <div
                            className={`faq-answer ${
                              activeIndex === index ? "active" : ""
                            }`}
                          >
                            {faq.answer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default diagnosis;
