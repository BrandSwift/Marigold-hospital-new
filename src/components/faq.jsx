import React from 'react'
import { useState } from 'react';
import "../components/faq.css"

function faq() {

    const faqs = [
        {
          question: 'What is React?',
          answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
          question: 'How do I install React?',
          answer: 'You can install React using npm or yarn by running: npm install react',
        },
        {
          question: 'What is JSX?',
          answer: 'JSX is a syntax extension for JavaScript often used with React to describe what the UI should look like.',
        },
        // Add more FAQs as needed
      ];
    

      const [activeIndex, setActiveIndex] = useState(null);
 



  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };



  return (
    <div className="faq-section">
      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            
            {faq.question}
            <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  )
}

export default faq