import React from "react";

function AboutSection() {
  return (
    <section className="bg-primary py-10 px-4 text-normaltext flex justify-center">

      <div className="max-w-4xl w-full">

        {/* Main Title */}
        <h1 className="text-center font-bold text-4xl tracking-wide text-subheading">
          About Us
        </h1>

        {/* Tagline */}
        <div className="italic text-center text-fainttext mt-2">
          <p>together we teach</p>
          <p>together we thrive</p>
        </div>

        {/* Intro */}
        <div className="mt-8 space-y-4 text-lg">
          <p>
            We are a collaborative tutoring community built to deliver
            high-quality, student-focused learning. By bringing tutors
            together, we improve teaching strategies and learner outcomes.
          </p>

          <p>
            Our tutors share knowledge and best practices to ensure clear
            explanations, personalised support, and consistent academic growth.
          </p>

          <p>
            We help students build confidence, understanding, and independence
            that lasts beyond the classroom.
          </p>
        </div>

        {/* Approach */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-subheading mb-3">
            Our Approach
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Lessons are adapted to each student's learning style</li>
            <li>Complex topics are broken into simple, clear steps</li>
            <li>Tutors collaborate to improve teaching quality</li>
            <li>We focus on real understanding, not memorisation</li>
          </ul>
        </div>

        {/* Values */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-subheading mb-4">
            Our Values
          </h2>

          <div className="space-y-4">

            <div>
              <h3 className="font-semibold">Collaboration</h3>
              <p className="text-fainttext">
                We believe great teaching happens when tutors support each other.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Excellence</h3>
              <p className="text-fainttext">
                We improve continuously through shared knowledge and feedback.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Support</h3>
              <p className="text-fainttext">
                We create a respectful and encouraging learning environment.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Student Empowerment</h3>
              <p className="text-fainttext">
                We help students build confidence and critical thinking skills.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;