
import React from "react";
import "../css/Home.css"
import About from "./About";

const Home = () => {

    return (
        <div className="app">

            <div className="buttons">
                <button className="btn homeBtn">Home</button>
                <button className="btn aboutBtn">About</button>
                <button className="btn projectBtn">Projects</button>
            </div>

            <div className="container ">

                <div className="nameBox">
                    <p className="name fade-in-text">Maggie Rozell</p>
                    <p className="fullStack fade-in-text">Full-Stack Developer</p>
                </div>
            </div>
            <About />
        </div>
    )
}

console.log('home')
export default Home;



{/* <div className="lines">
                    <div className="verticalLine"></div>
                    <div className="verticalLine2"></div>
                    <div className="verticalLine3"></div>
                    <div className="verticalLine4"></div>
                    <div className="verticalLine5"></div>
                    <div className="verticalLine6"></div>
                
                </div> */}