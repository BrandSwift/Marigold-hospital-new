import React from "react";
import { useState } from "react";
import Testdata from "./testdata.json";
import "./test.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "aos";
import "aos/dist/aos.css";

function test() {
  const [activeButton, setActiveButton] = useState(1);

  const [content, setContent] = useState(Testdata[0].Naan);
  const [category, setCategory] = useState("");

  const [patient, setPatient] = useState("true");
  const [doctor, setDoctor] = useState("");
  const [written, setWritten] = useState("");
  const [general, setGenerel] = useState("");
  const [health, setHealth] = useState("");

  const handleButtonClick = (buttonNumber, e) => {
    e.preventDefault();
    setActiveButton(buttonNumber);
    setCategory(e.target.value);

    if (buttonNumber === 1) {
      setPatient(true);
      setDoctor(false);
      setWritten(false);

      setHealth(false);
    } else if (buttonNumber === 2) {
      setPatient(false);
      setDoctor(true);
      setWritten(false);

      setHealth(false);
    } else if (buttonNumber === 3) {
      setPatient(false);
      setDoctor(false);
      setWritten(false);

      setHealth(true);
    } else if (buttonNumber === 4) {
      setPatient(false);
      setDoctor(false);
      setWritten(true);

      setHealth(false);
    }
  };

  const options = {
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  //

  return (
    <div className="container">
      <div className="button-section pb-5">
        <button
          className={activeButton === 1 ? "active" : "btnn"}
          onClick={(e) => {
            handleButtonClick(1, e);
          }}
          value="one"
        >
          Patient Stories
        </button>
        <button
          className={activeButton === 2 ? "active" : "btnn"}
          onClick={(e) => handleButtonClick(2, e)}
          value="two"
        >
          Doctor’s Speak
        </button>

        <button
          className={activeButton === 3 ? "active" : "btnn"}
          onClick={(e) => handleButtonClick(3, e)}
          value="three"
        >
          Health Days
        </button>

        <button
          className={activeButton === 4 ? "active" : "btnn"}
          onClick={(e) => handleButtonClick(4, e)}
          value="five"
        >
          Written testimonial
        </button>
      </div>

      <div className="slider-section">
        {patient && (
          <OwlCarousel
            {...options}
            className="owl-theme"
            items={3}
            margin={10}
            nav
          >
           
            <div class="item patient">
            <video src="/videos/two.mp4 " controls> </video>
            </div>
            <div class="item patient">
            <video src="/videos/three.mp4 " controls> </video>
            </div>
            <div class="item patient">
              <video src="/videos/one.mp4 " controls> </video>
            </div>
          </OwlCarousel>
        )}

        
        {doctor && (
          <OwlCarousel
            {...options}
            className="owl-theme"
            items={3}
            margin={10}
            nav
          >
            <div class="item">
              <h4>17</h4>
            </div>
            <div class="item">
              <h4>2</h4>
            </div>
            <div class="item">
              <h4>3</h4>
            </div>
            <div class="item">
              <h4>4</h4>
            </div>
            <div class="item">
              <h4>5</h4>
            </div>
          </OwlCarousel>
        )}


        {health && (
          <OwlCarousel
            {...options}
            className="owl-theme"
            items={3}
            margin={10}
            nav
          >
            <div class="item patient">
              <a href="/review/health (1).webp" data-fancybox="gallery">
                <img src="/review/health (1).webp" alt="marigold-hospital-review-health-1" />
              </a>
            </div>
            <div class="item patient">
              <a href="/review/health (2).webp" data-fancybox="gallery">
                <img src="/review/health (2).webp" alt="marigold-hospital-review-health-2" />
              </a>
            </div>
            <div class="item patient">
              <a href="/review/health (3).webp" data-fancybox="gallery">
                <img src="/review/health (3).webp" alt="marigold-hospital-review-health-3" />
              </a>
            </div>
            <div class="item patient">
              <video src="/review/health.mp4" controls></video>
            </div>
          </OwlCarousel>
        )}


        {general && (
          <OwlCarousel
            {...options}
            className="owl-theme"
            items={3}
            margin={10}
            nav
          >
            <div class="item">
              <h4>1</h4>
            </div>
            <div class="item">
              <h4>2</h4>
            </div>
            <div class="item">
              <h4>3</h4>
            </div>
            <div class="item">
              <h4>4</h4>
            </div>
            <div class="item">
              <h4>5</h4>
            </div>
          </OwlCarousel>
        )}


        {written && (
          <OwlCarousel {...options} className="owl-theme">
            <div class="item written">
              <div className="d-flex justify-content-between align-items-center">
                <img src="/icons/male.webp " alt="marigold-hospital-review-health-male-icon" />
                <img src="/icons/gr.webp" alt="marigold-hospital-review-health-gr" />
              </div>
              <h4 className="sub-head">Muruganmr Muruganmr</h4>
              <div>
                <p>
                  I would like to share my experience. My mom was admitted for a
                  cataract operation last month. Dr. Raghu took great care and
                  performed the surgery without any complications. The admission
                  and discharge process was smooth, and I will be recommending
                  him to my friends and neighbors
                </p>
              </div>
            </div>
            <div class="item written">
              <div className="d-flex justify-content-between align-items-center">
                <img src="/icons/male.webp" alt="marigold-hospital-review-health-male" />
                <img src="/icons/gr.webp" alt="marigold-hospital-review-health-gr2" />
              </div>
              <h4 className="sub-head">Iftu Y</h4>
              <p>
                I want to express my sincere gratitude to the hospital staff. I
                am highly impressed at the treatment which I have received for
                my Dad starting from the entrance to the surgical ward. And the
                management staff were supportive, especially thanks to Mosses
                and his team. Doctors as well😊. Happy service.
              </p>
            </div>
            <div class="item written">
              <div className="d-flex justify-content-between align-items-center">
                <img src="/icons/female.webp" alt="marigold-hospital-review-health-female" />
                <img src="/icons/gr.webp" alt="marigold-hospital-review-health-gr3" />
              </div>
              <h4 className="sub-head">Hema Latha</h4>
              <p>
                Am personally very much happy that I got good and safe treatment
                at marigold hospital and the hospital doctors and nurses and
                management staff are very kind and polite. I want to thank for
                Mr.Mosses who is very kind and supportive person. Wonderful
                hospital with good facilities and equipments.
              </p>
            </div>

            {/* <div class='item written'>
      <img src="" alt="marigold-hospital-review-health-aksheev" />
        <h4>Aksheev Thakur</h4>
        <p>I was taken care of like a family member here. Within a minute of admission my treatment started. And all the ward boys, management and doctors will take care of the patient as if somebody of their own has been admitted. I was operated for fracture near my knee. And due process was followed. The surgeon, Dr Harshith and the anaesthetist explained everything to me in detail before surgery and calmed me down. Dr Sunil led the surgery and what a doctor he is. Dr Lokesh is the best doctor here. My father and friends who accompanied me here were impressed with the service. Moses helped us a lot.
I am saying this because I had a terrible experience at Sanjay Gandhi hospital. I was in excruciating pain and Marigold came to my help. Will never forget the doctors'and staffers here.</p>
      </div> */}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
}

export default test;
