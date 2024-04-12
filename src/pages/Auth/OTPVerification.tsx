/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState, useEffect, Fragment } from "react";
import Cookies from "universal-cookie";
// React OTP library import
import OtpInput from "react-otp-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState([]);
  const [message, setMessage] = useState("");
  const [otpResendError, setOTPResendError] = useState("");
  const [otpResendSuccess, setOTPResendSuccess] = useState("");

  const navigateUser = useNavigate();

  const otpStyles = {
    width: "3rem",
    height: "3rem",
    margin: "0 5px",
    fontSize: "1rem",
    outline: "none",
    border: "1px solid #d1d5db",
    borderRadius: "0.3rem",
  };

  axios.defaults.withCredentials = true;
  const submitHandler = async (evt: FormEvent) => {
    evt.preventDefault();
    setError([]);
    setMessage("");
    setOTPResendError("");

    try {
      const response = await axios.post("/api/v1/verify-otp", {
        email: user?.email,
        otp,
      });

      console.log("Response data:", response.data);
      navigateUser("/", { replace: true });
    } catch (error: any) {
      // Handle error
      if (error.response) {
        if (error.response.data.message) {
          setMessage(error.response.data.message);
          console.error(error.response.data.message);
        } else {
          setError(error.response.data.errors);
          console.error(error.response.data.errors);
        }
      }
    }
  };

  const resendOTP = async () => {
    setOTPResendError("");
    try {
      const response = await axios.post("/api/v1/resend-otp", {
        email: user?.email,
      });

      console.log("Response data:", response.data);
      setOTPResendSuccess(response.data.message);
    } catch (error: any) {
      // Handle error
      if (error.response) {
        if (error.response.data) {
          setOTPResendError(error.response.data.error);
          console.error(error.response.data.error);
        }
      }
    }
  };

  useEffect(() => {
    const cookies = new Cookies();
    const userData = cookies.get("userData");
    const check = userData !== undefined || null ? userData.userInfo : null;
    setUser(check);
    console.log("User Data:", userData);
  }, []);

  return (
    <>
      <div className="lg:px-16 py-8 flex flex-row justify-between">
        <div className="lg:w-[50%] w-screen mx-auto">
          <div className="w-full">
            <div className="xl:mt-24 mt-16 mb-8 lg:mb-0 lg:w-4/5 w-4/5 mx-auto">
              <div className="w-5/5">
                {otpResendError.length > 0 && (
                  <div className="text-center text-sm text-red-500 mt-1 mb-2">
                    {otpResendError}
                  </div>
                )}
                {otpResendSuccess.length > 0 && (
                  <div className="text-center text-sm text-green-500 mt-1 mb-2">
                    {otpResendSuccess}
                  </div>
                )}
                {message.length > 0 && (
                  <div className="text-center text-sm text-red-500 mt-1 mb-2">
                    {message}
                  </div>
                )}

                {error.length > 0 ? (
                  <>
                    <div className="text-sm text-red-500 mt-1 mb-2 flex flex-col items-center gap-1">
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
                <h1 className="sm:text-3xl text-2xl text-center font-TT_Firs_Neue_DemiBold mb-2">
                  Check your email
                </h1>

                <p className="text-[#959595] text-center">
                  An OTP was sent to{" "}
                  <span className="text-[#1b1a1a]">
                    {user !== null ? <>{user?.email}</> : null}
                  </span>
                </p>

                <form className="lg:w-4/5 sm:w-4/5 w-5/5 mx-auto">
                  <div className="flex flex-row items-center justify-evenly mt-6 mb-2">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderInput={(props) => <input {...props} />}
                      placeholder="0000"
                      inputStyle={otpStyles}
                    />
                  </div>

                  <button
                    disabled={otp.length < 4 ? true : false}
                    onClick={submitHandler}
                    className={`text-center w-full ${
                      otp.length === 4 ? "bg-black" : "bg-[#959595]"
                    } py-3 outline-none uppercase text-white text-sm font-medium my-6 rounded-lg`}
                  >
                    Submit
                  </button>
                </form>
                <div className="w-full grid place-content-center text-sm text-start mt-2">
                  <div className="flex flex-row flex-wrap items-center justify-center space-x-2">
                    <div className="text-[#959595]">
                      Didn’t receive the email?
                    </div>
                    <span
                      onClick={resendOTP}
                      className="font-medium text-black"
                    >
                      Click to resend
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
