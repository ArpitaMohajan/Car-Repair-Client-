import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './Pages/Home/Home';

import Header from './Pages/Home/Header/Header';
import AddProduct from './Pages/AddProduct/AddProduct';
import Detailing from './Pages/Details/Detailing';
import Details from './Pages/Details/Details';
import Login from '../src/Shared/Login/Login'
import Register from '../src/Shared/Register/Register'
import AuthProvider from '../src/contexts/AuthProvider'
import MyOrders from './Pages/Dashboard/MyOrder/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import Services from './Pages/Service/Services';
import Dashboards from './Pages/Dashboard/Dashboards/Dasboards'
import MakeAdmin from './Pages/Dashboard/Dashboards/MakeAdmin';
import Review from './Pages/Dashboard/Dashboards/Review';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import Profile from './Pages/Dashboard/Dashboards/Profile';
import PrivateRoute from './hooks/PrivateRoute';
import AdminRoute from './hooks/AdminRoute';
// import Payment from './Pages/Dashboard/Payment/Payment';
// import MyOrders from './Pages/Dashboard/MyOrders';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>


            {/* <Route exact path="/" element={<Homes />}>
          </Route> */}
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/services" element={<Services />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/dashboards/addProduct" element={<AddProduct />}>
            </Route>
            <Route path="/details/:serviceId" element={<Details />}>
            </Route>
            <Route path="/detailing/:productId" element={<Detailing />}>
            </Route>

            <Route path="/dashboards" element={<Dashboards />}>
            </Route>
            <Route path="/dashboards/myOrders" element={<MyOrders />}>
            </Route>
            <Route path="/dashboards/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}>
            </Route>
            <Route path="/dashboards/review" element={<AdminRoute><Review /></AdminRoute>}>
            </Route>
            <Route path="/dashboards/manageOrder" element={<AdminRoute><ManageOrder /></AdminRoute>}>
            </Route>
            <Route path="/dashboards/profile" element={<AdminRoute><Profile /></AdminRoute>}>
            </Route>
            <Route path="/payment/:productId" element={<Payment />}>
            </Route>


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
