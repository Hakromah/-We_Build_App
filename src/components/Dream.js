import React from 'react';
import portf_data from './DreamSm-Data';
import down_Data from './DownData';
import '../components/Dream.scss';

function Dream() {
	console.log(portf_data);

	const imgStyles = {
		with: '370x',
		height: '308px',
	};
	return (
		<div className="dream-container">
			<h1 className="texth1">
				SOME OF OUR <span className="project">POPULAR </span>DREAM PROJECTS
			</h1>

			<div className="dream-small">
				{portf_data &&
					portf_data.map((el) => (
						<div className="contents">
							<ul className="uls">
								<img className="photo" src={el.portfImg} alt="images" />
								<h6>{el.portfTitle}</h6>
							</ul>
						</div>
					))}
			</div>
			<div className="drem_pbsolute">
				{down_Data &&
					down_Data.map((ell) => (
						<div className="abso_relative">
							<span className="img-span">
								<img
									className="dwImages"
									src={ell.downImg}
									style={imgStyles}
									alt="down images"
								/>
							</span>
							<i className="plusOnHover">{ell.hoverPlus}</i>
							<a href={ell.ahref} className="midle-box">
								<h4 className="dwh4">{ell.projetText}</h4>
								<div className="spann">
									<i className="mpmarker">{ell.mapMarker}</i>
									<p className="address">{ell.address}</p>
								</div>
							</a>
						</div>
					))}
			</div>
		</div>
	);
}

export default Dream;
