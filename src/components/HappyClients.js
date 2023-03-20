import React, { useEffect, useState } from 'react';
import happyData from './Happy_Data';
import img3 from '../assets/images/testimonial.jpg';
import '../components/Happy.scss';

function HappyClients() {
	const [current, setCurrrent] = useState(0);

	useEffect(() => {
		const timmer = setTimeout(() => {
			if (current === 2) {
				setCurrrent(0);
			} else {
				setCurrrent(current + 1);
			}
		}, 3000);
		return () => clearInterval(timmer);
	}, [current]);

	return (
		<div className="client_container">
			<div className="h1div">
				<h1 className="h1Text">
					WHAT OUR <span className="happyRead">HAPPY CLIENTS</span> SAY!!!
				</h1>
			</div>
			<div className="main_area">
				<img
					className="leftImage"
					width="427px"
					height="488px"
					src={img3}
					alt="leftIm"
				/>
				<div className="slideContent">
					<div className="innerImg"> <img src={happyData[current].sldimg1} alt="images" /> </div>
					<div className="centerArea">
						<h4 className="h4Text">{happyData[current].nameText}</h4>
						<span className="prof">{happyData[current].frofe}</span>
						<p className="pText">
							<span className="quote">{happyData[current].quote} </span>
							{happyData[current].param}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HappyClients;
