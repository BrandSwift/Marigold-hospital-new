import React, { useState } from 'react'
import "../components/special.css"
import Departdata from "../components/department.json"
import 'aos';
import 'aos/dist/aos.css';


function special() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeButton, setActiveButton] = useState(1);

    const[s1, setS1] = useState(true)
  
    const [speciality, setSpeciality] = useState(Departdata[0].sections1);

    const [internal, setInternal] = useState(true)
    const [gynecology , setGynecology] = useState(false)
  
    const toggleFAQ = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };
  
  
  
    const handleButtonClick = (buttonNumber, e) => {
    //   e.preventDefault();
      setActiveButton(buttonNumber);
      // setCategory(e.target.value);
  
      if (buttonNumber === 1) {
          setSpeciality(Departdata[0].sections1)  
          setInternal(true)
          setGynecology(false)
      } else if (buttonNumber === 2) {
          setSpeciality(Departdata[0].sections2)
          setInternal(false)
          setGynecology(false)
      } else if (buttonNumber === 3) {
          setSpeciality(Departdata[0].sections3)
          setGynecology(true)
          setInternal(false)
      }else if (buttonNumber === 4) {
          setSpeciality(Departdata[0].sections4)
          setGynecology(false)
          setInternal(false)
      }else if (buttonNumber === 5) {
          setSpeciality(Departdata[0].sections5)
          setGynecology(false)
          setInternal(false)
      }else if (buttonNumber === 6) {
          setSpeciality(Departdata[0].sections6)
          setGynecology(false)
          setInternal(false)
      }else if (buttonNumber === 7) {
          setSpeciality(Departdata[0].sections7)
          setGynecology(false)
          setInternal(false)
      }else if (buttonNumber === 8) {
          setSpeciality(Departdata[0].sections8)
          setGynecology(false)
          setInternal(false)
      }else if (buttonNumber === 9) {
          setSpeciality(Departdata[0].sections9)
          setGynecology(false)
          setInternal(false)
      }
    };
  
  return (
    <div>
         <div className="button-section">
         <button
              className={activeButton === 1 ? "active" : "btnn"}
              onClick={(e) => {
                handleButtonClick(1, e);
              }}
              value="one"
            >
             Internal Medicine
            </button>
            <button
              className={activeButton === 2 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(2, e)}
              value="two"
            >
              General Surgery
            </button>

            <button
              className={activeButton === 3 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(3, e)}
              value="three"
            >
            
Obstetrics & Gynaecology
            </button>
            
            <button
              className={activeButton === 4 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(4, e)}
              value="five"
            >
              Paediatrics
            </button>
            <button
              className={activeButton === 5 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(5, e)}
              value="six"
            >
             Orthopaedics                  
            </button>
            <button
              className={activeButton === 6 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(6, e)}
              value="seven"
            >
             Endocrinology
            </button>
            <button
              className={activeButton === 7 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(7, e)}
              value="eight"
            >
             Nephrology 
            </button>
            <button
              className={activeButton === 8 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(8, e)}
              value="nine"
            >
             Opthalmology
            </button>
            <button
              className={activeButton === 9 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(9, e)}
              value="nine"
            >
             Psychiatry
            </button>
             
          </div>

          <div className='section-pad'>
          { speciality && ( <div>
              {speciality.map((items,index) => {
                return (
                  <div className='speciality-section'>
                 <div className='img-div'>
                 <img src={items.image} alt={`marigold-hospital-speciality-${index}`} />
                 </div>
                    <h2 className='heading'><span>{items.title}</span></h2>
                    <p data-aos="fade-up">{items.content}</p>
                 
                   {items.faqs &&  <div>
                    {/* <div className="section-title pb-4">
                       
                       {items.faqs === "" ? (""): (" FAQ'S")}
                       
                       </div> */}
                       
                      { items.faqs.map((faq, index) => (
                        <div key={index} className="faq" data-aos="fade-up"
                        >
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
                    </div>}


                    {
                      internal  && <div>
                        <a href="/internal-medicine" className='btnn  '>
                          View More
                        </a>
                      </div>
                    }

                    {
                     gynecology && <div>
                        <a href="/gynecology" className='btnn  '>
                          View More
                        </a>
                      </div>
                    }
                  </div>
                );
              })}

              
            </div>
          )}
          </div>


    </div>
  )
}

export default special