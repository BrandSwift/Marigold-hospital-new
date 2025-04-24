import React from "react";
import { useState } from "react";
import "../components/health.css";
import Healths from '../components/health.json'
// import Data from "../components/diagnostics.json";

function diagnosis() {
 

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeButton, setActiveButton] = useState(1);

  const [ health , setHealth] = useState(true)
  const [ women , setWomen] = useState(false)
  const [ women2 , setWomen2] =  useState(false)

  const [checkup, setCheckup] = useState(Healths[0].sections1);

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
        setCheckup(Healths[0].sections1)  
        setWomen(false);
        setWomen2(false);
        setHealth(true)
    } else if (buttonNumber === 2) {
        setCheckup(Healths[0].sections2)
        setWomen(false);
        setWomen2(false);
        setHealth(true)
    } else if (buttonNumber === 3) {
        setCheckup(Healths[0].sections3)
        setWomen(false);
        setWomen2(false);
        setHealth(true)
    }else if (buttonNumber === 4) {
        setCheckup(Healths[0].sections4)
        setWomen(false);
        setWomen2(false);
        setHealth(true)
    }else if (buttonNumber === 5) {
        setCheckup(Healths[0].sections5)
        setWomen(false);
        setWomen2(false);
        setHealth(true)
    }else if (buttonNumber === 6) {
        setCheckup(Healths[0].sections6)
        setWomen(false);
        setWomen2(false);
        setHealth(true)
    }else if (buttonNumber === 7) {
        setCheckup(Healths[0].sections7)
        setHealth(false)
        setWomen(true);
        setWomen2(false);
    }else if (buttonNumber === 8) {
        setCheckup(Healths[0].sections8)
        setWomen2(true);
        setWomen(false);
        setHealth(false)
        
    }
  };



  return (
    <div>
      <div className="types">
        <div className="">
          <div className="button-section">
            <button
              className={activeButton === 1 ? "active" : "btnn"}
              onClick={(e) => {
                handleButtonClick(1, e);
              }}
              value="one"
            >
              Master Check-up
            </button>
            <button
              className={activeButton === 2 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(2, e)}
              value="two"
            >
              Executive Check-up
            </button>

            <button
              className={activeButton === 3 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(3, e)}
              value="three"
            >
              Cardiac Package
            </button>
            <button
              className={activeButton === 4 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(4, e)}
              value="four"
            >
              Kidney Check-up
            </button>
            <button
              className={activeButton === 5 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(5, e)}
              value="five"
            >
              Well Women check-up
            </button>
            <button
              className={activeButton === 6 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(6, e)}
              value="six"
            >
              Diabetes Packages
            </button>
            <button
              className={activeButton === 7 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(7, e)}
              value="six"
            >
              WE CARE PACKAGE (ONLY FOR LADIES)
            </button>
            <button
              className={activeButton === 8 ? "active" : "btnn"}
              onClick={(e) => handleButtonClick(8, e)}
              value="six"
            >
              BE HEALTHY PACKAGE

            </button>
            
          </div>
        </div>
        <div className="">
        <div className="container">
         
        <div className="health-grid">
            <div className="item">
          {
            health &&    <>
            { checkup.map( (items)=> {
                return (
                    <div className="item-wrapper">
                    <p className="sub-head">
                        {items.title}
                        </p>

                        <ul>
                            {items.features.map((list)=> {
                                return (
                                    <li>{list.question}</li>
                                )
                            })}
                        </ul>

                        <a href="/contact">
                            <button className="btnn">Book Now</button></a>
                   </div>
                )
            }) }
            </>
          }

          {
            women && <>
               { checkup.map( (items)=> {
                return (
                    <div className="item-wrapper">
                    <div className="sub-head">
                        {items.title}
                        </div>
                        
                        
                          <div className="women2">
                          {items.features1.map((list)=> {
                                return (

                                    <div className="types">
                                     <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}

                            {items.features2.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                            {items.features3.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                            {items.features4.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                            {items.features5.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                          </div>
                           

                        <a href="/contact">
                            <button className="btnn">Book Now</button></a>
                   </div>
                )
            }) }
            </>
          }
          {
            women2 && <>
               { checkup.map( (items)=> {
                return (
                    <div className="item-wrapper">
                    <div className="sub-head">
                        {items.title}
                        </div>
                        
                        
                           <div className="women2">
                           {items.features1.map((list)=> {
                                return (

                                    <div className="types">
                                     <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}

                            {items.features2.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                            {items.features3.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                            {items.features4.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                            {items.features5.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                            {items.features6.map((list)=> {
                                return (

                                    <div className="types">
                                    
                                    <ul>
                                    <li>{list.question}</li>
                                    </ul>
                                    
                                    </div>
                                    
                                )
                            })}
                           </div>
                        

                        <a href="/contact">
                            <button className="btnn">Book Now</button></a>
                   </div>
                )
            }) }
            </>
          }
            </div>
        </div>
           
        </div>
        </div>
      </div>
    </div>
  );
}

export default diagnosis;
