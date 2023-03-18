import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './components/Home.scss';
import NavBar from './components/Navbar';
import AboutHome from './components/routers/AboutHome';
import ContactHome from './components/routers/ContactHome';
import ServiceHome from './components/routers/ServiceHome';

function App() {
	const [on, setOn] = useState(false);

	const darkMode = () => {
		setOn(true);
	};
	const defaultColor = () => {
		setOn(false);
	};

	const darkCl = {
		background: 'black',
	};

	const lightCl = {
		background: '#fff',
	};

	return (
		<div style={on ? darkCl : lightCl}>
			<NavBar on={on} darkMode={darkMode} defaultColor={defaultColor} />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<AboutHome />} />
				<Route exact path="/service" element={<ServiceHome />} />
				<Route exact path="/contact" element={<ContactHome />} />
			</Routes>
		</div>
	);
}

export default App;
