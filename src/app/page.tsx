import Preface from "./Components/Preface";
import Intro from "./Pages/Intro";
import Contact from "./Pages/Contact";
import Statement from "./Components/Statement";

export default function Home() {
  return (
    <>
      <Intro />
      <Preface />
      <Statement />
      <Contact />

    </>
  );
}
