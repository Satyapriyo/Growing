import mainImage from "../assets/best.svg";
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <>
      <section
        data-scroll
        data-scroll-speed="4"
        data-scroll-section
        className="bg-emerald-400 pb-20 rounded"
      >
        <div className="grid grid-cols-3 bg-emerald-400  h-[70h]">
          <div className="col-span-2">
            <img src={mainImage} alt="" />
          </div>
          <div className="">
            <p className="text-[100px] uppercase font-extrabold text-black">
              grow
            </p>
            <p className="text-[100px] uppercase font-extrabold text-black">
              your
            </p>
            <div className="flex">
              <p className="text-[100px] uppercase font-extrabold text-black">
                brand
              </p>
              <p className="uppercase text-5xl font-bold text-white mt-16 ml-2">
                10x
              </p>
            </div>
            <div className="mt-3">
              <button className="bg-slate-800 rounded-md px-10 py-2 font-bold m-3 text-2xl uppercase text-white">
                read more
              </button>
              <button className="bg-slate-100 shadow-lg px-10 py-2 rounded-md font-bold m-3 text-2xl uppercase text-black">
                get started
              </button>
            </div>
          </div>
        </div>
        <Marquee className="bg-slate-900 p-3 text-purple-300 my-10">
          <p className="font-bold text-2xl px-12 uppercase ">come join us!</p>
          <p className="font-bold text-2xl px-12 uppercase ">come join us!</p>
          <p className="font-bold text-2xl px-12 uppercase ">come join us!</p>
          <p className="font-bold text-2xl px-12 uppercase ">come join us!</p>
          <p className="font-bold text-2xl px-12 uppercase ">come join us!</p>
          <p className="font-bold text-2xl px-12 uppercase ">come join us!</p>
          <p className="font-bold text-2xl px-12 uppercase ">come join us!</p>
        </Marquee>
      </section>
    </>
  );
};

export default Home;
