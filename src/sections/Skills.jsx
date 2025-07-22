import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";



export default function Skills(){
    return(
        <div className="flex flex-col gap-16 items-center font-montserrat font-medium"> 

            <h2 className="text-5xl font-bold font-montserrat">SKILLS</h2>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-12 p-8">

                <div className="flex flex-col w-28 h-28 shadow-lg rounded-full items-center justify-center">
                    <FaReact className="text-blue-500 w-12 h-12" />
                    <div>React</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <SiTailwindcss className="text-sky-500 w-12 h-12" />
                    <div>Tailwind</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <FaHtml5 className="text-orange-500 w-12 h-12" />
                    <div>HTML</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <FaCss3Alt className="text-blue-600 w-12 h-12" />
                    <div>CSS</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <FaJs className="text-yellow-500 w-12 h-12" />
                    <div>JavaScript</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <img src="/Logo_C_sharp.svg.png" alt=".C# Logo" className="w-12 h-13" />
                    <div>C#</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl rounded-full items-center justify-center">
                    <img src="/NET_Core_Logo.png" alt=".NET Core Logo" className="w-12 h-12" />
                    <div>.NET Core</div>
                </div>

                 <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <img src="/python.svg" alt="Python Logo" className="w-10 h-12" />
                    <div>Python</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <PiFileSql className="text-blue-900 w-12 h-12" />
                    <div>SQL</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <FaGitAlt className="text-orange-500 w-12 h-12" />
                    <div>Git</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <FaGithub className="text-black-500 w-12 h-12" />
                    <div>GitHub</div>
                </div>

                <div className="flex flex-col w-28 h-28 bg-white shadow-xl p-4 rounded-full items-center justify-center">
                    <BiLogoVisualStudio className="text-blue-500 w-12 h-12" />
                    <div>VS Code</div>
                </div>

            </section>

        </div>


        /* <div className="bg-blue-100 p-8 flex flex-col gap-1 text-center">
            <div className="bg-green-100 rounded-full p-4">
                <div><BiLogoVisualStudio className="text-blue-500 w-10 h-10" /></div>
            </div>
            <div>VS Code</div>
        </div> */



        // <div className="flex flex-col items-center gap-16">

        //     <div>
        //         <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-300 to-pink-300 text-transparent bg-clip-text my-16">Skills</h2>
        //     </div>


        //     <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center text-gray-700">
                
        //         <div>

        //             <ul className="space-y-5 text-gray-700 text-2xl">
        //                 <li className="flex items-center gap-3 backdrop-blur-md bg-gray-100 border p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        //                 <FaReact className="text-blue-500" /> React
        //                 </li>
        //                 <li className="flex items-center gap-3 backdrop-blur-md bg-white/60 border border-white/40 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        //                 <SiTailwindcss className="text-sky-400" /> Tailwind CSS
        //                 </li>
        //                 <li className="flex items-center gap-3 backdrop-blur-md bg-white/60 border border-white/40 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        //                 <FaJs className="text-yellow-500" /> JavaScript
        //                 </li>
        //                 <li className="flex items-center gap-3">
        //                 <FaHtml5 className="text-orange-500" /> HTML
        //                 </li>
        //                 <li className="flex items-center gap-3">
        //                 <FaCss3Alt className="text-blue-600" /> CSS
        //                 </li>
        //             </ul>

        //         </div>

        //         <div>

        //             <ul className="space-y-5 text-gray-700 text-2xl">
        //                 <li className="flex items-center gap-3 backdrop-blur-md bg-white/60 border border-white/40 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        //                 <img src="/Csharp_Logo.png" alt=".NET Core Logo" width={40} height={40} /> C#
        //                 </li>
        //                 <li className="flex items-center gap-3 backdrop-blur-md bg-white/60 border border-white/40 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        //                 <img src="/NET_Core_Logo.png" alt=".NET Core Logo" width={40} height={40} /> .NET Core
        //                 </li>
        //                 <li className="flex items-center gap-3">
        //                 <img src="/python.svg" alt="Python Logo" width={40} height={40} /> Python
        //                 </li>
        //                 <li className="flex items-center gap-3">
        //                 <PiFileSql /> SQL
        //                 </li>
        //             </ul>

        //         </div>

        //         <div>
        //             <ul className="space-y-5 text-gray-700 text-2xl ">
        //                 <li className="flex items-center gap-3">
        //                 <FaGitAlt className="text-orange-500" /> Git
        //                 </li>
        //                 <li className="flex items-center gap-3">
        //                 <FaGithub className="text-black" /> GitHub
        //                 </li>
        //                 <li className="flex items-center gap-3">
        //                 <BiLogoVisualStudio  className="text-blue-500" /> VS Code
        //                 </li>
        //             </ul>

        //         </div>

        //     </div>

        // </div>
    );
}

// backdrop-blur-md bg-white/60 border border-white/40 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300
