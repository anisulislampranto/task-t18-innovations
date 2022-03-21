import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SignInCard from "../../Components/SignInCard/SignInCard";
import "./Home.css";
import image from "../../Images/image.png";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="header">
        <div>
          <h1>Sign in to</h1>
          <h2>Lorem ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
            aliquam? Totam, officiis voluptatem. Reiciendis vitae veritatis
            voluptatum et nam soluta, nisi doloribus laboriosam tempora
            blanditiis!
          </p>
          <div style={{ marginTop: "130px" }}>
            <p>Log In As</p>
            <div style={{ border: "1px solid gray" }}>
              <span>X</span>
              <img src="" alt="user" />
              <p>
                <strong>Name</strong>
              </p>
              <p>Active Days Ago</p>
            </div>
          </div>
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
