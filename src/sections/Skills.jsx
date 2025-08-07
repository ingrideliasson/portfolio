import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { IoMdFlower } from "react-icons/io";



export default function Skills(){
    return(
        <div className="flex flex-col gap-8 pt-24 md:pt-16 items-center font-montserrat font-medium "> 

            <IoMdFlower className="hidden lg:block absolute top-[10%] left-[10%] text-5xl md:text-8xl lg:text-9xl text-pink-800" />
            <IoMdFlower className="hidden lg:block absolute top-[6%] left-[16%] text-5xl md:text-8xl lg:text-6xl text-pink-800" />
            <IoMdFlower className="hidden lg:block absolute bottom-[20%] right-[15%] text-5xl md:text-8xl lg:text-8xl text-pink-800" />

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-mogra text-yellow-600">Skills</h2>

            <section className="grid grid-cols-3 md:grid-cols-5 gap-1 md:gap-4 p-8 max-w-6xl">

                <div className="flex flex-col w-28 h-28 items-center justify-center">
                    <FaReact className="text-blue-500 w-12 h-12" />
                    <div className="text-white">React</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <SiTailwindcss className="text-sky-500 w-12 h-12" />
                    <div className="text-white">Tailwind</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <FaHtml5 className="text-orange-500 w-12 h-12" />
                    <div className="text-white">HTML</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <FaCss3Alt className="text-blue-600 w-12 h-12" />
                    <div className="text-white">CSS</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <FaJs className="text-yellow-500 w-12 h-12" />
                    <div className="text-white">JavaScript</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <img src="/Logo_C_sharp.svg.png" alt=".C# Logo" className="w-12 h-13" />
                    <div className="text-white">C#</div>
                </div>

                <div className="flex flex-col w-28 h-28 items-center justify-center">
                    <img src="/NET_Core_Logo.png" alt=".NET Core Logo" className="w-12 h-12" />
                    <div className="text-white">.NET Core</div>
                </div>

                 <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <img src="/python.svg" alt="Python Logo" className="w-10 h-12" />
                    <div className="text-white">Python</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <PiFileSql className="text-blue-700 w-12 h-12" />
                    <div className="text-white">SQL</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <BiLogoVisualStudio className="text-blue-500 w-12 h-12" />
                    <div className="text-white">VS Code</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <FaGitAlt className="text-orange-500 w-12 h-12" />
                    <div className="text-white">Git</div>
                </div>

                <div className="flex flex-col w-28 h-28 p-4 items-center justify-center">
                    <FaGithub className="text-gray-200 w-12 h-12" />
                    <div className="text-white">GitHub</div>
                </div>

            </section>

        </div>
    );
}

