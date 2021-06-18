import logo from './logo.svg';
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import './App.css';
import Homepage from './BuyerUI/Homepage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/home" component={Homepage}></Route>
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
