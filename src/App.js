

import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { deposite, withdraw } from './rtk/slices/bank-slice.js';
import Products from './components/Products';

function App() {
 const state =useSelector(state =>state.bank)
 const dispatch=useDispatch()
 console.log(state)
  return (
    <div className="App">
      <p>bank balance :{state}</p>
      <button onClick={()=>dispatch(withdraw(50))} >withdraw</button>
      <button  onClick={()=>dispatch(deposite(50))} >deposite</button>
      <Products/> 
    </div>
  );
}

export default App;
