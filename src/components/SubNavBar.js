import React from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const SubNavBar = () => {
  return (
    <div className="py-20 mb-2 flex justify-between">
      <Link href="/">
        <h1 className="text-xl">Sports Massage Therapist</h1>
      </Link>

      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-xl" />
        </li>
      </ul>
    </div>
  );
};

export default SubNavBar;