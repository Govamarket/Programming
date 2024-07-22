import React, { Fragment } from "react";
import { CiSearch } from "react-icons/ci";
import { BsMic } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";

import "./Landpage.css";
function Landpage() {
  return (
    <Fragment>
      <div className="landpage">
        <div className="container">
          <section className="border-box">
            <span>
              <h1>Health Matters</h1>
            </span>
            <span>
              <img src="./group20.png"></img>
            </span>
          </section>

          <section className="land-text">
            <h1>
              {" "}
              <span className="blue">One Step Soution</span>
              <br />
              for all your dietary <br />
              needs.{" "}
            </h1>
          </section>

          <section className="article">
            <p>
              Using your BMI index we caculate whether the dish is suitable for{" "}
              <br />
              you
            </p>
          </section>

          <section className="inp-sr">
            <div className="serchInput">
              <input placeholder="Search your product"></input>
              <div className="inputIcon">
                <CiImageOn className="src" />
                <BsMic className="audio" />
                <CiSearch className="search" />
              </div>
            </div>
          </section>
        </div>

        <div className="flex-side">
          <img src="./doc.png"></img>
        </div>
      </div>

      <div className="new-page">
        <section className="text-h">
          <p>FEATURES WE PROVIDE</p>
        </section>

        <div className="rows">
          <section className="col-1">
            <h1>
              Calculating BMI <br /> is easier <img src="./group20.png"></img>
            </h1>
            <p>
              We caculate your BMI index from <br />
              data like age, height, weight.
            </p>
          </section>

          <section className="col-2">
            <img src="./diet 1.png"></img> <br />
            <h2>Food Recomendation</h2> <br />
            <p>
              We provide food <br />
              rocomendtion according to your <br />
              calories requirements.
            </p>
          </section>

          <section className="col-3">
            <img src="./chatbot 1.png"></img> <br />
            <h2>interactive Chatbot</h2>
            <p>
              Solve your queries <br />
              by interacting with <br />
              our bot.
            </p>
          </section>

          <section className="col-4">
            <img src="./chart.png"></img> <br />
            <h2>Nutritional Value</h2>
            <br />
            <p>
              Get all the nutritional <br /> values of your <br />
              preferred dish
            </p>
          </section>
        </div>
      </div>

      <div className="container-1">
        <section className="head-section">
          <span>
            <p>HELP TOPICS</p>
          </span>{" "}
          <br />
          <h2>Enhance Your Lifestyle</h2>
        </section>

{/* food items containers display-flex and grid  */}
        <section className="new-rows">
          <div>
            <span>
              <img src="./cake.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
              <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
          </div>
{/* First row of new rows end */}
          <div>
            <span>
              <img src="./ice.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
              <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
          </div>
          {/* second row new end */}

          <div>
            <span>
              <img src="./orage.png"></img>
            </span>{" "}
            <span className="header">
            <p>Product Name</p>
          </span>{" "}
          <br />
          <span className="child-text">
            <p>
              Lorem ipsum <br />
              ament dolor, etit tu
            </p>
          </span>
          </div>{" "}
        
          <div>

            <span>
              <img src="./meat.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
              <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
          </div>
          <div>
            <span>
              <img src="./burger.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
              <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
          </div>
        </section>

{/* New containe same-co */}
        <div className="same-con">
          <div>
            <span>
            <img src="./meat.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
            <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
             
          </div>

          <div>
            <span>
            <img src="./burger.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
            <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
             </span>
          </div>
          <div>
            <span>
            <img src="./orage.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
              <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
          </div>
          <div>
            <span>
            <img src="./ice.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
              <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
          </div>
          <div>
            <span>
            <img src="./cake.png"></img>
            </span>{" "}
            <br />
            <span className="header">
              <p>Product Name</p>
            </span>{" "}
            <br />
            <span className="child-text">
              <p>
                Lorem ipsum <br />
                ament dolor, etit tu
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* end here */}

    
    </Fragment>
  );
}

export default Landpage;
