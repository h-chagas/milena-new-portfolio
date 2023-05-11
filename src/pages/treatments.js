import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import SubNavBar from "@/components/SubNavBar";
import Footer from "@/components/Footer";

const Treatments = () => {
  return (
    <section className="flex flex-col min-h-screen px-10">
      <NavBar />
      <SubNavBar />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-2xl lg:text-4xl text-center">
          Treatments
        </h2>

        {/* Card 1 */}
        
          <div
          href="/contact"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            class="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\deeptissue_img.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Swedish Relaxing Massage
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lighter pressure that leaves a feeling of well-being. Without pain and comfortable.
            </p>

            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>

          </div>
        </div>
        
        


        {/* Card 2 */}
        <Link
          href="/contact"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            class="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\swedish_img.jpeg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Deep Tissue Massage
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            It relieves muscle pain and tension by deeper pressure on localised acute or chronic pain.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link
          href="/contact"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            class="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\sports_img.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sports Massage
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Improve your training, performance and even assists in muscle recovery.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        {/* Card 4 */}
        <Link
          href="/contact"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            class="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\chair_img.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Chair Massage (Corporate)
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Treatment specifically designed for the workplace or corporate events, as seated massage is applied in a specially designed portable chair.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>

        {/* Card 5 */}
        <Link
          href="/contact"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-10"
        >
          <img
            class="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="\assets\images\facial_img.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Beauty Facial Express (30min)
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Effective and suitable for every skin type, with a uplifting facial massage. High-quality skin-care products.
            </p>
            <div className="flex justify-center gap-8 mt-5">
              <Link
                  href="/pricing"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Check price
                </Link>

                <Link
                  href="/contact"
                  className="text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-green-900"
                >
                  Book now
                </Link>
            </div>
          </div>
        </Link>
        
      </div>
      <Footer />
    </section>
  );
};

export default Treatments;
