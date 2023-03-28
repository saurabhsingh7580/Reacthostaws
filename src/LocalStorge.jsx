import React,{useState} from 'react'

function LocalStorge() {
    const [fname ,setFname] =useState("")
    const [lname ,setLname] =useState("")

    function handleChange(){
        var coreses=JSON.parse(localStorage.getItem("coreses") || "[]")
        var course={
            fname:fname,
            lname:lname,
        }
        coreses.push(course)
        localStorage.setItem("coures",JSON.stringify(coreses))

    }
  return (
    <div>
        <h1>
            Local Storge with Array And Object
        </h1>
        <input type="text" placeholder="Firstname" value={fname} onChange={(e)=>{setFname(e.target.value) }}/><br/><br/>
        <input type="text" placeholder="Lastname" value={lname} onChange={(e)=>setLname(e.target.value)}/><br/><br/>
        <button type='submit' onClick={handleChange}>Submit</button>
    </div>
  )
}

export default LocalStorge