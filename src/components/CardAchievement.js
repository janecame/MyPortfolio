import React from 'react';

function CardAchievement(props) {



	return(
		<>	
				<div className="card">

					<div className="card-body">
						<img src={props.imgbody} alt="body"/>
					</div>
					<div className="card-footer">
						<div className="achieve-footer">
							<h1>{props.title}</h1>
							<p>Received date: {props.date}</p>
							<p>{props.description}</p>
						</div>
					</div>
				</div>	
		</>
	);
} 

export default CardAchievement;


				