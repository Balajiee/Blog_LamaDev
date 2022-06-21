
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/Settings/Settings";
import Write from "./pages/Write/Write";
import Single from  "./pages/single/Single";


function App() {
  const user=true
  return (
    <BrowserRouter>
     <TopBar></TopBar>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="write" element={user?<Write/>:<Register />} />
      <Route exact path="/settings" element={user?<Settings/>:<Register />} />
      <Route exact path="post/:postId" element={<Single/>} /> 
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
