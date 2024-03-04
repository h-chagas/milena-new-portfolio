import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill, BsPersonGear } from "react-icons/bs";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SubNavBar from "@/components/SubNavBar";

const Mobile = () => {
  return (
    <section className="flex flex-col min-h-screen px-10">
      <NavBar />
      <SubNavBar />

      <section className="mb-32 text-gray-800">
        <h2 className="text-2xl sm:text-2xl lg:text-4xl text-center 2xl:text-6xl">
          Treatment Room
        </h2>
        <h3 className="text-md text-center my-4 mb-10 md:mb-6 lg:text-2xl 2xl:text-3xl">
          Your relaxing space in Heywood (Greater Manchester)
        </h3>




        <div className="flex flex-col items-center mb-12 md:mb-0 sm:flex-row">
          <div className="grow-0 shrink-0 basis-auto w-2/5 sm:w-2/12">
            <img
              src="\assets\images\treatment_room_1.jpg"
              className="w-full shadow-lg rounded-lg mb-6"
              alt=""
            />
          </div>

          <div className="grow-0 shrink-0 basis-auto 11/12 sm:w-10/12 sm:pl-4 md:pl-6">
            <p className="font-semibold mb-3 text-xl lg:text-2xl 2xl:text-4xl">Benefits</p>
            <p className="lg:text-xl 2xl:text-2xl">
            With any session in my treatment room in Heywood UK, you will experience a tranquil and relaxing environment that is specifically designed for your comfort and well-being. The personalized setting allows you to feel at ease and fully enjoy the benefits of the treatment without any distractions.
            </p>
          </div>
        </div>



        <div className="flex flex-col items-center mb-12 md:mb-0 sm:flex-row">
        <div className="grow-0 shrink-0 basis-auto w-2/5 sm:w-2/12">
            <img
              src="\assets\images\treatment_room_2.jpg"
              className="w-full shadow-lg rounded-lg mb-6"
              alt=""
            />
          </div>

          <div className="grow-0 shrink-0 basis-auto 11/12 sm:w-10/12 sm:pl-4 md:pl-6">
            <p className="font-semibold mb-3 text-xl lg:text-2xl 2xl:text-4xl">Calm and relax</p>
            <p className="lg:text-xl 2xl:text-2xl">
            Specifically designed to create a peaceful and relaxing atmosphere conducive to the massage experience. The ambiance and lighting are all tailored to enhance your relaxation and wellbeing.
            This treatment room is equipped with extra comfortable and specialised massage table, variety of massage oils and essential oils, and other tools that are designed to optimise the massage experience. These professional-grade tools can enhance the effectiveness of the massage and provide a more comprehensive treatment.
            </p>
          </div>
        </div>




        <div className="flex flex-col items-center mb-12 md:mb-0 sm:flex-row">
        <div className="grow-0 shrink-0 basis-auto w-2/5 sm:w-2/12">
            <img
              src="\assets\images\treatment_room_3.jpg"
              className="w-full shadow-lg rounded-lg mb-6"
              alt=""
            />
          </div>
          <div className="grow-0 shrink-0 basis-auto 11/12 sm:w-10/12 sm:pl-4 md:pl-6">
            <p className="font-semibold mb-3 text-xl lg:text-2xl 2xl:text-4xl">No distractions at all!</p>
            <p className="lg:text-xl 2xl:text-2xl">
            Eliminates distractions that may be present at home, such as noise, interruptions, or other responsibilities, allowing you to fully relax and focus on the therapeutic benefits of the massage!
            As a trained Professional Massage Therapist, here I provide personalized treatments that target your areas of tension and help you achieve optimal results.

            </p>
          </div>
        </div>


        
      </section>

      <Footer />
    </section>
  );
};

export default Mobile;
