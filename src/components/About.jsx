import React from "react";

const About = () => {
  return (
    <section className="mx-20 mt-80 h-full mb-20">
      <div className="grid grid-cols-2 c gap-16">
        <div className="col-span-1">
          <h1 className="text-5xl font-bold text-center">About Me</h1>
          <p className="mt-10 text-xl font-semibold">
            Hello there! My name is Sumit Kawor. I am currently studing in
            Nepathya College. My course is Bsc.Csit. I love coding.
          </p>
          <p className="mt-10 text-xl font-semibold">
            Currently I know some of the programming languages like c++
            programming , javaScript, python , c programming and Java. I am also
            fullstack developer also known as MERN developer. I also have
            interest Cyber security and Ethical Hacking.
          </p>
          <p className="mt-10 text-xl font-semibold">
            Hope Someday I will continue my career as Ethical Hacker. As for now
            I am learning Web Development and different programming language.
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Skills</h1>
          <div className="mt-10">
            <h1 className="text-2xl">Languages</h1>
            <div className="mt-6 flex flex-wrap gap-6">
              <button className=" btn">Python</button>
              <button className="btn">C/C++</button>
              <button className="btn">Html/Css</button>
              <button className="btn">JavaScript</button>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl ">FrameWorks/Libraries</h1>
            <div className="mt-6 flex flex-wrap gap-6">
              <button className="btn1">React</button>
              <button className="btn1">Nextjs</button>
              <button className="btn1">Node</button>
              <button className="btn1">Tailwind</button>
              <button className="btn1">Express</button>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl ">Tools</h1>
            <div className="mt-6 flex flex-wrap gap-6">
              <button className="btn2">Visual Studio Code</button>
              <button className="btn2">MongoDB</button>
              <button className="btn2">Git</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
