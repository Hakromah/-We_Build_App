// import React from 'react';
// import './NavbarStyle.scss';
// import { NavLink, Link, Outlet } from 'react-router-dom';

// function Navbar() {
// 	return (
// 		<>
// 			<div className="nav-container">
// 				<div className="navigation">
// 					<Link className="logo" exact to="/">
// 						<h1>LOGO</h1>
// 					</Link>
// 					<input type="checkbox" className="toggle-uls" />

// 					<div className="hamburger"></div>

// 					<ul className="uls">
// 						<li className="nav_list_item">
// 							<NavLink className="navLink" to="/">
// 								HOME
// 							</NavLink>
// 						</li>
// 						<li className="nav_list_item">
// 							<NavLink className="navLink" to="/about">
// 								ABOUT
// 							</NavLink>
// 						</li>
// 						<li className="nav_list_item">
// 							<NavLink className="navLink" to="/service">
// 								SERVICE
// 							</NavLink>
// 						</li>
// 						<li className="nav_list_item">
// 							<NavLink className="navLink" to="/pages">
// 								PAGES
// 							</NavLink>
// 						</li>
// 						<li className="nav_list_item">
// 							<NavLink className="navLink" to="/contact">
// 								CONTACT
// 							</NavLink>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 			<Outlet />
// 		</>
// 	);
// }

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/NavbarStyle.scss';

function NavBar({togodark, clStyle}) {
	const [close, setClose] = useState(false);


	const handleClick = () => setClose(!close);



	return (
		<>
			<div className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						CodePractice
					</NavLink>
					<button onClick={togodark} style={clStyle}>COLORS</button>
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
