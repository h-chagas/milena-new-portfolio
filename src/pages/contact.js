import React from "react";
import Link from "next/link";
import { MdOutlineTextsms, MdWhatsapp, MdCall } from "react-icons/md";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Contact() {
  return (
    <section className="flex flex-col min-h-screen px-10">
      <NavBar />
      <section className="bg-white dark:bg-gray-900 py-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Fill the form below, or use one of the alternative ways to contact
            located on the bottom of the page
          </p>
          <form action="https://formsubmit.co/7512b38a73ed3c67b6ae0201be79d382" method="POST" className="space-y-8">
            {/* HoneyPot */}
            <input type="text" name="_honey" className="hidden"></input>
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://milenamassagetherapy.co.uk/success"></input>
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="tel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Telephone number
              </label>
              <input
                type="tel"
                id="tel"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="07123 456789"
                required
              />
            </div>
            <div>
              <label
                for="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Postcode
              </label>
              <input
                type="text"
                id="address"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Or your full address"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Type of Treatment
              </label>
              {/* MAKE A DROP-DOWN MENU */}
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Select your treatment"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Include the day and time required..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Send message
            </button>
          </form>
          <p className="mb-2 mt-12 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Alternative ways to contact me
          </p>
          <div className="text-4xl flex justify-center gap-16 py-8 text-gray-600">
            <Link href="sms:+447478883335" target="_blank">
              <MdOutlineTextsms />
            </Link>
            <Link href="https://wa.me/447478883335" target="_blank">
              <MdWhatsapp />
            </Link>
            <Link href="tel:747-888-3335" target="_blank">
              <MdCall />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
