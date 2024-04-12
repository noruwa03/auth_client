/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, FormEvent, Fragment } from "react";
import axios from "axios";

type ResetProps = {
  close: () => void;
};

const ResetPasswordEmailForm = (props: ResetProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState([]);
  const [message, setMessage] = useState("");
  const onChangeHandler = (evt: ChangeEvent | any) => {
    evt.preventDefault();
    setEmail(evt.target.value);
  };

  const onSubmitHandler = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const response = await axios.post("/api/v1/reset-password", {
        email,
      });

      console.log("Response data:", response.data);
      setMessage(response.data.message);

      setTimeout(() => {
        props.close();
      }, 4000);
    } catch (error: any) {
      // Handle error
      if (error.response) {
        setError(error.response.data.errors);
        console.error(error.response.data.errors);
      }
    }
  };
  return (
    <div>
      {" "}
      <form
        onSubmit={onSubmitHandler}
        className="fixed top-0 left-0 h-screen w-full bg-[#000000cc] z-20"
      >
        <div className="lg:w-2/5 w-[94%] sm:w-4/5 fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] lg:p-8 sm:p-6 p-3 bg-white shadow-sm rounded-lg">
          <div
            onClick={props.close}
            className="text-red-400 text-lg text-end mb-2 cursor-default"
          >
            Close
          </div>
          {message.length > 0 && (
            <div className="text-center text-sm text-green-500 mt-1 mb-2">
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
          <h1 className="font-semibold lg:text-lg text-base text-center text-slate-700 my-4">
            Enter your email for a link to be sent to you shortly.
          </h1>
          <input
            type="text"
            id="Email"
            name="email"
            value={email}
            onChange={onChangeHandler}
            className="block w-full mt-1 mb-3 outline-none border-[1px] border-gray-300 focus:border-black px-4 xl:py-3 py-3 rounded-lg placeholder:text-[#C4C4C4]  placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
            placeholder="name@gmail.com"
          />
          <button className="w-full bg-black py-4 outline-none text-white text-base font-medium mt-2 mb-2 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordEmailForm;
