import React from 'react';
import Item from './Itemlang';
import './Fullstack.css';
import { IoDesktop, IoServerOutline, IoCloudy, IoSettings, IoBrush } from 'react-icons/io5';
import * as ImageIcons from './ImageIcons';


const Fullstack = () => {
return(
	<div className="fullstack">
		<div className="head-title">
			<h1>Developer Skill</h1>
		</div>
			<div className="box-wrapper">
				<div className="group">
					<div className="group-name">
						<h2><IoDesktop /> Front-end</h2>
					</div>
					
				    <div className="box">
				    	
					    	<Item 
				    		src={ ImageIcons.html }
				    		skill='HTML'
				    		percentage='81'

					    	/>

					    	<Item 
					    		src={ ImageIcons.css }
					    		skill='CSS'
					    		percentage='59'
					    	/>

					    	<Item 
					    		src={ ImageIcons.js }
					    		skill='Javascript'
					    		percentage='38'
					    	/>

					    	<Item 
					    		src={ ImageIcons.react }
					    		skill='react'
					    		percentage='33'
					    	/>
				    </div>
			    </div>
			    <div className="group">
					<div className="group-name">
						<h2><IoSettings /> Back-end</h2>
					</div>
			    	<div className="box">
					    <Item 
				    		src={ ImageIcons.php }
				    		skill='php'
				    		percentage='61'
				    	/>
				    	<Item 
				    		src={ ImageIcons.java }
				    		skill='java'
				    		percentage='33'
				    	/>
				    	<Item 
				    		src={ ImageIcons.nodejs }
				    		skill='node.js'
				    		percentage='15'
				    	/>
			    	
			    </div>
			    </div>
			    <div className="group">
					<div className="group-name">
						<h2><IoServerOutline /> Database</h2>
					</div>
				    <div className="box">
				    	
				    
					    <Item 
				    		src={ ImageIcons.mysql }
				    		skill='mysql'
				    		percentage='57'
				    	/>
				    	<Item 
				    		src={ ImageIcons.sqlite }
				    		skill='sqlite'
				    		percentage='33'
				    	/>
		
				    	
				    </div>
				</div>

				 <div className="group">
					<div className="group-name">
						<h2><IoCloudy /> Cloud</h2>
					</div>
				    <div className="box">
				    
				    
					    <Item 
				    		src={ ImageIcons.firebase }
				    		skill='firebase'
				    		percentage='3.3'
				    	/>
		
				    	
				    </div>
				</div>
				 <div className="group">
					<div className="group-name">
						<h2><IoBrush/> UI/UX</h2>
					</div>
				    <div className="box">
				    	
				    
					    <Item 
				    		src={ ImageIcons.mui }
				    		skill='material ui'
				    		percentage='13'
				    	/>
				    </div>
				</div>
		</div>	
	</div>
);

}
export default Fullstack;