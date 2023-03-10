import React from 'react';
import expertData from './Expert_Data';
import '../components/Expert.scss'
function ExpertArea() {
	return (
		<div className="section">
			<h1 className="title_h1">
				WE ARE{' '}
				<span style={{ color: '#FD5D14' }}>PROFESSIONAL & EXPERT</span>{' '}
				WORKERS
			</h1>
			<div className="centerArea">
				{expertData &&
					expertData.map((el) => (
						<div className="items">
							<img className='images1' src={el.team1} alt="image_1" />
							<div className="sideIcons">
								{el.twitter}
								{el.facebook}
								{el.linkedin}
								{el.instagram}
								{el.youtube}
							</div>
							<div className="team_names">
								<h4>{el.names}</h4>
								<span>{el.position}</span>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default ExpertArea;
