
import React from "react";
import classNames from "classnames";
import "../css/Sparkle.css"


const Sparkle = ({active, disabled}) => {

    let starPort = 500;
    let size = "small";

for (let i= 0; i < starPort; i++) {
    if(i % 2 === 0) {
        size = 'small';
      } else if(i % 3 === 0) {
        size = 'medium';
      } else {
        size = 'large';
      }
}
    return (

        <div className="sparkleApp">
            <div className="sparkle"
            
            ></div>
        </div>

    )
}

export default Sparkle;

// className={classNames({
//                 sparkle: true,
//                 small: true,
//                 medium: true,
//                 large: true,
//                 active: active,
//                 disabledd: disabled

//             })}


