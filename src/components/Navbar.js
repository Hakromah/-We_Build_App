import React from 'react';
import './NavbarStyle.scss';
import { NavLink, Link, Outlet } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<div className="nav-container">
				<Link className="logo" exact to="/">
					<h1>LOGO</h1>
				</Link>

				<div className="navigation">
					<div className="hamburger"></div>

					<ul className="uls">
						<li className="nav_list_item">
							<NavLink className="navLink" to="/">
								HOME
							</NavLink>
						</li>
						<li className="nav_list_item">
							<NavLink className="navLink" to="/about">
								ABOUT
							</NavLink>
						</li>
						<li className="nav_list_item">
							<NavLink className="navLink" to="/service">
								SERVICE
							</NavLink>
						</li>
						<li className="nav_list_item">
							<NavLink className="navLink" to="/pages">
								PAGES
							</NavLink>
						</li>
						<li className="nav_list_item">
							<NavLink className="navLink" to="/contact">
								CONTACT
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Navbar;
