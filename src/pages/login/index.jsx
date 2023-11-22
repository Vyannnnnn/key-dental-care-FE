import React from "react";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#21695C] flex-col gap-10">
      <img src="/logo2.svg" alt="" className="w-[150px]" />
      <LoginForm />
      <p className="text-white">Copyright@fantasticten2023</p>
    </div>
  );
};

export default Login;
