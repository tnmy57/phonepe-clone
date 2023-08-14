import React from "react";
import "./style.css";
import Para from "./Para";

const SecTwo = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="banner2">
          <h1>Simple,Fast & Secure</h1>
          <Para
            heading="One app for all things money."
            para="Pay bills, recharge, send money, buy gold, invest and shop at your favourite stores."
            spanClass="content-bar"
          />
          <Para
            heading="Pay whenever you like, wherever you like."
            para="Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card."
            spanClass="content-bar"
          />
          <Para
            heading="Find all your favourite apps on PhonePe Switch."
            para="Book flights, order food or buy groceries. Use all your favourite apps without downloading them."
            spanClass=""
          />
        </div>
        <div className="video-con">
          <video autoPlay muted loop>
            <source
              src="https://website.phonepe.com/assets/page/home-fast-secure-v3.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
