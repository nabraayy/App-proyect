'use client'
import {useState} from "react"
import Image from "next/Image"
export default()=>{
    const[imagen, setImagen]= useState("/hero-desktop.png")
    function preview(ev){
        setImagen(URL.createObjectURL(event.target.files[0]))
    }
    
    return(
        <>

            <label htmlFor="myfs">
                <Image src="/hero-desktop.png" width={24} height={24} alt="preview/>
            </label>
            <inpu id="myfs" type="file" name="media" hidden onChange={preview}/>
           

    )
}