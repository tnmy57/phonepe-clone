import React from "react";
import "./style.css";
import Card from "../section-one/card";
import cardImage1 from "../../assets/card-images/card-img1.svg";
import cardImage2 from "../../assets/card-images/card-img2.svg";


const CardSec = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="packet">
          <Card
            image={cardImage1}
            heading={
              <>
                Insurance made <br /> easy.
              </>
            }
            para={
              <>
                Secure your life, health, <br /> vehicles & more!
              </>
            }
          />
          <Card
            image= {cardImage2}
            heading= {
              <>
                The best in Mutual <br /> Fund Investments
              </>
            }
            para={
              <>
                Invest your wealth and achieve <br /> your financial goals!
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CardSec;
