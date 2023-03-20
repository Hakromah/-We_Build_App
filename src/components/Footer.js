import React from 'react';
import '../components/Footer.scss';

function Footer() {
	return (
		<div className="footer_container">
			<div className="div_row">
				<div className="footer_left">
					<h1 className="h1text">
						<i class="fa-sharp fa-solid fa-city"></i>WEBUILD
					</h1>
					<div className="fleft_center">
						<p>
							Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos
							lorem nonumy. Tempor sea ipsum diam sed clita dolore eos
							dolores magna erat dolore sed stet justo et dolor.
						</p>
						<p>
							<i class="fa-solid fa-location-dot"></i> 123 street,
							Istanbul, Turkey
						</p>
						<p>
							<i class="fa-solid fa-phone"></i> +90 530 936 86 45
						</p>
						<p>
							<i class="fa-regular fa-envelope"></i> mail@domain.com
						</p>
						<div className="twitter_group">
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-facebook-f"></i>
							<i class="fa-brands fa-linkedin-in"></i>
							<i class="fa-brands fa-instagram"></i>
						</div>
					</div>
				</div>
				<div className="footer_right">
					<div className="rightL">
						<h4>QUICK LINKS</h4>
						<p>
							<i class="fa-solid fa-angle-right"></i>Home
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>About{' '}
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>Our Services
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>Meet the team
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>Contact Us
						</p>
					</div>
					<div className="rightR">
						<h4>POPULAR LINKS</h4>
						<p>
							<i class="fa-solid fa-angle-right"></i>Home
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>About{' '}
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>Our Services
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>Meet the team
						</p>
						<p>
							<i class="fa-solid fa-angle-right"></i>Contact Us
						</p>
					</div>
					<div className="rightB">
						<h4>NEWSLETTER</h4>
						<span className="inputSpan">
							<input
								className="inpt"
								type="text"
								placeholder="Your Email Address"
							/>
							<button className="signup">SIGN UP</button>
						</span>
					</div>
				</div>
			</div>

			<div className="footer_bottom">
				<div className="copyright">
					<a href="#!">
						{' '}
						<span className="sitName">&copy; Your Site Name</span>
						<span className="allRight">. All Rights Reserved.</span>
					</a>
				</div>
				<div className="shape"></div>
				<div className="design">
					<p className="pdown">
						Designed by <a href="#!">HTML Codex</a>{' '}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
