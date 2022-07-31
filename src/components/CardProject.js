import React from 'react';
import { Link } from 'react-router-dom';



function CardProject(props) {

	const programArray = props.imglist;


	return(
		<>	
			<Link to='/projects'>
				<div className="card">
					<div className="card-header">
						{/*{programArray?.map((img, i) => 
						        <div className={"language " + (i === 0 ? "active" : "")}>
						          <img src={img} alt="..." key={img}/>
						        </div>
						    )}

						{featureArray?.map((feature, i) => 
						        <div className={"features " + (i === 0 ? "active" : "")}>
						         	<p>{feature}</p>
						        </div>
						    )}
						*/}
						<div>
							<p>{props.title}</p>
							<p>{props.subTitle}</p>
								
						</div>
						
						
					</div>
					<div className="card-body">
						<img src={props.imgbody} alt="body"/>
					</div>
					<div className="card-footer">
						<div className="wrap-language">
						  	{programArray?.map((feature) => 
						        <div className="language ">
						          {feature}
						        </div>
						  	)}
						</div>
					</div>
				</div>
			</Link>	
		</>
	);
} 

export default CardProject;


				