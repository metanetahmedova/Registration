import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  //password visible and invisible

  const [visiblePassword, setVisiblePassword] = useState(false);

  const [values, SetValues] = useState({
    username: "",
    password: "",
  });

  let { username, password } = values;
  const handlechange = (e) => {
    SetValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  //hook

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const navigate = useNavigate();
  const handleClick = () => {
    if (username === "admin" && password === "admin23") {
      toast.success("Login Success");
      localStorage.setItem("login", JSON.stringify(values));
      navigate("/");
    } else {
      toast.error("username or password is error");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(39, 150, 77, 0.68), rgba(38, 36, 93, 0.85) )`,
      }}
    >
      <div className='w-[27vw] h-[33vw] rounded-md bg-yellow-300 flex justify-center items-center bg-[url("https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=600")]'>
        <div className="w-[22vw] h-[27vw] rounded-md backdrop-blur-lg bg-transparent flex items-center justify-center">
          <h2 className="uppercase text-white text-3xl font-medium text-center">
            Welcome to our Website
          </h2>
        </div>
      </div>
      <div
        className="  w-[27vw] h-[33vw] rounded-md  flex flex-col pl-10"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(39, 150, 77, 0.68), rgba(38, 36, 93, 0.85) )`,
        }}
      >
        <div className="mt-6 mb-3">
          <h2 className="text-white capitalize text-3xl font-semibold">
            Log in
          </h2>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label className="text-white text-base ml-2">Username</label>
              <input
                {...register("name", { required: true })}
                className={`mb-2 w-[22vw] h-[3vw] outline-none bg-transparent border-[0.1vw] border-white rounded-[0.3vw] mt-[0.5vw] pl-[0.5vw] text-white ${
                  errors.name &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                type="text"
                placeholder={"Istidafeci adini daxil edin"}
                name="username"
                value={values.username}
                onChange={handlechange}
              />

              <span className=" ml-2 text-xs text-red-400">
                {errors.username?.type === "required" && "name is required"}
              </span>
            </div>
            <div className="">
              <label className="text-white text-base ml-2">Password</label>
              <input
                {...register("password", { required: true })}
                className={`mb-2 w-[22vw] h-[3vw] outline-none bg-transparent border-[0.1vw] border-white rounded-[0.3vw] mt-[0.5vw] pl-[0.5vw] text-white ${
                  errors.password &&
                  "focus:border-red-500 focus:ring-red-500 border-red-500"
                }`}
                type={visiblePassword ? "text" : "password"}
                placeholder={"Sifreni daxil edin"}
                name="password"
                value={values.password}
                onChange={handlechange}
              />
              <div className="relative">
                {visiblePassword ? (
                  <span
                    onClick={() => setVisiblePassword(false)}
                    className="text-white cursor-pointer absolute bottom-[1.3vw] left-72"
                  >
                    {<AiFillEye />}
                  </span>
                ) : (
                  <span
                    onClick={() => setVisiblePassword(true)}
                    className="text-white cursor-pointer absolute bottom-[1.3vw] left-72"
                  >
                    {<AiFillEyeInvisible />}
                  </span>
                )}
              </div>
              <span className=" ml-2 text-xs text-red-400">
                {errors.password?.type === "required" && "password is required"}
              </span>
            </div>
            <div className="mt-8">
              <button
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(39, 150, 77, 1), rgba(38, 36, 93, 1) )`,
                }}
                onClick={handleClick}
                type="submit"
                className=" hover:rgba(38, 137, 93, 0.84) w-[22vw] h-[3.2vw] border-[0.1vw] text-2xl text-white font-bold rounded-[0.3vw] "
              >
                Log in
              </button>
            </div>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
