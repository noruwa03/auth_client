type MagicEmail = {
  close: () => void;
};

const MagicEmail = (props: MagicEmail) => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-full bg-[#000000cc] z-20">
        <div className="lg:w-2/5 w-[94%] sm:w-4/5 fixed top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] lg:p-8 sm:p-6 p-3 bg-white shadow-sm rounded-lg">
          <div
            onClick={props.close}
            className="text-red-400 text-lg text-end mb-2 cursor-default"
          >
            Close
          </div>
          <h1 className="font-semibold lg:text-lg text-base text-center text-slate-700 my-4">
            Enter your email for a link to be sent to you shortly.
          </h1>
          <input
            type="text"
            id="Email"
            name="email"
            className="block w-full mt-1 mb-3 outline-none border-[1px] border-gray-300 focus:border-black px-4 xl:py-3 py-3 rounded-lg placeholder:text-[#C4C4C4]  placeholder:font-normal lg:placeholder:text-base placeholder:text-sm lg:text-base text-sm"
            placeholder="name@gmail.com"
          />
          <button
            onClick={props.close}
            className="w-full bg-black py-4 outline-none text-white text-base font-medium mt-2 mb-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default MagicEmail;
