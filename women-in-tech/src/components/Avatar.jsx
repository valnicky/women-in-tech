import React from 'react';
 function Avatar(params) {
    const src = `../images/woman${params.id}.jpg`;
    return (
        <div>
        
       <picture> 
             <img src={src} alt='' />
        <span><em>{params.name}</em></span>
       </picture>
        </div>
    )
}

export default Avatar;