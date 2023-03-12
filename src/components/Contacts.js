import React from "react";
import "./Contacts.scss";
function Contacts() {
  return (
    <div className="contact-container">
      <div className="bgImg">
        <div className="bg-dark">
          <h1 className="con-title">Contact</h1>
          <p className="text">
            <span className="con-home">Home</span> <span> / Contact</span>
          </p>
        </div>
      </div>

      <div className="middle-container">
        <div className="h1-div">
          <h1 className="middle-title">
            {" "}
            PLEASE <span className="cl-orange">FEEL FREE</span> TO CONTACT US{" "}
          </h1>
        </div>
        <div className="bottom-container">
          <div className="map">
            <iframe
              title="map"
              className="map-content"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d192823.68765637747!2d29.13279980566406!3d40.962424023465104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1678540407549!5m2!1str!2str"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="form-contact">
            <form className="form">
              <div className ='inpt-div'>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="inpt-field1"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  required
                  className="inpt-field"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="subject-field"
                />
              </div>

              <textarea rows={10} cols={80} className="txt-area" />
              <button type="submit" className="form-submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
