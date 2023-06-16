 import React, {useState} from 'react';
import TodolistDelete from './TodolistDelete';



function Todolist() {

    const[username, setState] = useState(""); 
    const[items,setItem] = useState([]);
   

    // ----------- Show Data----------------------
    const handleClick = (oldItems) => {   
      setItem((oldItems) => {
        return [...oldItems, username]
       });   
       setState("");   
    };

    // ------------ Delete Item ------------------

    const deleteItem = (id) => {
      console.log("delete");
      setItem((oldItems) => {
        return oldItems.filter((arrElement, index) =>{
          return index !== id;

        });
      });
    }
   

  return (
    <div>
          
    <div className="container">
         <h1 className="text-center m-5 fw-bold">Todo App</h1>
         <form>
        <div className="row">
          <div className="col-md-10">

            <input className="form-control form-control-lg mb-3 shadow" id="username" type="text" 
              name="name" value={username} onChange={(e) => setState(e.target.value)}
            placeholder="Enter Your Name" aria-label=".form-control-lg example" autoComplete='off'/>

          </div>
          <div className="col-md-2">
           <button type="button" className="btn btn-warning shadow btn-lg text-white" 
            onClick={handleClick}
            >Add Name</button>
          </div>
        </div>
        </form>
      
        <ul>
       
          <li>
          <div className='row'>
            <div className='col-md-3'>
                <h5>Sr.No</h5>
              </div>
              <div className='col-md-3'>
                <h5>Name</h5>
              </div>
              <div className='col-md-3'>
                <h5>Update</h5>
              </div>
              <div className='col-md-3'>
               <h5>Delete</h5>
              </div>
            </div>
            <hr />
          </li>

          {items.map((itemval,index) => {
                return <TodolistDelete
                 key={index} 
                 id={index}
                 text={itemval}
                  onSelect={deleteItem}
                  />

                })}

         
          

         
      
      </ul>

      
    </div>
   
    </div>
  )
}

export default Todolist