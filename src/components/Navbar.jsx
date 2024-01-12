import vite from "../assets/vite.svg";
import section from "../assets/react.svg";
const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 opacity-70 p-3 bg-slate-50 md:p-6 grid grid-cols-2">
      <img src={vite} className="lg:ml-20 md:ml-16" alt="" />
      <div className="hidden md:block">
        <div className="text-black text-xl cursor-pointer grid grid-cols-4 font-semibold">
          <p className="hover:bg-slate-900 hover:text-purple-300 text-center px-10 py-2 rounded-md ease-in-out duration-200 mx-2">
            Home
          </p>
          <p className="hover:bg-slate-900 hover:text-purple-300  text-center px-10 py-2 rounded-md ease-in-out duration-200 mx-2">
            Services
          </p>
          <p className="hover:bg-slate-900 hover:text-purple-300  text-center px-10 py-2 rounded-md ease-in-out duration-200 mx-2">
            Location
          </p>
          <p className="hover:bg-slate-900 hover:text-purple-300  text-center px-10 py-2 rounded-md ease-in-out duration-200 mx-2">
            About
          </p>
        </div>
      </div>
      <div className="block  md:hidden">
        <img className="absolute right-3" src={section} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
