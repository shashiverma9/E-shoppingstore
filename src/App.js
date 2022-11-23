
import { useSelector } from 'react-redux';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { HOME } from './utils/routingPath';

function App() {

// call redux state
const data=useSelector(state=>state);
console.log(data);

  return (
    <div className=" App">
      <BrowserRouter>
      <Switch>
        <Route exact path={HOME} component={Login}></Route> 
      </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
