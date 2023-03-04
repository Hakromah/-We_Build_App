import React from 'react';
import './Service.scss';
import db from './ServiceData';
const Services = () => {
	return (
		<div className="service_container">
			<h1 className="service_header">
				WE PROVIDE THE BEST CONSTRUCTION SERVICES
			</h1>
			<div className="cards">
				{db &&
					db.map((items) => (
						<div className="service_card">
							<img
								className="service_img"
								src={items.img}
								alt="portfolio"
							/>
							<p className="service_icon">{items.service_icon}</p>
							<h1 className="service_title">{items.title}</h1>
							<p className="service_text">{items.text}</p>
							<p className="service_readMore">
								READ MORE {items.readMore}
							</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default Services;
