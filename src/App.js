// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import OrderPlace from './Components/OrderPlace/OrderPlace';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import AddNewServices from './Pages/AddNewServices/AddNewServices';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import Packages from './Pages/Packages/Packages';

function App() {
   return (
      <div className="App">

         <AuthProvider>
            <Router>

               <NavBar />

               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="/home">
                     <Home></Home>
                  </Route>
                  <Route  path="/packages">
                     <Packages></Packages>
                  </Route>

                  <PrivateRoute path="/addservices">
                     <AddNewServices></AddNewServices>
                  </PrivateRoute>
                  <Route path="/about">
                     <About></About>
                  </Route>
                  <Route path="/contact">
                      <Contact></Contact>
                  </Route>
                  <PrivateRoute path='/manageorders'>
                     <ManageOrders></ManageOrders>
                  </PrivateRoute>
                  <PrivateRoute path="/package/:serviceId">
                     <OrderPlace></OrderPlace>
                  </PrivateRoute>
                  <PrivateRoute path="/myorders">
                     <MyOrders></MyOrders>
                  </PrivateRoute>

                  <Route path="/login">
                     <Login></Login>
                  </Route>
                  <Route path="*">
                     <NotFound></NotFound>
                  </Route>


               </Switch>
               <Footer></Footer>
            </Router>
         </AuthProvider>



      </div>
   );
}

export default App;
