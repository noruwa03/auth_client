/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResetPasswordEmailForm from "../components/Modals/ResetPasswordEmailForm";

const Home = () => {
  const [user, setUser] = useState<any>(null);
  const [resetPassword, setResetPassword] = useState(false);
  const navigateUser = useNavigate();

  const toggleResetPassword = () => {
    setResetPassword((prev: any) => !prev);
  };

  axios.defaults.withCredentials = true;
  const signOut = async () => {
    try {
      const response = await axios.post("/api/v1/signout");
      console.log(response.data.success);
      if (response.data.success.toLowerCase() === "ok") {
        navigateUser("/join", { replace: true });
      }
    } catch (error: any) {
      // Handle error
      console.log(error);
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
    <div className="py-12">
      {resetPassword && <ResetPasswordEmailForm close={toggleResetPassword} />}
      <div className="text-center lg:w-3/5 w-4/5 mx-auto flex flex-row items-center gap-6">
        <Link
          to="/join"
          className="px-3 py-2 bg-black rounded-md text-neutral-100 font-semibold"
        >
          Register
        </Link>
        <Link to="/join/login" className="px-3 py-2 text-red-400 font-semibold">
          Login
        </Link>
        {user !== null ? (
          <button
            onClick={signOut}
            className="px-3 py-2 text-white bg-red-300 rounded-md font-semibold"
          >
            Logout
          </button>
        ) : null}
      </div>
      <h1 className="mt-8 mb-4 text-center text-3xl font-semibold">
        Taadaa! Home Page
      </h1>
      {user !== null ? (
        <>
          {user?.email ? (
            <>
              <h2 className="text-center">Welcome! {user?.email}</h2>
            </>
          ) : (
            <>
              <h2 className="text-center">Welcome! {user?.name}</h2>
              <h3 className="text-center">Twitter login {user?.username}</h3>
            </>
          )}

          {user?.email ? (
            <div
              onClick={toggleResetPassword}
              className="cursor-pointer text-center text-slate-800 mt-3 underline decoration-wavy decoration-2 decoration-red-400"
            >
              Reset Password
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Home;
