import logo from './logo.svg';
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'
import './App.css';
import Homepage from './BuyerUI/Homepage';
import SellerHomePage from './SellerUI/SellerHomepage'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/buyer/home" component={Homepage}></Route>
          <Route path="/seller/home" component={SellerHomePage}></Route>
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
