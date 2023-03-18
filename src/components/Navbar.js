import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/NavbarStyle.scss';

function NavBar({ on, defaultColor, darkMode }) {
	const [close, setClose] = useState(false);

	const handleClick = () => setClose(!close);

	return (
		<>
			<div className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						WEBUILD
					</NavLink>
					<ul className={close ? 'nav-ul openClose hideSide' : 'nav-ul'}>
						<li className="nav-items">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-items">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								About
							</NavLink>
						</li>
						<li className="nav-items">
							<NavLink
								exact
								to="/service"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Services
							</NavLink>
						</li>
						<li className="nav-items">
							<NavLink
								exact
								to="/contact"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Contact
							</NavLink>
						</li>

						{/* {Dark mode area} */}
						<li className='nav-items'>
							<NavLink className="dayNight">
								{!on && (
									<ion-icon
										onClick={darkMode}
										name="moon-outline"
									></ion-icon>
								)}
								{on && (
									<ion-icon
										onClick={defaultColor}
										name="sunny-outline"
									></ion-icon>
								)}
							</NavLink>
						</li>
					</ul>
					<div className="nav-icons" onClick={handleClick}>
						<i
							className={
								close ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
							}
						></i>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
