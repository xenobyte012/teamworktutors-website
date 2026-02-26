import React from 'react'
import { subjects } from '../data/tutors';
export default function SubjectsSection() {
  const subjectTutored = subjects.map((subject, index) => {
    return <button key={index} className='bg-white shadow-2xl px-4 py-2 m-2 rounded-xl '>{subject}</button>
  })
  return (
    <div className="bg-primary text-center flex p-4 pb-6">
      <div>
        <h1 className="text-center  font-bold text-h1 pt-6 pb-6 text-heading">
          Subject Offered
        </h1>

        <div className="mt-4  text-h4 text-normaltext flex flex-wrap justify-start">{subjectTutored}</div>
      </div>
    </div>
  );
}
