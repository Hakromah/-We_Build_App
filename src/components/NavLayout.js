//import Contacts from './Contacts';
import About from './About'
import Services from './Services'
import Home from './Home';
import Navbar from './Navbar';
import Pages from './Pages';
import { Routes, Route } from 'react-router-dom';

function NavLayout({togodark, clStyle}) {
	return (
		<div className='pppppages'>
			<Navbar togodark={togodark} clStyle={clStyle}/>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About/>} />
				<Route exact path="/service" element={<Services/>}/>
				<Route exact path="/pages" element={<Pages/>} />
				{/* <Route exact path="/contact" element={<Contacts />} /> */}
			</Routes>
			<About/>
			<Services/>
		</div>
	);
}

export default NavLayout;


