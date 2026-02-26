import React from 'react'
import facebook from '../images/facebook.png'
import mobile from '../images/mobile.png'
import gmail from '../images/gmail.png'
function CTASection() {
  const phoneNumber = "27659650297";

  const message = "Hello, I am interested in your service.";

  const encodedMessage = encodeURIComponent(message);
  return (
    <div className=" p-4 pb-6 justify-center bg-primary">
      <div className=" justify-center">
        <h1 className="text-center  font-bold text-h1 pt-6 pb-6 tracking-wide text-subheading">
          Contact Us
        </h1>
        <div className=" text-normaltext text-h4  mb-4 ">
          <div className="flex gap-2 items-center">
            <h1 className="text-h3 text-subheading ">Whatsapp</h1>
            <img
              loading="lazy"
              src={mobile}
              alt="mobile image"
              className="h-5"
            />
          </div>

          <div className="pl-4 mb-4">
            <div>
              Tshepo : <span className="text-fainttext">076 309 5346</span>
            </div>
            <div>
              Ephraim : <span className="text-fainttext">078 469 6232</span>
            </div>
          </div>
          <div>
            <div className="justify-center flex flex-col">
              <div>
                <h1 className="text-h3 italic text-normaltext ">
                  Click here to start charting on Whatsapp
                </h1>
              </div>

              <a
                href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="nooper noreferrer"
                className="bg-blue-600 px-4 py-2 w-34 text-center items-center text-h3 text-white rounded-xl shadow-2xl ml-4 mb-6 hover:bg-orange-600 "
              >
                Get Started
              </a>
            </div>
            <div>
              {/*
                            <div className="flex gap-2 items-center">
                <h1 className="text-h3 text-subheading">Facebook</h1>
                <img
                  loading="lazy"
                  src={facebook}
                  alt="facebook image "
                  className="h-5"
                />
              </div>
                            <div className="pl-4 mb-4">
                <div>
                  Tshepo : <span className="text-fainttext">076 309 5346</span>
                </div>
                <div>
                  Ephraim : <span className="text-fainttext">078 469 6232</span>
                </div>
              </div>
               */}

              <div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-h3 text-subheading">Email Us</h1>
                  <img
                    loading="lazy"
                    src={gmail}
                    alt="gmail image"
                    className="h-5"
                  />
                </div>
                <div className="pl-4 mb-4">
                  <div>teamworktutors126@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTASection