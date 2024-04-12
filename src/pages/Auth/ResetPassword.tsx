/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

type UserInput = {
  password: string;
};

const ResetPassword = () => {
  const navigateUser = useNavigate();

  const userInput: UserInput = {
    password: "",
  };

  const [input, setInput] = useState(userInput);
  const [token, setToken] = useState("");
  const [target, setTarget] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setInput((prev: any) => ({ ...prev, [name]: value }));
  };

  axios.defaults.withCredentials = true;

  const submitHandler = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setError("");
    setMessage("");

    try {
      const response = await axios.post("/api/v1/reset", {
        token,
        target,
        password: input.password,
      });

      console.log("Response data:", response.data);
  
      navigateUser("/join/login", { replace: true });
    } catch (error: any) {
      // Handle error
      if (error.response) {
        if (error.response.data.message) {
          setMessage(error.response.data.message);
          console.error(error.response.data.message);
        } else {
          setError(error.response.data.error);
          console.error(error.response.data.error);
        }
      }
    }
  };

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop: string) => searchParams.get(prop),
    });

    const value = (params as any)?.token;
    const targetValue = (params as any)?.target;
    setToken(value);
    setTarget(targetValue);
  }, []);

  return (
    <>
      <div className="lg:px-16 py-8 flex flex-row justify-between">
        <div className="lg:w-[50%] w-screen mx-auto relative">
          <div className="w-full">
            <div className="xl:mt-24 xl:mb-2 mt-20 mb-8">
              <div className="w-5/5">
                <h1 className="sm:text-3xl text-2xl text-center text-black font-bold mb-2">
                  Reset password?
                </h1>

                <p className="text-[#959595] text-center mb-6">
                  Enter a new password
                </p>

                {message.length > 0 && (
                  <div className="text-center text-sm text-red-500 my-1">
                    {message}
                  </div>
                )}
                {error.length > 0 && (
                  <div className="text-center text-sm text-red-500 my-1">
                    {error}
                  </div>
                )}

                <form
                  onSubmit={submitHandler}
                  className="lg:w-4/5 sm:w-4/5 w-5/5 mx-auto"
                >
                  {" "}
                  <label htmlFor="Password" className="lg:text-base text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    name="password"
                    value={input.password}
                    onChange={onChangeHandler}
                    className="block w-full mt-1 mb-3 outline-none border-[1px] border-gray-300 focus:border-[#53777a] px-4 xl:py-3 py-3 rounded-lg placeholder:text-[#C4C4C4]  placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
                  />
                  <button className="w-full bg-black py-4 outline-none text-white text-base font-medium mt-2 mb-2 rounded-lg">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
