import React from "react";
import contactImage from "../images/contactImage.jpg";
function ContactPageSection() {
  return (
    <div className="bg-primary justify-center h-fill tracking-wide pb-6">
      <div>
        <h1 className="text-center font-bold text-h1 text-heading pt-6 ">
          Contact Us
        </h1>
        <p className="px-6 italic text-center  text-h3 text-fainttext">
          We are commited to processing the infomation on to contact you and
          talk
        </p>
      </div>

      <div className="flex flex-row mt-3 justify-center items-center pt-6">
        <div>
          <div className="ml-6  text-normaltext text-h4">
            <p className="py-2">📧teamworktutors126@gmail.com</p>
            <p>📍 15 Marias Street</p>
            <p className="px-4">Rustenbung</p>
            <p>076 309 5346</p>
          </div>
          <div className="bg-blue-100 m-4  rounded-2xl p-8 flex flex-col text-normaltext text-h3 gap-5 min-h-4   ">
            <input
              placeholder="Name: "
              className="bg-secondary rounded-xl p-2"
            />
            <input
              placeholder="Emali"
              className="bg-secondary rounded-xl p-2"
            />
            <textarea
              placeholder="Message:"
              className="bg-secondary rounded-xl p-2 min-h-50"
            ></textarea>
            <button className="text-white bg-orange-500 p-2 rounded-xl hover:bg-orange-600">
              Submit
            </button>
          </div>
        </div>
        <div className=" hidden md:block">
          <img
            src={contactImage}
            alt="image"
            className="w-[850px] object-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPageSection;
