import React,{useContext} from 'react'
import ComC from './ComC'
import { Firstname,Lastname } from './App'


function ComB() {
  const fname = useContext(Firstname)
const lname = useContext(Lastname)
  return (
    <>
    <h1>pooja my first name {fname} {lname}</h1>
    <ComC/>
    </>
   
  )
}

export default ComB