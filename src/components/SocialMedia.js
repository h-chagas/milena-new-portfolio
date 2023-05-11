import React from "react";
import Link from "next/link";
import {
    AiOutlineCar,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillFacebook,
  } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <>
      <div className="text-5xl flex justify-center gap-16 py-20 text-gray-600">
        <Link
          href="https://www.linkedin.com/in/milena-flores-4307b6175/"
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href="https://www.instagram.com/massageinmanchester/"
          target="_blank"
        >
          <AiFillInstagram />
        </Link>
        <Link 
            href="https://www.facebook.com/milenamassage1" 
            target="_blank"
        >
          <AiFillFacebook />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;
