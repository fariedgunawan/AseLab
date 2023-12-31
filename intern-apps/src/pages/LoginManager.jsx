import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginManager.css";
import illuslogin from "../assets/login2.png";

const LoginManager = () => {
  const navigate = useNavigate();
  return (
    <div id="loginman-body">
      {/*body */}

      {/*Header */}
      <div className="loginman-company font-poppins text-white font-semibold text-2xl text-center pt-[30px] sm:text-left sm:pl-[30px] sm:text-3xl">
        <h2>Industrial</h2>
      </div>
      {/*End Header */}

      <div className="loginman-container flex justify-center mt-[7rem] sm:gap-[10rem] sm:mt-[5rem]">
        <div className="loginman-form w-[300px] flex flex-col items-center p-7 rounded-3xl sm:w-[400px]">
          <h2 className="font-poppins font-bold text-white text-2xl">Welcome Back</h2>

          {/*username */}
          <h3 className="font-poppins font-medium text-white text-md mt-[2rem]">Username</h3>
          <input className="mt-3 w-[250px] bg-transparent border-2 px-2 py-1 rounded-md text-white sm:w-[280px]" placeholder="Username" />
          {/*end username */}

          {/*password */}
          <h3 className="font-poppins font-medium text-white text-md mt-[1rem]">Password</h3>
          <input type="password" className="mt-3 w-[250px] bg-transparent border-2 px-2 py-1 rounded-md text-white sm:w-[280px]" placeholder="Password" />
          {/*end password */}

          {/*button */}
          <button className="bg-sky-500 w-[250px] font-poppins font-medium text-white py-2 mt-9 rounded-md sm:w-[280px]">SignIn</button>
          {/*end button */}

          <h2 className="text-white font-poppins text-[12px] mt-8 sm:text-[16px]">
            Don't Have an Account ?{" "}
            <span className="text-sky-500 cursor-pointer" onClick={() => navigate("/RegisterManager")}>
              Register
            </span>
          </h2>
        </div>
        <img src={illuslogin} className="loginman-illus w-[450px] hidden sm:flex" />
      </div>

      {/*end body */}
    </div>
  );
};

export default LoginManager;
