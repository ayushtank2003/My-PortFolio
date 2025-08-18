import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <div id="home" className="bg-[#2e585a]">
      <Navbar />
      <Profile />
    </div>
  );
};

export default Home;
