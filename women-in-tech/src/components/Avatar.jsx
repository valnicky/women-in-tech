import React , {useState} from 'react';
import '../styles/App.scss';

 function Avatar(params) {
    const [enabled, setEnabled] = useState(true); 
    
    const src = `/images/woman${params.id}.jpg`;
    
    const className = enabled ? "" : "disabled";
    
    return (
       <picture className="pic"> 
             <img onClick= {()=>{setEnabled(!enabled)}} className ={className} src={src} alt='' />
        <span><em>{params.name}</em></span>
       </picture>
        
    )
}

export default Avatar;