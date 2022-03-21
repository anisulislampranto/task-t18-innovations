import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SignInCard from "../../Components/SignInCard/SignInCard";
import "./Home.css";
import image from "../../Images/image.png";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="navbar">
        <div>
          <h1>Sign in to</h1>
          <h2>Lorem ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
            aliquam? Totam, officiis voluptatem. Reiciendis vitae veritatis
            voluptatum et nam soluta, nisi doloribus laboriosam tempora
            blanditiis!
          </p>
        </div>
        <div>
          <img width={"300px"} src={image} alt="" />
        </div>
        <div>
          <SignInCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
