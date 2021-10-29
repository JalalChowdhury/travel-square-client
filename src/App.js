// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import About from './Pages/About/About';
import AddNewServices from './Pages/AddNewServices/AddNewServices';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

          <NavBar />

          <Switch>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route exact path="/home">
                <Home></Home>
             </Route>
             <Route path="/addservices">
                <AddNewServices></AddNewServices>
             </Route>
             <Route  path="/about">
                <About></About>
             </Route>
             <Route path="*">
                <NotFound></NotFound>
             </Route>
             

          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
