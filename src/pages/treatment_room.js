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
          Your space to
        </h3>




        <div className="flex flex-col items-center mb-12 md:mb-0 sm:flex-row">
          <div className="grow-0 shrink-0 basis-auto w-2/5 sm:w-2/12">
            <img
              src="\assets\images\mobile5_img.png"
              className="w-full shadow-lg rounded-lg mb-6"
              alt=""
            />
          </div>

          <div className="grow-0 shrink-0 basis-auto 11/12 sm:w-10/12 sm:pl-4 md:pl-6">
            <p className="font-semibold mb-3 text-xl lg:text-2xl 2xl:text-4xl">Benefits</p>
            <p className="lg:text-xl 2xl:text-2xl">
            The benefits of receiving a massage in the comfort of your own home or hotel room are innumerable, 
            and include eliminating hassles like having to drive through rush hour traffic or finding your 
            way in an unfamiliar location while on vacation.
            </p>
          </div>
        </div>



        <div className="flex flex-col items-center mb-12 md:mb-0 sm:flex-row">
        <div className="grow-0 shrink-0 basis-auto w-2/5 sm:w-2/12">
            <img
              src="\assets\images\mobile4_img.png"
              className="w-full shadow-lg rounded-lg mb-6"
              alt=""
            />
          </div>

          <div className="grow-0 shrink-0 basis-auto 11/12 sm:w-10/12 sm:pl-4 md:pl-6">
            <p className="font-semibold mb-3 text-xl lg:text-2xl 2xl:text-4xl">Calm and relax</p>
            <p className="lg:text-xl 2xl:text-2xl">
            This greatly reduces stress, both before and after the massage, 
            so that you can benefit most deeply from the state of relaxation 
            that massage promotes.
            </p>
          </div>
        </div>




        <div className="flex flex-col items-center mb-12 md:mb-0 sm:flex-row">
        <div className="grow-0 shrink-0 basis-auto w-2/5 sm:w-2/12">
            <img
              src="\assets\images\mobile3_img.png"
              className="w-full shadow-lg rounded-lg mb-6"
              alt=""
            />
          </div>
          <div className="grow-0 shrink-0 basis-auto 11/12 sm:w-10/12 sm:pl-4 md:pl-6">
            <p className="font-semibold mb-3 text-xl lg:text-2xl 2xl:text-4xl">At your door!</p>
            <p className="lg:text-xl 2xl:text-2xl">
            Just think, no getting into the car and dealing with stressful traffic situations only minutes 
            after being in a state of relaxed bliss. If you are at home, you can take a bath, read a book, 
            sit on the patio, or go right to bed and fully experience the benefits from your massage.
            </p>
          </div>
        </div>


        
      </section>

      <Footer />
    </section>
  );
};

export default Mobile;
