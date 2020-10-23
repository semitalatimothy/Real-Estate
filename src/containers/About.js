import React, { Component } from 'react';

export default class About extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Leon'
		};
	}
	render() {
		return (
			<div className="about">
			
			
				<div className="about-container">
					<h2>
						Work With our Experienced <br />
						Real Estate Brokers Today
					</h2>
					<h4>We are here to help you!</h4>
				</div>
				<div className="about-section">
				
					<div className="section-left">
						{/* <img src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt='' /> */}
					</div>
                    
					
					<div className="section-right">
						
                        <h2>About Us</h2>
						<p>
						  Tim's Real Estate is a registered company in Uganda dealing in prime Real Estate.

                           Over the years, we have built unshakable reputation as a highly Trusted real estate dealership.

                           We strive to offer the best real estate service in regards to home sales, brokerage, property management, home renovations and construction.

                           You can therefore count on us to deliver to our clientele  genuine service. We have learned from several years of experience exactly how to purchase property in Kampala. We will negotiate the best price, we will alert you to potential pitfalls, and keep an eye on all vendors and stakeholders on your behalf.

                           We are your local agent. The skills needed in sealing the deal on property in Kampala are an unusual mix of subtlety and bravado, decisiveness and cunning, and above all, Kampala tact. At Tim's Real Estate, that is our expertise.

                         
						</p>
						
                        <h2>Our Mission Statement</h2>
						<p>
						    Our mission is to modernize and progress the experience of buying and selling real estate by cultivating a spirit of collaboration, innovation, and integrity.
						</p>
						
                      
                       
						
						<h2>Our Core Values</h2>
						<p>
							We believe in dependability, integrity, honesty, and high
							experience. These core values are the foundation to help us
							provide our services to our clients with their satisfaction in
							mind.
						</p>
						
						
					
					</div>
					
					
				
				</div>
			</div>
    

        
        
        );
	}
}





