import React from 'react'
import Link from "next/link";
import { BsFillMoonStarsFill, BsPersonGear } from "react-icons/bs";
import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';
import SubNavBar from '@/components/SubNavBar';

const Mobile = () => {
  return (
    <section className="flex flex-col min-h-screen px-10">
      <NavBar />
      <SubNavBar />

        <h2>mobile</h2>

      <Footer />
    </section>
  )
}

export default Mobile;

