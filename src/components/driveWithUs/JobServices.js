import React from "react";
import { JobServicesCard, JobServicesCards, JobServicesContainer } from "./DriveWithUsStyles";

const JobServices = () => {
	return (
		<JobServicesContainer>
			<h2>Not Just Another Trucking Company</h2>
			<h4>Trucking & Freight Transportation Specialists</h4>
			<p>
				Whether you're looking for more prosperous truck driving jobs or are wondering how to become a truck
				driver, Buraq Global Logistics is waiting to welcome you. We're not just another trucking company but a
				family here to support you in an industry that lacks camaraderie, connection, and care.
			</p>
			<JobServicesCards>
				<JobServicesCard>
					<h3>We listen to our Drivers</h3>
					<p>
						Buraq Global Logistics uses an anonymous weekly survey by WORKHOUND to evaluate our company’s
						performance. This survey allows our drivers to provide positive and negative feedback which is
						routed to the ownership.
					</p>
					<p>
						<span>AND WE LISTEN</span> ….several changes have been made as a result of the feedback. We are
						always looking for better ways to improve our FAMILY company.
					</p>
				</JobServicesCard>
				<JobServicesCard>
					<h3>Qualifications</h3>
					<p>ALL APPLICANTS MUST:</p>
					<li>Have at least 12 months CDL Class A experience within the past 5 years.</li>
					<li>No more than three moving violations within the last 3 years.</li>
					<li>ALL DUIs, DWIs, Drug Offenses, or Felonies must be seven (7) years or older.</li>
					<li>Must be at least 23 years old.</li>
					<li>We ACCEPT MILITARY DRIVING EXPERIENCE</li>
				</JobServicesCard>
				<JobServicesCard>
					<h3>Highest Driver Raise in Our History</h3>
					<p>
						Make up to .56 to $0.61 cpm (cents per mile), $1000 referral bonus, and annual salary increases!
					</p>
					<p>Qualified drivers may receive up to $500 in orientation pay!</p>
				</JobServicesCard>
			</JobServicesCards>
		</JobServicesContainer>
	);
};

export default JobServices;
