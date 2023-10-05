import React, { useEffect, useState } from "react";


export function Test(){
    const [txt,setTxt] = useState('')
    const [img,setImg] = useState('')
    const [data,setData] = useState([])


    const handleUpload = (e) =>{
        console.log(e.target.files[0])
       
    }



    return(
        <div>
           
             <input type="file" onChange={(e)=>handleUpload(e)} /><br/><br/>
             
        </div>
    )
}