import React from "react";
import "../Screens/HomeScreen.scss";
import BottonComponent from "./BottonComponent";
export default function FooterComponent() {
  return (
    <>
      <div className="subscribe__footer">
        <div className="heading">Subscribe and join thousands like you!</div>
        <div className="subscribe__box">
          <input placeholder="Vinay@business.com" />
          <BottonComponent placeholder="Subscribe" />
        </div>
      </div>
      <footer className="footer__container">
        <div className="footer__container__left">
          <div className="footer__heading">CONTACTS</div>
          <div className="footer__address">
            25 Ratna Park, Don Bausch Road, India
          </div>
          <div className="footer__contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 18 18"
            >
              <path
                id="ic_call_24px"
                d="M6.62,10.79a15.149,15.149,0,0,0,6.59,6.59l2.2-2.2a.994.994,0,0,1,1.02-.24,11.407,11.407,0,0,0,3.57.57,1,1,0,0,1,1,1V20a1,1,0,0,1-1,1A17,17,0,0,1,3,4,1,1,0,0,1,4,3H7.5a1,1,0,0,1,1,1,11.36,11.36,0,0,0,.57,3.57,1,1,0,0,1-.25,1.02Z"
                transform="translate(-3 -3)"
              />
            </svg>
            <a style={{ marginLeft: "8px" }}>9080000000</a>
          </div>
          <div className="footer__mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 20 16"
            >
              <path
                id="ic_email_24px"
                d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z"
                transform="translate(-2 -4)"
              />
            </svg>
            <a style={{ marginLeft: "8px" }}>info@myblog.com</a>
          </div>
        </div>
        <div className="footer__container__center">
          <div className="footer__heading">POPULAR</div>
          <div className="footer__address">
            <a>Free Travel videos</a>
          </div>
          <div className="footer__address">
            <a>Maps</a>
          </div>
          <div className="footer__address">
            <a>Hotel contact book</a>
          </div>
        </div>
        <div className="footer__container__right">
          <div className="load__btn">
            <button className="load__more">Contact Us</button>
          </div>
        </div>
      </footer>
    </>
  );
}
