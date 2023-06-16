
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Todolist from './Todolist';
// import Index from './Components/Index';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import ToDo from './Components/ToDo';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
       {/* <Todolist/>
       <ToDo /> */}
{/* <Login /> */}

    <Routes>
      <Route path="/" element={<Navbar/>} />
      <Route path="/ToDo" element={<ToDo/>} />
      <Route path="/Login" element={<Login/>} />
     </Routes>
    </div>
    
  );
}

export default App;
