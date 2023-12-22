import React, {useState} from 'react'

const Card = ({str, maxLength, index}) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div style={{paddingTop:"10px", paddingBottom:"10px", borderBottom:"1px dashed #333"}}>
       {hidden ? str.substring(0, maxLength).trim() : str}
       { 
        hidden ? (<button onClick={()=>setHidden(false)}>read more</button>) : 
                 (<button onClick={()=>setHidden(true)}>read less</button>)
       }  
    </div>
  )
}

export default Card