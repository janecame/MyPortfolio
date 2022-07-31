import React from 'react';
import './circles.css';


const POSITION = ['position-primary', 
				  'position-bottom-right', 
				  'position-bottom-left', 
				  'position-top-right', 
				  'position-top-left',
				  'position-top',
				  'position-bottom'];


const BackgroundCircles = ({boxPosition}) => {

const checkBoxPosition = POSITION.includes(boxPosition) ? boxPosition : POSITION[0];

return(
	

  
		  <div className={`box-circles ${checkBoxPosition}`}>
		    <div className="spin-container">
		      <div className="shape">
		        <div className="bd"></div>
		        
		      </div>
		     </div>
		  </div>

	

		

);

}
export default BackgroundCircles;