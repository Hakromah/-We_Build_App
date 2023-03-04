import { useState, useEffect } from 'react';
import './Home.scss';
import home_data from './HomeData';
import '../components/Navbar.js';

const Home = () => {
	const [currentState, setCurrentState] = useState(0);


	useEffect(() => {
		const timer = setTimeout(() => {
			if (currentState === 1) {
				setCurrentState(0);
			} else {
				setCurrentState(currentState + 1);
			}
		}, 3000);
		return () => clearInterval(timer);
	}, [currentState]);

	const bgImageStyle = {
		backgroundImage: `url(${home_data[currentState].url})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		height: '100%',
	};

	const gotoNext = (currentState) => {
		setCurrentState(currentState);
	};

	return (
		<div className="home-container">
			<div style={bgImageStyle}></div>
			<div className="bgStyle">
				<div className="homeContents">
					<i className="icon_style">{home_data[currentState].homIcon}</i>
					<h1 className="home-text">{home_data[currentState].title}</h1>
					<button className="home-btn">
						{home_data[currentState].hbtn}
					</button>
				</div>
				<div className="carousel-angles">
					{home_data.map((homData, currentState) => (
						<li
							className="angles"
							key={currentState}
							onClick={() => gotoNext(currentState)}
						></li>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
