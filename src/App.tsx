import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import LoginForgetForm from "./components/Login/LoginForgetForm/LoginForgetForm";
import Giaodiennguoidung from "./components/Giaodiennguoidung/Header";
import BaiDang from "./components/Baidang/Posts";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="password-reset" element={<LoginForgetForm />} />
        <Route  path={'main' } element={<><Giaodiennguoidung /><BaiDang/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
