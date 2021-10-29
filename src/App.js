// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import OrderPlace from './Components/OrderPlace/OrderPlace';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import AddNewServices from './Pages/AddNewServices/AddNewServices';
import Home from './Pages/Home/Home';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import MyOrders from './Pages/MyOrders/MyOrders';

function App() {
   return (
      <div className="App">

         <AuthProvider>
            <BrowserRouter>

               <NavBar />

               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route exact path="/home">
                     <Home></Home>
                  </Route>
                  <PrivateRoute path="/addservices">
                     <AddNewServices></AddNewServices>
                  </PrivateRoute>
                  <Route path="/about">
                     <About></About>
                  </Route>
                  <Route path='/manageorders'>
                     <ManageOrders></ManageOrders>
                  </Route>
                  <PrivateRoute path="/home/:serviceId">
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
            </BrowserRouter>
         </AuthProvider>



      </div>
   );
}

export default App;
