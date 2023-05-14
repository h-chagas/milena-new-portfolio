import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import SubNavBar from "@/components/SubNavBar";
import BookingBtn from "@/components/BookingBtn";
import CvBtn from "@/components/CvBtn";
import Footer from "@/components/Footer";
import Link from "next/link";

import { BsFillMoonStarsFill } from "react-icons/bs";


const About = () => {

  const [darkMode, setDarkMode] = useState(false);


  return (
    <>
      <section className={`flex flex-col min-h-screen px-10 xl:px-96 `}>
        <NavBar />
        <div className="py-20 mb-2 flex justify-between">
            <Link href="/">
              <h1 className="text-xl">Sports Massage Therapist</h1>
            </Link>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
            </ul>
          </div>

        <div className="dark:bg-gray-900 dark:text-white">
          <h2 className="text-2xl sm:text-2xl lg:text-4xl text-center">
            About me
          </h2>
          <p className="py-2 sm:text-xl sm:py-4 lg:text-2xl lg:py-6">
            My name is Milena Flores and I have been massage therapist for 6
            years. I am passionate about massage and the benefits that it
            brings, improving health and wellbeing for all my clients.
          </p>
          <CvBtn />
          <p className="py-2 sm:text-xl sm:py-4 lg:text-2xl lg:py-6">
            During this time, I have got large experience working for third
            party companies and as a private therapist performing few hundreds
            massages in London, Birminghan and in Greater Manchester.
          </p>
          <p className="py-2 sm:text-xl sm:py-4 lg:text-2xl lg:py-6">
            As a self-motivated learner, I am currently studying Level 5 Sports
            Massage to keep improving my techniques and to find out new ones -
            to always offer the best personalised treatment.
          </p>
          <p className="py-2 sm:text-xl sm:py-4 lg:text-2xl lg:py-6">
            As mobile therapist, my clients get treated in the comfort of their
            home!
          </p>
        </div>

        <BookingBtn />
      </section>
      <Footer darkMode={darkMode}/>
    </>
  );
};

export default About;
