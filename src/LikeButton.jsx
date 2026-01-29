import { useState } from "react";

function LikeButton() {
    let [isLiked, setisLiked] = useState(false);
    let toggleLike = ()=> {
      setisLiked(!isLiked);
     
    };
    return ( 
       <div style={{textAlign:" center",}}>
        <p onClick= {toggleLike}>{isLiked ? ( <i class="fa-solid fa-heart" style={{color:"red"}}></i>) : (<i class="fa-regular fa-heart"></i>)}</p>
       </div>
     );
}

export default LikeButton;