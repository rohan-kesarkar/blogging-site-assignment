import React, { useState } from 'react'

export default function BlogInfo() {
   const [title, setTitle] = useState("")
   const [url, setUrl] = useState("")
   const [description, setDescription] = useState("")

   

   

   const handleData =()=>{
    
    if(!title){
        alert("title is required")
    }else if(!url){
        alert("url is required")
    }else if(!description){
        alert("description is required")
    }else{
        localStorage.setItem("title",title)
        localStorage.setItem("url",url)
        localStorage.setItem("description",description)
    }
    
    
   }
  return (
    <>
    <div className='App'>
      <h1>Blog Information</h1>
      Title: <input type="text"  placeholder='Enter Your Title Here'
      onChange={(e)=>setTitle(e.target.value)}
      />
      <br/>
      Image Url: <input type="text" placeholder='Enter Your Url Here'
      onChange={(e)=>setUrl(e.target.value)}
      />

      <br/>
      Decription
       <textarea  type="text"  placeholder='Enter Your description here'
       onChange={(e)=>setDescription(e.target.value)}
       />
       <br/>
       <button onClick={handleData} >Create</button>
       
    </div>
      
    </>
  )
}
