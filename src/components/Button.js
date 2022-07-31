// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const TYPE = ['btn--rounded', 'btn--secondary'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonType }) => {
  
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

const checkButtonType = TYPE.includes(buttonType) ? buttonType : SIZES[0];


  return (
    
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonType}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    
  );
};