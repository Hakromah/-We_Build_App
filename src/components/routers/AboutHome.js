import React from 'react';
import About from '../About';
import ContactForm from '../ContactForm';
import ExpertArea from '../ExpertArea';
import './AboutHome.scss'
function AboutHome() {
	return (
		<div className='aboutHome'>
		 <div className="bgImg">
        <div className="bg-dark">
          <h1 className="con-title">About</h1>
          <p className="text">
            <span className="con-home">Home</span> <span> / About</span>
          </p>
        </div>
      </div>
			<About />
			<ContactForm />
			<ExpertArea />
		</div>
	);
}

export default AboutHome;
