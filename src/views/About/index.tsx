import React, { useEffect } from 'react';
import './index.scss';

import SocialButton from '../../components/SocialButton';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	useEffect(() => {
		document.title = 'Inc0gnit0Dev | About';
	}, []);

	return (
		<div id="about-container" className="container">
			<div className="row">
				<div className="col-md-5">
					<img
						className="img-fluid rounded-circle profile-img"
						src="/images/profile_image.png"
						alt="profile-dlt"
					/>
				</div>
				<div className="col-md-7 profile-info">
					<h1>Inc0gnit0Dev</h1>
					<p>Developer / Gamer</p>
					<div id="contacts" className="row">
						<div className="col-lg-1"></div>
						<div className="col">
							<SocialButton
								icon="GitHub"
								to="https://github.com/inc0gnit0dev"
								openInNewTab={true}
							/>
						</div>
						<div className="col">
							<SocialButton
								icon="Discord"
								copyOnClick="inc0gnit0dev"
							/>
						</div>
						<div className="col">
							<SocialButton
								icon="Twitch"
								to="https://www.twitch.tv/inc0gnit0dev"
								openInNewTab={true}
							/>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
