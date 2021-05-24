import React, { Component } from 'react';
import './project.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import YouTube from 'react-youtube';
import 'aos/dist/aos.css';
import AOS from 'aos';
export class Project extends Component
{
	componentDidMount()
	{
		// or simply just AOS.init();
		AOS.init({
			// initialise with other settings
			disable: 'mobile',
			duration: 2000,
			once: false,
			mirror: true,
			anchorPlacement: 'top-top',

		});
	}
	render()
	{
		const opts = {
			height: '350',
			width: '400',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 0,
			},
		};
		return (
			<div id="projects">
				<div className="main-project">
					<div className="sectionTitle">
						<div
							data-aos="slide-right"
							data-aos-mirror="true"
							data-aos-once="false"
							data-aos-duration="3000"
						>
							<h1>My Projects </h1>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="550"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="dTqmxKUfx3Y"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>
							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="550"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Blurry Tool</h1>
									<p>

										An image blurring application using
										ReactJS. Utilizes HTML Canvas to allow
										user blur certain region on mouse drag.
										User can clear blurs on image and also
										can download the image.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="150"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="bJKNInkGA2U"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>
							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="150"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Auctioner</h1>
									<p>
										Auction website using ExpressJS, MySQL
										and Handlebars. Utilised Fashe theme
										from colorlib. User login and
										registration validated and uses
										PassportJS and password hashes and
										stored in DB using Bcrypt-NodeJS. Only
										logged-in user can make bids. Prevents
										the Cross-Site Request Forgery(CSRF)
										attack by using CSURF module. Success
										and error messages displayed using
										connect-flash. User can add,update
										delete products to sell and also make
										bids. Password forgot/reset option via
										sendgrid implemented.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="50"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="ecs5bewkd6s"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>

							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="50"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Count-Down Timer</h1>
									<p>
										A vanilla JS application which count
										downs to new year using "Date" object
									</p>
								</div>
							</div>
						</div>
						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="50"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="Pv1-cIVYrqs"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>
							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="50"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Simple Quiz</h1>
									<p>
										A vanilla JS Quiz application using API
										fetch await to load questions
										dynamically.
									</p>
								</div>
							</div>
						</div>

						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="150"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="vxWS2ZajFk0"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>
							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="150"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Recipe</h1>
									<p>
										A vanilla JS Recipe application to show
										recipes via keyword or ID search.
										Favourite recipes can be saved.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="150"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="4NGxnMFTWFI"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>
							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="150"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Shopping Cart</h1>
									<p>
										A Shopping Cart application using
										ExpressJS, MongoDB, Handlebars. User
										login and registration validated and
										uses PassportJS and password hashes and
										stored in DB using Bcrypt-NodeJS.
										Prevents the Cross-Site Request
										Forgery(CSRF) attack by using CSURF
										module. Success and error messages
										displayed using connect-flash User can
										add,update delete and checkout products.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="450"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="4KJ7dt-PeCM"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>
							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="450"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Image Gallery</h1>
									<p>

										A PHP application which displays image
										uploaded by user in gallery.Features
										full screen size of image on click. User
										Registration and Login forms with
										validation. User can change password,
										profile photo in profile page.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="column">
							<div className="v-container">
								<div
									data-aos="zoom-in"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="650"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<YouTube
										videoId="T9KR9mJfSJg/edit"
										opts={opts}
										onReady={this._onReady}
									/>
								</div>
							</div>
							<div className="content">
								<div
									data-aos="slide-right"
									data-aos-anchor-placement="center-bottom"
									data-aos-delay="650"
									data-aos-mirror="true"
									data-aos-once="false"
									data-aos-duration="3000"
								>
									<h1>Task List</h1>
									<p>

										A simple task list application in
										ReactJS, which lets user to add and
										display tasks.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	_onReady(event)
	{
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
}

export default Project;
