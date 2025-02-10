'use client'
import { HeartIcon } from "@heroicons/react/20/solid";
import { insertLike,removeLike } from "../lib/actions";
import clsx from "clsx";
import { useState } from "react";
export default({post_id, user_id, isLikeDInitial})=>{
    
    
    let [isLiked, setIsLiked] = useState(isLikeDInitial);
    function toogleLike(){
        if(isLiked){
            removeLike(post_id,user_id);
            setIsLiked(false);
        } else{
            insertLike(post_id, user_id);
            setIsLiked(true);
        }
    }

    return(
        <HeartIcon onClick={toogleLike} 
        className={clsx("w-8",{"text-red-600":isLiked})}/>
    )
}