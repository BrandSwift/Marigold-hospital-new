import React, { useState } from 'react'
import 'aos';
import 'aos/dist/aos.css';

import "../components/special.css"
import Specialdata from "../components/Specialdata.json"


function special() {




    const [activeIndex, setActiveIndex] = useState(null);
    const [activeButton, setActiveButton] = useState(1);
  
    const [speciality, setSpeciality] = useState(Specialdata[0].sections1);


    const [icu, setIcu] = useState(false);
    const [rooms, setRooms] = useState(false);
  
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
          setSpeciality(Specialdata[0].sections1) 
          setIcu(false) 
          setRooms(false)
      } else if (buttonNumber === 2) {
          setSpeciality(Specialdata[0].sections2)
          setIcu(false) 
          setRooms(true)
      } else if (buttonNumber === 3) {
          setSpeciality(Specialdata[0].sections3)
          setIcu(false)
          setRooms(false)
      }else if (buttonNumber === 4) {
          setSpeciality(Specialdata[0].sections4)
          setIcu(false)
          setRooms(false)
      }else if (buttonNumber === 5) {
          setSpeciality(Specialdata[0].sections5)
          setIcu(false)
          setRooms(false)
      }else if (buttonNumber === 6) {
          setSpeciality(Specialdata[0].sections6)
          setIcu(false)
          setRooms(false)
      }else if (buttonNumber === 7) {
        setSpeciality(Specialdata[0].sections7)
        setIcu(true)
        setRooms(false)
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
            Out Patient Consultaions
            </button>
            <button
              className={activeButton === 2 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(2, e)}
              value="two"
            >
              Procedure Room
            </button>

            <button
              className={activeButton === 7 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(7, e)}
              value="three"
            >
              ICU
            </button>

            <button
              className={activeButton === 3 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(3, e)}
              value="three"
            >
              High Dependency Unit
            </button>
            <button
              className={activeButton === 4 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(4, e)}
              value="four"
            >
             Physiotheraphy 
            </button>
            <button
              className={activeButton === 5 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(5, e)}
              value="five"
            >
              Dental
            </button>
            <button
              className={activeButton === 6 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(6, e)}
              value="six"
            >
            Podiatry                    
            </button>
           
             
          </div>

          <div className='section-pad'>
          { speciality && ( <div>
              {speciality.map((items,index) => {
                return (
                  <div className='speciality-section'>
                  <div className='img-div'>
                  <img src={items.image} alt={`marigold-hospital-facility-${index}`} />
                  </div>
                <h4 className='sub-head'>
                    <span>{items.title}</span>
                  </h4>
                    <p data-aos="fade-left" >{items.content}</p>
                    <div>
                      
                      {items.faqs.map((faq, index) => (
                        <div key={index} className="faq" data-aos="fade-up" >
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

                    {
                      icu && <div>
                        <a href="/icu" className='btnn'>
                          View More
                        </a>
                      </div>
                    }
                    {/* {
                      rooms && <div className='d-flex gap-4'>
                        <a href="/minor-surgery" className='btnn'>
                          View More on Minor Surgery
                        </a>

                        <a href="/major-surgery" className='btnn'>
                        View More on Major Surgery
                        </a>
                      </div>
                    } */}
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