import React from "react";
import img1 from "../images/5484597.jpg";
import About from "./About";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <section className="m-10">
        <div className="mt-16 flex px-10 justify-center items-center h-full">
          <div className="flex flex-1 w-1/2 justify-center items-center">
            <div className="flex flex-col justify-start">
              <h1 className="text-2xl">Hi! My Name is</h1>
              <h1 className="text-5xl font-bold">SUMIT KAWOR</h1>
              <p>I am a full stack developer.</p>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={img1} alt="hero" className="h-5/6 w-5/6" />
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </>
  );
};

export default Home;
