import React from 'react';

function Itemlang(props) {

	const style = {
        width: props.percentage + '%'
    }

	return(
		<>	
			<div className="item">
				<img src={props.src} className="img" alt="item-img"/>
				<div className="item-info start-at-bottom">
					<div className="skillbox gradient">
				           <p>{props.skill}</p>
				           <p>{props.percentage}%</p>
				           <div className="meter">
				              <span style={style}><span className="progress"></span></span>
				          </div>
				    </div>
				</div>
			</div>
		</>
	);
} 

export default Itemlang;

		