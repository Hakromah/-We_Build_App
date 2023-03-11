import React from "react";
import './Contacts.scss'
function Contacts() {
  return (
    <div className="contact-container">
     <div className="bgImg">
      <h1 className="con-title">Contact</h1>
      <p><span className="con-home">Home</span> / Contact</p>
     </div>

     <div className="bottom-container">
      <div className="map">
        Map
      </div>
      <div className="form-contact">
        <form>
          <input type='text' placeholder="Your Name" required />
          <input type='text' placeholder="Your Email" required />
          <input type='text' placeholder="Subject" required />
          <textarea cols={8}rols={15}/>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
     </div>
    </div>
  );
}

export default Contacts;
