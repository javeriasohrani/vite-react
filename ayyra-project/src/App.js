import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionsCreator} from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const{depositMoney,withdrawMoney} = bindActionCreators(actionsCreator, dispatch);
  
  return (
    <div className="App">
    <h1>{account}</h1>
    <button onClick = {()=>depositMoney(1000)}>Deposit</button>
    <button onClick = {()=>withdrawMoney(1000)}>WithDraw</button>
    </div>
  );
}

export default App;
