import axios from "axios";
import React  from "react";
import { useState } from "react";

function Del() {
  const [search,setSearch]=useState("");
  const searchBook=(evt)=>{
          axios.delete('http://127.0.0.1:8080/delete/'+search)
          .then( alert("Deleted S.No: "+search))
          .catch(err=>console.log(err))
  }
return (
  <>
          <div>
              <h2>Delete Book</h2>
              <div>
                  <input type="text" placeholder="enter"  value={search} onChange={e=>setSearch(e.target.value)}/>
                      <button onClick={searchBook}>Enter</button>
                 
                  
              </div>
              
               
          </div>
    
      </>
);
}

export default Del;