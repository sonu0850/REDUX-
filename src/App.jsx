import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = lazy(()=>import("./Components/Header/navbar")) ;
const  Home=lazy(()=>import("./Components/Dashboard/Home"));
const Contact=lazy(()=>import("./Components/Dashboard/Contact")) ;
import About from "./Components/Dashboard/About";
import LogIn from "./Components/Auth/Login";
import SignupForm from "./Components/Auth/Signup";
import ChangePassword from "./Components/Auth/changePassword";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ForgetPassword from "./Components/Auth/forgetPassword";
import Loading from "./services/loader/loading";
import ToastifyContainer from "./services/toastify/toastifyContainer";
function App() {
  return (
    <>
    
    
       <Navbar/>
       <ToastifyContainer/>
       <Suspense fallback={<Loading/>}>
        <Routes>
        <Route path="/" element={<LogIn/>}/>
       
        <Route path="/signUp" element={<SignupForm/> }/>
        <Route path="/changePassword/:token" element={<ChangePassword/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>  
      </Suspense>
    </>
  );
}

export default App;
