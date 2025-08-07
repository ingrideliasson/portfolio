import { FaGithub, FaEye } from 'react-icons/fa';



export default function ProjectCard({
  image,
  title,
  description,
  githubLink,
  liveLink,
}) {
  return (
    <div className="bg-yellow-600 rounded-2xl shadow-lg overflow-hidden flex flex-col w-full max-w-md  hover:scale-105 duration-300 border-4 border-yellow-600 ">
      <img  
        src={image}
        alt={title}
        className="h-60 w-full object-cover object-top"
      />

      <div className="p-6 flex flex-col gap-4 font-montserrat text-yellow-950 ">
        <h2 className="text-2xl font-bold ">{title}</h2>

        <p className="text-sm text-yellow-950">{description}</p>

        <div className="mt-4 flex gap-4 items-center justify-center">

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 text-yellow-950 hover:text-pink-900"
          >
            <FaGithub /> GitHub
          </a>

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-yellow-950 hover:text-pink-900"
            > 
              <FaEye /> Preview
            </a>
          )}
        </div>

      </div>
    </div>
  );
}