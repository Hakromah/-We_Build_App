import React from 'react';
import ContactForm from '../ContactForm';
import Footer from '../Footer';
import HappyClients from '../HappyClients';
import Services from '../Services';
import './ServicesHome.scss';
function ServiceHome() {
	return (
		<div className="serviceHome">
			<div className="bgImg">
				<div className="bg-dark">
					<h1 className="con-title">Service</h1>
					<p className="text">
						<span className="con-home">Home</span> <span> / Service</span>
					</p>
				</div>
			</div>
			<Services />
			<ContactForm />
			<HappyClients />
			<Footer />
		</div>
	);
}

export default ServiceHome;
