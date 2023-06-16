import React, {useEffect, useState} from 'react'
import './main.css';
import { useNavigate } from 'react-router-dom';

// ---------------set data on localstorage--------------

const getLocalItems = () => {
 let list =  localStorage.getItem('lists');

 if(list){
  return JSON.parse(localStorage.getItem('lists'));
 }
 else{
  return [];
 }
 } 
export default function ToDo() {

    const [product , setProduct] = useState("");  // -----------Enter Data----
    
    const [addItems , setItem] = useState(getLocalItems()); //-------show data -------

    const [toggleSubmit, setToggleSubmit] = useState(true); // -----Change Icon when we click on edit ----

    const [isEditItem , setEdititem] = useState(null); //---Edit Item ------
    //------------addItems ----------------------------
    const addItem = () => {
        if(!product){
           alert('Plz Enter valid data');
        }
        else if(product && !toggleSubmit){
          setItem(addItems.map((prod) => {
              if(prod.id === isEditItem){
                return{...prod, name:product}
              }
              return prod;
            })
          )
          setProduct('');

         setToggleSubmit(true);

         setEdititem(null);
        }
        else{
          const allInputData = {id: new Date().getTime().toString(), name:product}
            setItem([...addItems, allInputData]);
            setProduct('');
        }
    }
// ------------- delete item ---------------
    const deleteItem = (ind) => {
        setItem((oldItems) => {
          return oldItems.filter((prod) =>{
            return ind !== prod.id;
  
          });
        });
      }

      // ---------------Update Item----------------------

      const editItem = (id) => {
         let  newEditItem = addItems.find((prod) => {   // Select data on input field 
          return prod.id === id          
         });
         console.log(newEditItem);

         setProduct(newEditItem.name);

         setToggleSubmit(false);

         setEdititem(id);
      }

      //----------------- get localStorage data-----------------
      useEffect(() => {
        localStorage.setItem('lists' , JSON.stringify(addItems))
      }, [addItems])


      const navigate = useNavigate(); // ---Go back -----
  return (
    <>
    <div className='outer-box'>
      <div className='container'>
         <h2 className='text-center text-white pt-3'><span>T</span>odo <span>A</span>pp</h2>
        <div className='row'>
          <div className='col-md-12 col-sm-12 col-lg-12'>
            <div className='inner-box mb-auto'>
                <div className='row'>
                    <div className='col-lg-10 col-md-10 col-sm-8'>
                    <input className="form-control mb-3 shadow" id="username" type="text" 
                      name="name" value={product} onChange={(e) => setProduct(e.target.value)}
                    placeholder="Enter Your Product" aria-label=".form-control example" autoComplete='off' />
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-4'>

                    {

              toggleSubmit ?  <button type="button" className="btn btn-info shadow text-white" data-bs-toggle="tooltip" 
              data-bs-placement="right" title="Add Your Product"
                onClick={addItem}
              ><i className="fa fa-plus" aria-hidden="true" title="Add Your Product"></i></button> 

                : <button type="button" className="btn btn-info shadow text-white" data-bs-toggle="tooltip" 
              data-bs-placement="right" title="Update Your Product"
                onClick={addItem}
              ><i className="fa fa-pencil" aria-hidden="true" title="Edit"></i></button>

                    }  
                   
                    </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                           { addItems.map((prod) => {
                                return(

                                   <h6 key={prod.id}> {prod.name}
                                    <div className='right-icon'>
                                        <i className="fa fa-pencil" aria-hidden="true" title="Edit" onClick={() => editItem(prod.id)}></i>
                                        <i className="fa fa-trash" aria-hidden="true" title="Delete" onClick={() => deleteItem(prod.id)}></i>
                                        </div>
                                   </h6>
                                 
                                )
                            })
                        }
                          
                        </div>
                    </div>
                </div>

                <button onClick={() => navigate(-1)} className='btn btn-info text-white'>Go Back</button>
          </div>
         
             </div>
         </div>
      </div>
    </>
  )
}
