import React, { forwardRef, ForwardedRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface NavBarChildComponentProps {}

const NavBar: React.ForwardRefRenderFunction<
  HTMLDivElement,
  NavBarChildComponentProps
> = (_, ref: ForwardedRef<HTMLDivElement>) => {
  const currentRoute = useLocation();

  return (
    <>
      {" "}
      <div
        ref={ref}
        className="lg:sticky lg:top-0 lg:block hidden lg:w-[5%] fixed w-full z-[35] h-full"
      >
        <nav className="h-[100vh] overflow-y-auto relative lg:bg-transparent bg-black">
          <div className="grid lg:place-content-center place-content-start lg:px-0 px-4 pt-6 lg:mb-0 mb-6">
            <NavLink
              to={""}
              className="w-14 h-14 rounded-full bg-gray-50 grid place-content-center"
            >
              <div className="font-bold w-12 h-12 rounded-full bg-[#34CAA5] grid place-content-center text-white before:absolute before:content-['B'] before:translate-x-3 before:translate-y-1 before:text-2xl after:absolute after:content-['B'] after:translate-x-5 after:translate-y-4 after:text-2xl"></div>
            </NavLink>
          </div>

          <ul className="py-2 [&>li:nth-child(5)]:px-4 [&>li:nth-child(5)]:mt-6 lg:[&>li:nth-child(5)]:absolute lg:[&>li:nth-child(5)]:bottom-0 text-[0.84em] flex flex-col justify-center h-[80vh] text-white">
            <li
              className={`my-3 relative grid lg:place-content-center place-content-start lg:px-0 px-4 [&>a>svg>path]:hover:fill-[#34CAA5] [&>a>span]:hover:text-[#34CAA5] dark:[&>a>svg>path]:hover:stroke-[#34CAA5] ${
                currentRoute.pathname === "/"
                  ? "[&>a>svg>path]:fill-[#34CAA5]"
                  : ""
              }`}
            >
              <NavLink
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-[#34CAA5] [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                to={`/`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none0e1111"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                    fill="#fff"
                  />
                  <path
                    opacity="0.4"
                    d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"
                    fill="#fff"
                  />
                  <path
                    d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z"
                    fill="#fff"
                  />
                  <path
                    opacity="0.4"
                    d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"
                    fill="#fff"
                  />
                </svg>
                <span
                  className={`lg:hidden block ${
                    currentRoute.pathname === "/" ? "text-[#34CAA5]" : ""
                  }`}
                >
                  Dashboard
                </span>
              </NavLink>
              <span
                className={`absolute top-[50%] right-[99%] lg:right-0 translate-y-[-50%] w-1 h-[24px] ${
                  currentRoute.pathname === "/" ? "bg-[#34CAA5]" : ""
                } dark:bg-white rounded-full`}
              ></span>
            </li>

            <li
              className={`my-3 relative grid lg:place-content-center place-content-start lg:px-0 px-4 [&>a>svg>path]:hover:stroke-[#34CAA5] [&>a>span]:hover:text-[#34CAA5] ${
                currentRoute.pathname === "/transactions"
                  ? "[&>a>svg>path]:stroke-[#34CAA5]"
                  : ""
              }`}
            >
              <NavLink
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-[#34CAA5] [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                to={`/transactions`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.17 12L10.7 11.3L7.5 14.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 9.5L14.99 11.01L14 12"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 9.5H16.5V11.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`lg:hidden block ${
                    currentRoute.pathname === "/transactions"
                      ? "text-[#34CAA5]"
                      : ""
                  }`}
                >
                  Transactions
                </span>
              </NavLink>

              <span
                className={`absolute top-[50%] right-[99%] lg:right-0 translate-y-[-50%] w-1 h-[24px] ${
                  currentRoute.pathname === "/transactions"
                    ? "bg-[#34CAA5]"
                    : ""
                } dark:bg-white rounded-full`}
              ></span>
            </li>

            <li
              className={`my-3 relative grid lg:place-content-center place-content-start lg:px-0 px-4 [&>a>svg>path]:hover:stroke-[#34CAA5] [&>a>span]:hover:text-[#34CAA5] ${
                currentRoute.pathname === "/profile"
                  ? "[&>a>svg>path]:stroke-[#34CAA5]"
                  : ""
              }`}
            >
              <NavLink
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-[#34CAA5] [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                to={`/profile`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6801 3.96C13.1601 4.67 13.4401 5.52 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`lg:hidden block ${
                    currentRoute.pathname === "/profile" ? "text-[#34CAA5]" : ""
                  }`}
                >
                  Account
                </span>
              </NavLink>
              <span
                className={`absolute top-[50%] right-[99%] lg:right-0 translate-y-[-50%] w-1 h-[24px] ${
                  currentRoute.pathname === "/profile" ? "bg-[#34CAA5]" : ""
                } dark:bg-white rounded-full`}
              ></span>
            </li>
            <li
              className={`my-3 relative grid lg:place-content-center place-content-start lg:px-0 px-4 [&>a>svg>path]:hover:stroke-[#34CAA5] [&>a>span]:hover:text-[#34CAA5] ${
                currentRoute.pathname === "/assets"
                  ? "[&>a>svg>path]:stroke-[#34CAA5]"
                  : ""
              }`}
            >
              <NavLink
                className="py-2 [&>*>svg]:hover:fill-black [&>*]:hover:text-[#34CAA5] [&>*]:hover:font-semibold flex flex-row items-center justify-start space-x-2"
                to={`/assets`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.16992 7.44006L11.9999 12.55L20.7699 7.47003"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 21.61V12.54"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.39014 9.17007C2.39014 7.79007 3.38012 6.11009 4.59012 5.44009L9.93011 2.47006C11.0701 1.84006 12.9401 1.84006 14.0801 2.47006L19.4201 5.44009C20.6301 6.11009 21.6201 7.79007 21.6201 9.17007V14.8201C21.6201 16.2001 20.6301 17.8801 19.4201 18.5501L14.0801 21.5201C12.9401 22.1501 11.0701 22.1501 9.93011 21.5201L4.59012 18.5501C3.38012 17.8801 2.39014 16.2001 2.39014 14.8201V14.0001"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9998 13.24V9.58002L10.9297 6.07001L9.87976 5.46997L7.50977 4.09998"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className={`lg:hidden block ${
                    currentRoute.pathname === "/assets" ? "text-[#34CAA5]" : ""
                  }`}
                >
                  Assets
                </span>
              </NavLink>

              <span
                className={`absolute top-[50%] right-[99%] lg:right-0 translate-y-[-50%] w-1 h-[24px] ${
                  currentRoute.pathname === "/assets" ? "bg-[#34CAA5]" : ""
                } dark:bg-white rounded-full`}
              ></span>
            </li>

            <li className="lg:left-[50%] lg:-translate-x-[50%] flex flex-col justify-center gap-4 mb-6">
              <button className="my-1 w-full flex flex-row items-center justify-start gap-2 [&>svg>path]:hover:stroke-[#E85B67] [&>span]:hover:text-[#E85B67] dark:[&>svg>path]:hover:stroke-[#34CAA5]">
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer [&>path]:hover:stroke-[#E85B67]"
                >
                  <path
                    d="M6.56 14.5599L4 11.9999L6.56 9.43994"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit={"10"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.23982 12H4.06982"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit={"10"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2398 12H12.2798"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit={"10"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit={"10"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeMiterlimit={"10"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="lg:hidden block">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const ForwardedChildComponent = forwardRef(NavBar);

export default ForwardedChildComponent;
