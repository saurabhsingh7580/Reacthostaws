import React from 'react'
import { Firstname,Lastname } from './App'


function ComC() {
  return (
    <div>
      <Firstname.Consumer>
        {
          (fname)=>{
            return(
             <Lastname.Consumer>
              {
                (lname)=>{
                  return(
                    <>
                    <h1>My  name {fname} {lname}</h1>
                  
                    </>
                  )
                }
              }
             </Lastname.Consumer>
            )
          }
        }
      </Firstname.Consumer>
    </div>
  )
}

export default ComC