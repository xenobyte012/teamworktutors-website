import React from 'react'

function Hero() {
  return (
    <div className="flex justify-center text-normaltext bg-primary  pt-6 pb-6">
      <div className="text-center">
        <div>
          <h1 className="text-h1 font-bold text-heading   ">
            Get The Best Tutor Near Me
          </h1>
          <div className="italic font-semibold text-h3 text-fainttext p-1">
            <p>together we teach</p>
            <p>together we thrive</p>
          </div>
        </div>

        <div className="justify-center text-center mt-6">
          <div className="font-semibold text-subheading text-h2">
            <h1>Our Mission</h1>
          </div>
          <div className="grid-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-6 max-w-5xl">
            <div className="bg-secondary rounded-2xl p-4 shadow-xl">
              <div className=" text-lg font-semibold mb-4 text-center text-subheading">
                Enhence Learning Outcomes
              </div>
              <div>
                By working together, we strive to provide tailored and effective
                tutoring student, ensuring they achieve their that meets the
                diverse needs of each academic goals
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-4 shadow-2xl text-subheading">
              <div className="text-lg font-semibold mb-4 text-center">
                Foster Professional Growth
              </div>
              <div >
                We commit to continuous improvement through shared experiences,
                professional development, and the exchange of best practices,
                enhancing our skills and effectiveness as educators
              </div>
            </div>
            <div className="bg-secondary rounded-xl p-4 shadow-2xl ">
              <div className="text-lg font-semibold mb-4 text-center text-subheading">
                Promote Student Centered Approaches
              </div>
              <div >
                We commit to continuous improvement through shared experiences,
                professional development, and the exchange of best practices,
                enhancing our skills and effectiveness as educators
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero