import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
	return (
		<div className="form-container">
			<div className="form-left">
				<h1 className="contact-title">
					REQUEST <span className="call">CALL BACK</span>
				</h1>
				<p className="form-text">
					{' '}
					Nonumy ipsum amet tempor takimata vero ea elitr. Diam diam ut et
					eos duo duo sed. Lorem elitr sadipscing eos et ut et stet justo,
					sit dolore et voluptua labore. Ipsum erat et ea ipsum magna
					sadipscing lorem. Sit lorem sea sanctus eos. Sanctus sit tempor
					dolores ipsum stet justo sit erat ea, sed diam sanctus takimata
					sit. Et at voluptua amet erat justo amet ea ipsum eos, eirmod
					accusam sea sed ipsum kasd ut.
				</p>
				<h3 className="form-quote">GET A QUOTE</h3>
			</div>
			<div className="form-right">
				<form className="main-form">
					<input type="text" name="name" placeholder="Your name" />{' '}
					<input type="email" name="email" placeholder="Your email" />
					<br />
					<input
						type="date"
						name="date"
						placeholder="call Back date"
						className="time"
					/>
					<input
						type="time"
						name="time"
						placeholder="call Back time"
						className="time"
					/>
					<textarea
						cols="150"
						row="340"
						placeholder="message"
						className="textarea"
					></textarea>
					<button type="submit" className="formBtn">
						SUBMIT REQUEST
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
