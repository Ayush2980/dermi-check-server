import { Fragment, useContext, useEffect, useState } from "react";
import { diseaseContext } from "../../contexts/disease.context";
import TabData from "./Tabs.component";
import Loader from "./subTabs/Loader.component";
import "./results.styles.css";
import img1 from "../assets/img/cards1.png"

const Result = ({ data }) => {
  return (
    <Fragment>
      <div className="result-container">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              {/* <img src={img1} class="d-block w-100" alt="..." /> */}
              <h1>Disease</h1>
              <h3>Prevetion</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id amet laborum eius nulla nisi quidem esse quasi sapiente aspernatur corrupti consectetur voluptates labore facilis laudantium quae quas ducimus enim atque, quod aut! Sunt, nam praesentium reprehenderit tenetur quo, quos recusandae velit, inventore corrupti cum aut nesciunt odio modi veritatis eum.</p>
            </div>
            <div class="carousel-item">
              
            </div>
            <div class="carousel-item">
              <img src={img1} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" style={{backgroundColor :"black" , borderRadius : "100px"}} aria-hidden="true"></span>
            <span class="visually-hidden"  >Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" style={{backgroundColor :"black" , borderRadius : "100px"}}  aria-hidden="true"></span>
            <span class="visually-hidden"  >Next</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Result;
