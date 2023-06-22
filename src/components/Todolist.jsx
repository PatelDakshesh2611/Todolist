import React from 'react'
import { useState,useEffect } from 'react'

import { Stack,TextField ,Button} from '@mui/material'
import './design.css'
const Todolist = () => {
    
    const[inp,upd1]=useState('')
    const[data,upd]=useState([])
   function show(){
     if(localStorage.getItem('data')){
      var data1=localStorage.getItem('data').split(',')
      upd(data1)
     }
     
   }
   function add(){
    var flag=1
     data?.map((u)=>{
      if(inp===u){
        alert("Task already exist")
        flag=0
      }
     })
     if(flag===1){
     if(inp){
     var star=[...data,inp]
     upd(star)
     localStorage.setItem('data',star)
     }
     
     else{
        alert("Enter some value")
     }}
     
   }
   function deletee(dataa){
    var d=data?.filter((u)=>{
        if(u!==dataa){
            return u
        }
    })
    upd(d)
    localStorage.setItem('data',d)
   }
   function clicked(d){
    const date = String(new Date().getDate());
    const year =String(new Date().getFullYear());
    const st='completed on '+date+'/'+year
     var dat=data?.map((u)=>{
        if(u===d){
          return st
        }
        else{
          return u
        }
     })
     upd(dat)
   }
   useEffect(()=>{
    show()
   },[])
  return (
    <div>
      <marquee  behavior="" direction="">Once you have clicked on any object of Todolist it is consider as you have finished that task and the date of completion will be display. </marquee>
      <div className="container">
        <h1 className='h1container'>To Do List</h1>
        <TextField onChange={(e)=>(upd1(e.target.value))} className='field' variant='filled' label='Title...'/>
        <Button onClick={()=>{add()}} className='button' variant='contained' size='large' color='info'>Add</Button>
        <div class="list-group list">
   { data?.map((u)=>{
    return(
        <>
<Stack gap={1} direction={'rows'}>
  <a onClick={()=>{clicked(u)}} class="list-group-item list-group-item-action">{u} </a><Button onClick={()=>(deletee(u))}  variant='outlined' size='small'>Delete</Button>
  </Stack>
  </>
    )
})
   }
  </div>
      </div>
      
    </div>
  )
}

export default Todolist
