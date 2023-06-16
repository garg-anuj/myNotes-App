import React, {useState} from 'react'
import './main.css';
// import logo from './background.jpg';


export default function Login() {
    // const [inputData, setData] = useState(
    //    { name:'' ,
    //     email : ''}
    // );

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [allEntry ,setEntry ] = useState([]);

    const hanldeSubmit = (e) => {
        const newEntry = {email:email, password:password};

        setEntry([...allEntry, newEntry]);
        console.log(newEntry);
        (e).preventDefault();

    }

  return (
  <>
     <section>
        <div className='container-filud'>
        <div className='form-outer'>
            
            <div className='box'>
                <div className='circle-box'>
                    
                   <h2 className='text-white text-center'><span>L</span>ogin</h2>
                </div>
                <form onSubmit={hanldeSubmit}>
                    <input type="text" className='form-control mb-4' 
                    value={email} 
                    name="name" onChange={(e) => setEmail(e.target.value)} 
                    placeholder='E-Mail ID' autoComplete='off' />

                    <input type="password" className='form-control mb-4' 
                    value={password} 
                    name="email" onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' autoComplete='off' />

                    <button className='btn btn-custom text-white mb-4'>Submit</button>
                    </form>


                    {
                    allEntry.map((currElem) => {
                       return (
                        <>
                        <h6 className='text-white'>
                        <span>Email: {currElem.email}</span><br/>
                        <span>Password: {currElem.password}</span>
                        </h6>
                        </>
                        
                       )
                    })
                    }
                </div>


                   
                    
                    </div>
        </div>
     </section>
  </>
  )
}
