import React from 'react'
import "./style.css"
import kjbj from "../../assets/KJBJ.jpg"
import logo2 from "../../assets/logo2.svg"

function SecThree() {
    return (
      <div className="full-width">
        <div className="insurance-container">
          <div className="insurance-header">
            <img className="logo1" src={kjbj} />
            <img className="logo2" width="170px" src={logo2} />
          </div>
          <div className="video-carousel-conc">
            <div className="five-div-conc">
                <div className="square-video partone"></div>
                <div className="square-video parttwo"></div>
                <div className="square-video partthree"></div>
                <div className="square-video partfour"></div>
                <div className="square-video partfive"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SecThree