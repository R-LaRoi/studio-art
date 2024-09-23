'use client'
import Preface from "./Preface";
import Contact from "./Contact";
import Statement from "./Statement";
import { artistStatement } from "../assets/allContent";
import '../Styles/intro.css'
import Navigation from "./Navigation";
import TextAnimation from './textAnimation'

export default function Intro() {
  return (
    <section>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">


        <h1 className="font-ubuntu text-5xl sm:text-3xl md:text-5xl lg:text-[10rem] ">
          <TextAnimation />
        </h1>
      </div>

      <Preface />
      <Statement text={artistStatement} />
      <Contact />
    </section>
  );
}
