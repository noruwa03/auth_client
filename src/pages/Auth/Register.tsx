/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent, ChangeEvent, Fragment } from "react";
import Google from "../../assets/icons/google.svg";
import Twitter from "../../assets/icons/twitter.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type UserInput = {
  email: string;
  password: string;
};

const Register = () => {
  const [error, setError] = useState([]);
  const [message, setMessage] = useState("");

  const userInput: UserInput = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(userInput);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const navigateUser = useNavigate();

  const submitHandler = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    await registerUser(input);
  };

  axios.defaults.withCredentials = true;

  const registerUser = async (payload: any) => {
    const { email, password } = payload;

    try {
      const response = await axios.post("/api/v1/signup", {
        email,
        password,
      });

      console.log("Response data:", response.data);
      navigateUser("/join/otp", { replace: true });
    } catch (error: any) {
      // Handle error
      if (error.response) {
        if (error.response.data.message) {
          setMessage(error.response.data.message);
          console.error(error.response.data.message);
        } else {
          setError(error.response.data.errors);
          console.error(error.response.data);
        }
      }
    }
  };

  const navigate = async (url: string | any) => {
    window.location.href = url;
  };

  const googleLogin = async () => {
    const res = await fetch("/api/v1/google", {
      method: "post",
    });
    const data = await res.json();
    await navigate(data.url);
  };

  const twitterLogin = async () => {
    const res = await fetch("/api/v1/twitter", {
      method: "post",
    });
    const data = await res.json();
    await navigate(data.url);
  };

  return (
    <>
      <div className="lg:px-16 px-4 py-8 flex flex-row justify-between">
        <div className="lg:w-[50%] mx-auto w-screen relative">
          <div className="w-full">
            <div className="lg:mx-0 mx-3 grid lg:place-content-start place-content-start">
              <Link
                to={"/"}
                className="w-16 h-16 rounded-full bg-gray-100 grid place-content-center"
              >
                <div className="font-bold w-12 h-12 rounded-full bg-black grid place-content-center text-white before:absolute before:content-['B'] before:translate-x-3 before:translate-y-1 before:text-2xl after:absolute after:content-['B'] after:translate-x-5 after:translate-y-4 after:text-2xl"></div>
              </Link>
            </div>
            <div className="xl:mt-6 xl:mb-2 mt-8 mb-8 w-full mx-auto">
              <div className="lg:w-4/5 w-5/5 mx-auto">
                <h1 className="sm:text-3xl text-2xl lg:text-start text-center mb-6 flex flex-row flex-wrap items-center lg:justify-start justify-center font-bold">
                  BugetBuddy says 'Welcome!'
                </h1>

                {message.length > 0 && (
                  <div className="text-sm text-red-500 mt-1 mb-2">
                    {message}
                  </div>
                )}

                {error.length > 0 ? (
                  <>
                    <div className="text-sm text-red-500 mt-1 mb-2 flex flex-col items-start gap-1">
                      {error.map((data: any) => {
                        return (
                          <Fragment key={data.path}>
                            <span>{data.msg}</span>
                          </Fragment>
                        );
                      })}
                    </div>
                  </>
                ) : null}

                <form onSubmit={submitHandler} className="w-5/5">
                  <label htmlFor="Email" className="lg:text-base text-sm">
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    value={input.email}
                    onChange={onChangeHandler}
                    className="block w-full mt-1 mb-3 outline-none border-[1px] border-gray-300 focus:border-black px-4 xl:py-2 py-3 rounded-lg placeholder:text-[#C4C4C4]  placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
                    placeholder="name@gmail.com"
                  />
                  <label htmlFor="Password" className="lg:text-base text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="Password"
                      name="password"
                      value={input.password}
                      onChange={onChangeHandler}
                      className="block w-full my-1 outline-none border-[1px] border-gray-300 focus:border-black px-4 xl:py-2 py-3 rounded-lg placeholder:text-[#C4C4C4]  placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
                      placeholder="Enter your password"
                    />

                    <div
                      className="absolute inset-y-0 right-0 flex items-center px-4 z-10 text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <button className="w-full bg-black py-3 outline-none text-white text-base font-medium mt-4 mb-3 rounded-lg">
                    Login
                  </button>

                  <div
                    onClick={googleLogin}
                    className="mt-6 w-full px-4 lg:py-3 py-3 shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.4)]  bg-white rounded-lg text-slate-600 font-medium sm:text-[0.93em] text-base cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex flex-row items-center justify-center lg:space-x-3 space-x-2 xl:w-3/5 lg:w-4/5 sm:w-3/5 w-[70%] mx-auto">
                      <img src={Google} alt="Google" className="w-4 h-4" />
                      <p>Signup with Google</p>
                    </div>
                  </div>
                  <div
                    onClick={twitterLogin}
                    className="mt-6 w-full px-4 lg:py-3 py-3 shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.4)]  bg-white rounded-lg text-slate-600 font-medium sm:text-[0.93em] text-base cursor-pointer hover:bg-gray-50"
                  >
                    <div className="flex flex-row items-center justify-center lg:space-x-3 space-x-2 xl:w-3/5 lg:w-4/5 sm:w-3/5 w-[70%] mx-auto">
                      <img src={Twitter} alt="Twitter" className="w-4 h-4" />
                      <p>Signup with Twitter</p>
                    </div>
                  </div>

                  <div className="w-full grid place-content-center text-base text-start mt-6">
                    <div className="flex flex-row flex-wrap items-center justify-center space-x-2">
                      <div className="text-slate-600">
                        Already have an account?
                      </div>
                      <Link
                        to="/join/login"
                        className="font-medium text-slate-800"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
