import { IoMdFlower } from "react-icons/io";


export default function Home() {
  return (
    <div className="w-full h-full bg-brown text-yellow-600 overflow-hidden px-6 md:py-12 pt-28 md:pt-12">

      <IoMdFlower className="hidden lg:block absolute top-[10%] left-[10%] text-5xl md:text-8xl lg:text-9xl text-pink-800" />
      <IoMdFlower className="hidden lg:block absolute bottom-[15%] right-[10%] text-5xl md:text-8xl lg:text-8xl text-pink-800" />
      <IoMdFlower className="hidden lg:block absolute bottom-[12%] right-[14%] text-5xl md:text-8xl lg:text-6xl text-pink-800" />

      <div className="z-10 max-w-6xl text-center mx-auto">
        <h1 className="font-mogra text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ">
          Hi! I'm Ingrid.
        </h1>
        <h2 className="font-mogra text-4xl md:text-6xl lg:text-7xl font-bold ">
          I'm a fullstack developer{" "}
          <span className="text-violet-400 text-xl md:text-3xl lg:text-5xl">to be.</span>
        </h2>
      </div>
    </div>
  );
}

