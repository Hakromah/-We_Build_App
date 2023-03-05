import React, { useState } from 'react';
import NavLayout from './components/NavLayout';
import './components/Home.scss'


function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

	const colorStyle ={
		background: 'beige',
		cursor: 'pointer',
		color: 'grey',
		fontSize: '18px',
		borderRadius: '6px',
		marginRight: '10px'

	}

	return (
		<div className={isDarkMode && 'darkMode'}>
			<NavLayout togodark={toggleDarkMode} clStyle={colorStyle}/>
		</div>
	);
}

export default App;

