import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {" "}
      <header className="flex flex-row items-center justify-between bg-gray-50 lg:h-16 h-14 sticky top-0 z-30 gap-6 lg:mb-0 mb-4">
        <h1 className="lg:text-3xl text-xl font-semibold lg:relative lg:top-0 lg:left-0 fixed top-5 left-6">
          Overview
        </h1>

        <div className="flex flex-row items-center justify-start gap-6">
          <div className="lg:grid hidden place-content-center bg-gray-100 shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] p-2 rounded-full cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"
                fill="#0D062D"
              />
            </svg>
          </div>
          <div className="flex flex-row items-center lg:justify-end justify-start lg:mt-0 mt-4">
            <div className="lg:bg-gray-100 border-none lg:border-[1px] lg:border-gray-200 rounded-full p-1 flex flex-row items-center justify-between gap-4 relative [&>ul]:hover:block [&>svg]:hover:rotate-180 cursor-pointer">
              <img
                src="/avatar.png"
                alt="Avatar"
                width="64"
                height="64"
                className="w-9 h-9 rounded-full object-cover cursor-pointer lg:relative lg:top-0 lg:right-0 fixed top-3 right-6 z-40"
              />
              <div className="lg:flex flex-col items-end hidden">
                <p className="font-semibold text-[0.97em]">Obaseki Noruwa</p>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:block hidden me-2"
              >
                <path
                  d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
                  fill="#0D062D"
                />
              </svg>

              <ul className="hidden lg:absolute lg:top-11 lg:right-0 fixed top-11 right-8 bg-white shadow-[0_0px_4px_-1.76px_rgba(0,0,0,0.3)] dark:border-gray-50 w-60 rounded-xl lg:before:absolute lg:before:left-[85%] lg:before:-translate-x-[10%] before:left-[10%] before:-translate-x-[10%] before:-translate-y-2 before:content-[''] before:bg-transparent before:h-4 before:w-4 before:-rotate-45 text-sm flex-col z-10">
                <li className="mt-3 mb-1 px-5 hover:bg-gray-100 dark:hover:bg-[#34CAA5] dark:[&>a>svg>path]:fill-white">
                  <a
                    className="py-1 flex flex-row items-center justify-start space-x-2"
                    href=""
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0001 1.04163C8.2872 1.04163 6.64449 1.72206 5.43332 2.93323C4.22215 4.1444 3.54172 5.7871 3.54172 7.49996V8.08663C3.54167 8.66737 3.36973 9.23511 3.04755 9.71829L2.09172 11.1541C0.980053 12.8208 1.82839 15.0858 3.76089 15.6125C4.39005 15.7841 5.02505 15.9291 5.66422 16.0483L5.66589 16.0525C6.30589 17.7625 8.01839 18.9583 10.0001 18.9583C11.9817 18.9583 13.6942 17.7625 14.3351 16.0525L14.3367 16.0483C14.9769 15.9292 15.6119 15.7838 16.2401 15.6125C18.1726 15.0858 19.0209 12.8208 17.9092 11.1541L16.9526 9.71829C16.6304 9.23511 16.4584 8.66737 16.4584 8.08663V7.49996C16.4584 5.7871 15.778 4.1444 14.5668 2.93323C13.3556 1.72206 11.7129 1.04163 10.0001 1.04163ZM12.8134 16.2808C10.9442 16.5041 9.05507 16.5041 7.18589 16.2808C7.77839 17.1316 8.80922 17.7083 10.0001 17.7083C11.1909 17.7083 12.2209 17.1316 12.8134 16.2808ZM4.79172 7.49996C4.79172 6.11862 5.34045 4.79386 6.31721 3.81711C7.29396 2.84036 8.61872 2.29163 10.0001 2.29163C11.3814 2.29163 12.7062 2.84036 13.6829 3.81711C14.6597 4.79386 15.2084 6.11862 15.2084 7.49996V8.08663C15.2084 8.91412 15.4534 9.72329 15.9126 10.4116L16.8692 11.8475C17.0175 12.0695 17.1108 12.3235 17.1415 12.5887C17.1722 12.8539 17.1393 13.1226 17.0457 13.3726C16.9521 13.6226 16.8004 13.8467 16.6031 14.0265C16.4057 14.2063 16.1685 14.3366 15.9109 14.4066C12.0407 15.4621 7.95855 15.4621 4.08839 14.4066C3.83103 14.3364 3.59403 14.206 3.39692 14.0263C3.19981 13.8465 3.04822 13.6225 2.95464 13.3727C2.86106 13.1228 2.82816 12.8544 2.85866 12.5893C2.88915 12.3243 2.98217 12.0703 3.13005 11.8483L4.08839 10.4116C4.54717 9.72303 4.79189 8.91406 4.79172 8.08663V7.49996Z"
                        fill="#0D062D"
                      />
                    </svg>
                    <span>Notifications</span>
                  </a>
                </li>

                <li className="mb-3 px-5 hover:bg-gray-100 dark:hover:bg-[#34CAA5] dark:[&>a>svg>path]:stroke-white">
                  <NavLink
                    className="py-1 flex flex-row items-center justify-start space-x-2"
                    to="/profile"
                  >
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6801 3.96C13.1601 4.67 13.4401 5.52 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2"
                        stroke="#0D062D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11"
                        stroke="#0D062D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z"
                        stroke="#0D062D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
                        stroke="#0D062D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>Profile</span>
                  </NavLink>
                </li>
                <div className="my-2 w-full h-[1px] bg-[#F2F2F1]"></div>
                <li className="mb-1 px-5 hover:bg-gray-100 dark:hover:bg-[#34CAA5] dark:[&>a>svg>path]:fill-white">
                  <a
                    className="py-1 flex flex-row items-center justify-start space-x-2"
                    href=""
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.16667 8H10.8333V9.66667H9.16667V8ZM12.5 8H14.1667V9.66667H12.5V8ZM16.6667 13.4167C15.625 13.4167 14.625 13.25 13.6917 12.9417C13.6083 12.9167 13.5167 12.9 13.4333 12.9C13.2167 12.9 13.0083 12.9833 12.8417 13.1417L11.0083 14.975C8.65 13.775 6.71667 11.85 5.51667 9.49167L7.35 7.65C7.58333 7.425 7.65 7.1 7.55833 6.80833C7.25 5.875 7.08333 4.875 7.08333 3.83333C7.08333 3.375 6.70833 3 6.25 3H3.33333C2.875 3 2.5 3.375 2.5 3.83333C2.5 11.6583 8.84167 18 16.6667 18C17.125 18 17.5 17.625 17.5 17.1667V14.25C17.5 13.7917 17.125 13.4167 16.6667 13.4167ZM4.19167 4.66667H5.44167C5.5 5.4 5.625 6.125 5.825 6.825L4.825 7.83333C4.48333 6.825 4.26667 5.76667 4.19167 4.66667ZM15.8333 16.3083C14.7333 16.2333 13.6667 16.0167 12.6667 15.675L13.6667 14.675C14.375 14.875 15.1 15 15.8333 15.05V16.3083ZM15.8333 8H17.5V9.66667H15.8333V8Z"
                        fill="#444242"
                      />
                    </svg>

                    <span>Support</span>
                  </a>
                </li>
                <li className="mb-3 px-5 hover:bg-gray-100 dark:hover:bg-transparent">
                  <button className="py-1 flex flex-row items-center justify-start space-x-2">
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
                        stroke="#E85B67"
                        strokeWidth="1.5"
                        strokeMiterlimit={"10"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.23982 12H4.06982"
                        stroke="#E85B67"
                        strokeWidth="1.5"
                        strokeMiterlimit={"10"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.2398 12H12.2798"
                        stroke="#E85B67"
                        strokeWidth="1.5"
                        strokeMiterlimit={"10"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
                        stroke="#E85B67"
                        strokeWidth="1.5"
                        strokeMiterlimit={"10"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
                        stroke="#E85B67"
                        strokeWidth="1.5"
                        strokeMiterlimit={"10"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[#E85B67] dark:text-red-400">
                      Logout
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
