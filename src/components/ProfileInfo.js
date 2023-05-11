import React from "react";
import Image from "next/image";

import profile from "../../public/assets/images/milena-profile.png";

const ProfileInfo = () => {
  return (
    <>
      <div className="text-center p-2">
        <h2 className="text-4xl py-2 text-teal-600 font-medium">
          Milena Flores
        </h2>
        <h2 className="text-xl py-2"> Sports Massage Therapist </h2>
      </div>

      <div className="relative mx-auto bg-gradient-to-b w-60 my-10">
        <Image src={profile} />
      </div>
    </>
  );
};

export default ProfileInfo;
