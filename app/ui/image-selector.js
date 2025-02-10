'use client'
import {useState} from "react"
import Image from "next/image"
export default()=>{
    const[imagen, setImagen]= useState("/hero-desktop.png")
    function preview(ev){
        setImagen(URL.createObjectURL(ev.target.files[0]))
    }
    
    return(
        <>

            <label htmlFor="myfs">
                <Image id=""img src={imagen} width={24} height={24} alt="preview"/>
            </label>
            <inpu id="myfs" type="file" name="media" hidden onChange={preview} required/>
        </>

    )
}