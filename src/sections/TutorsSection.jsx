import React from 'react'
import fistImage from '../images/image-1.webp'
import secondImage from '../images/image-2.webp'
import star from '../images/star.png'
import location from '../images/location.png'

function TutorsSection() {
  
  return (
    <div className=" bg-blue-50 grid-center  grid pb-6 text-normaltext ">
      <div className="text-center  pt-6">
        <h1 className="text-heading text-h1 font-semibold ">
          Professional Tutor's Registered With SACE
        </h1>
        <p className="text-fainttext italic text-center">
          Why struggle when tutors at your finger tips
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:w-3xl">
        <div className="bg-secondary flex flex-col  m-4 p-3 rounded-lg shadow-xl ">
          <div className="flex flex-row ">
            <div className="w-1/2 object-cover  ">
              <img
                src={fistImage}
                alt="image"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="pl-3">
              <div className=" text-fainttext">Name</div>
              <div className="text-right text-h3  ">Tshepo </div>

              <div className=" text-normaltext pt-1">Reviews</div>
              <div className="flex flex-row h-4 gap-2 text-right justify-end">
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
              </div>

              <div className="  pt-3">Location</div>
              <div className="flex flex-row h-5 gap-2 text-right justify-end pl-4 ">
                <img src={location} loading="lazy" alt="location image" />
                <div className="justify-end text-h3 text-sub ">Rustenbung</div>
              </div>
            </div>
          </div>
          <div className="text-normaltext text-lg">
            <div className="text-wrap mt-4 text-normaltext text-h4">
              "I'm here to help you understand every topic step by step,
              especially the ones you find challenging. Learning doesn't have to
              be stressful - we'll tackle it together."
            </div>
          </div>
        </div>
        <div className="bg-secondary flex flex-col  m-4 p-3 rounded-lg shadow-xl ">
          <div className="flex flex-row ">
            <div className="w-1/2 object-cover  ">
              <img
                src={secondImage}
                alt="image"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="pl-3">
              <div className=" ">Name</div>
              <div className="text-right text-h3 subheading ">Ephraim M</div>

              <div className="  pt-1">Reviews</div>
              <div className="flex flex-row h-4 gap-2 text-right justify-end">
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
                <img src={star} loading="lazy" alt="star" className="h-4 w-4" />
              </div>

              <div className="pt-3 ">Location</div>
              <div className="flex flex-row h-5 gap-2 text-right justify-end pl-4 ">
                <img src={location} alt="location image" loading="lazy" />
                <div className="justify-end text-h3 subheading">Rustenbung</div>
              </div>
            </div>
          </div>
          <div className="text-normaltext text-lg">
            <div className="text-wrap mt-4 text-normaltext text-h4">
              "I'm passionate about helping students understand topics they find
              difficult. I take time to explain concepts clearly, step by step,
              until everything makes sense. No pressure, no rushing - just
              patient guidance that helps you build real confidence in your
              learning.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default TutorsSection