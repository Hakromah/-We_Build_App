import Home from './Home';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import AboutHome from './routers/AboutHome';
import ServiceHome from './routers/ServiceHome';
import ContactHome from './routers/ContactHome';

function NavLayout({ togodark, clStyle }) {
	return (
		<div className="pppppages">
			<Navbar togodark={togodark} clStyle={clStyle} />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<AboutHome />} />
				<Route exact path="/service" element={<ServiceHome />} />
				<Route exact path="/contact" element={<ContactHome />} />
			</Routes>
		</div>
	);
}

export default NavLayout;
