import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SubNavBar from "@/components/SubNavBar";

const Pricing = () => {
  return (
    <section className="flex flex-col min-h-screen px-10">
      <NavBar />
      <SubNavBar />

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Pricing
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              An investment for your health
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">

            {/* Card 1 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">60 min</h3>
              {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
              <div className="flex flex-col justify-center items-center my-8">
                <div className="flex flex-col justify-center items-center my-2">
                  <span className="mr-2 text-5xl font-extrabold pb-4">£ 45</span>
                  <span className="text-lg -mt-3">Treatment room</span>
                </div>
                  <div className="flex flex-col justify-center items-center my-2">
                    <span className="mr-2 text-2xl font-extrabold">£ 55</span>
                    <span className="text-md -mt-1">Mobile treatment</span>
                  </div>
                {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>High-quality grapeseed oil</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Aromatherapy essential oil</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Electric blanket</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
              >
                Book now
              </Link>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">90 min</h3>
              {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
              <div className="flex flex-col justify-center items-center my-8">
                <div className="flex flex-col justify-center items-center my-2">
                  <span className="mr-2 text-5xl font-extrabold pb-4">£ 65</span>
                  <span className="text-lg -mt-3">Treatment room</span>
                </div>
                  <div className="flex flex-col justify-center items-center my-2">
                    <span className="mr-2 text-2xl font-extrabold">£ 75</span>
                    <span className="text-md -mt-1">Mobile treatment</span>
                  </div>
                {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>High-quality grapeseed oil</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Aromatherapy essential oil</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Electric blanket</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
              >
                Book now
              </Link>{" "}
            </div>

            {/* Card 3 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">120 min</h3>
              {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p> */}
              <div className="flex flex-col justify-center items-center my-8">
                <div className="flex flex-col justify-center items-center my-2">
                  <span className="mr-2 text-5xl font-extrabold pb-4">£ 85</span>
                  <span className="text-lg -mt-3">Treatment room</span>
                </div>
                  <div className="flex flex-col justify-center items-center my-2">
                    <span className="mr-2 text-2xl font-extrabold">£ 105</span>
                    <span className="text-md -mt-1">Mobile treatment</span>
                  </div>
                {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>High-quality grapeseed oil</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Aromatherapy essential oil</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Electric blanket</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
              >
                Book now
              </Link>{" "}
            </div>

            {/* Card 4 */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-xl font-semibold">Beauty Facial Express</h3>
              <div className="flex flex-col justify-center items-center my-8">
                <div className="flex flex-col justify-center items-center my-2">
                  <span className="mr-2 text-5xl font-extrabold pb-4">£ 35</span>
                  {/* <span className="text-lg -mt-3">Treatment room</span> */}
                </div>
                {/* <span className="text-gray-500 dark:text-gray-400">/month</span> */}
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">30 min</p>
              </div>
              <ul role="list" className="mb-8 mt-20 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Calming facial kit</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Facial treatment with facial uplifting massage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Electric blanket</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
              >
                Book now
              </Link>{" "}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Pricing;
