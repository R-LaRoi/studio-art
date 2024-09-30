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
      <Statement text={artistStatement} />
      <Preface />
      {/* <Contact /> */}
    </section>
  );
}
