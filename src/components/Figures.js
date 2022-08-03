import React from 'react';
import './figures.css';


const POSITION = ['position-primary', 
				  'position-bottom-right', 
				  'position-bottom-left', 
				  'position-top-right', 
				  'position-top-left',
				  'position-top',
				  'position-bottom'];

const SIZES = ['box--large', 'box--medium', 'box--small'];

export const Circle = ({boxPosition, boxSize}) => {

	const checkBoxPosition = POSITION.includes(boxPosition) ? boxPosition : POSITION[0];
	const checkBoxSize = SIZES.includes(boxSize) ? boxSize : SIZES[0];


	return(
			  <div className={`box-circles ${checkBoxPosition} ${checkBoxSize}`}>
			    <div className="spin-container">
			      <div className="shape">
			        <div className="bd"></div>
			        
			      </div>
			     </div>
			  </div>	

	);

};


