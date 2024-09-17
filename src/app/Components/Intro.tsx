import Preface from "./Preface";
import Contact from "./Contact";
import Statement from "./Statement";

import '../Styles/intro.css'

export default function Intro() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <h1 className="font-ubuntu text-6xl sm:text-8xl md:text-9xl lg:text-[22rem]">
          studio_
        </h1>
      </div>

      <Preface />
      <Statement />
      <Contact />
    </section>
  );
}
