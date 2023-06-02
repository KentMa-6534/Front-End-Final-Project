import React from "react";
import Skills from "./Skills";
import Icons from "./Icons";

function Home() {
  return (
    <div className="p-10">
      <br></br>
      <h2 className="text-5xl py-2 font-medium" id="home-name">
        Kent Ma
      </h2>
      <br></br>
      <h3>Full-Stack Developer</h3>
      <p>
        I am a beginner full-stack developer currently learning to better hone
        my frontend and backend skills with a passion for game development.
      </p>
      <br></br>
        <Skills/>
        <Icons/>
    </div>
  );
}

export default Home;
