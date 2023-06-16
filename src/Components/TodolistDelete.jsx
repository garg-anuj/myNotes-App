import React from 'react'

export default function TodolistDelete(props) {


  return (
    <>
     <li>
          <div className='row'>
            <div className='col-md-3'>
                <h5>Sr.No</h5>
              </div>
              <div className='col-md-3'>
                <h5>  
                {props.text}
             </h5>
              </div>
              <div className='col-md-3'>
                <h5> <button type="button" className="btn btn-warning shadow"><i className="fa fa-pencil text-white" aria-hidden="true"></i></button></h5>
              </div>
              <div className='col-md-3'>
               <h5>
               <button className="btn btn-danger shadow" 
                onClick={() => {
                  props.onSelect(props.id);
                      }}>
                        <i className="fa fa-trash text-white" aria-hidden="true"></i></button>
               </h5>
              </div>
            </div>
            <hr />
          </li>
   
     
    </>
  )
}
