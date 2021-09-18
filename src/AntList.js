import React from "react";
import axios from "axios";
import {  Button  } from "antd"
import  { useState, useEffect } from 'react';
import "./Antlist.css"


import {List, Typography} from "antd";

export default function PersonList() {
  
  const[persons,setstate] = useState([])
  
  
  
  
  

  useEffect(() => {
    axios.get(`http://localhost:3000/users`).then((res) => {
      const personsx = res.data;
      console.table(personsx);
      setstate(personsx);
      
      
    });
  },[]); 
 

  return (
    <div> 
        <List
          header={<div>Users</div>}
       
          bordered
          dataSource= {persons.map((person) => person.user.username )}
          renderItem={(item,index) => (
            
           <List.Item >
              {item} 
             <span> </span>
             
         <Address person={persons[index]}> </Address>
          <span>           </span>
           <Personaldetails  person={persons[index]}> </Personaldetails>
           </List.Item>
          )}
        />  
         </div>
      
      


    );
  }


function Address (props){
    console.table(props.person)
    console.log(props.person.user.Address)
    const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
    return (
        <>
     <Button onClick={()=>toggle()} > Address </Button>
        
     {isOpened && (
         <table>
         <th>Address</th>
         <th>pincode</th>
     <tr>  <td>  <Typography.Text >{props.person.user.Address}</Typography.Text > </td>
     <td>  <Typography.Text >{props.person.user.pincode} </Typography.Text > </td> </tr>
     </table>
      )}
    </>
);
}

function Personaldetails (props){
   
    
    const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
    return (
        <>
    <Button onClick={()=>toggle()} > Personaldetails </Button>
        
     {isOpened && (
        <table>
    <th>Fathersname</th>
    <th>Mothersname</th>
    <th>Email</th>
    <th>Birthday</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Department</th>

      <tr> <td>  <Typography.Text >{props.person.user.Fathersname}</Typography.Text >  </td> 
       
       <td>  <Typography.Text >{props.person.user.Mothersname}</Typography.Text ></td> 
        
       <td>     <Typography.Text >{props.person.user.Email} </Typography.Text > </td> 
       
       <td>  <Typography.Text >{props.person.user.Birthday}</Typography.Text > </td> 
        
       <td>     <Typography.Text >{props.person.user.Age} </Typography.Text ></td> 
         
       <td>  <Typography.Text >{props.person.user.Gender} </Typography.Text > </td> 
       
       <td> <Typography.Text >{props.person.user.Department} </Typography.Text > </td> </tr>
      </table>
         
      )}
    </>

    );
}