import { FaGithub, FaEye } from 'react-icons/fa';



export default function ProjectCard({
  image,
  title,
  description,
  githubLink,
  liveLink,
}) {
  return (
    <div className="bg-white/10 rounded-2xl shadow-lg overflow-hidden flex flex-col w-full max-w-md transition hover:scale-105 hover:shadow-2xl duration-300">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6 flex flex-col gap-4 ">
        <h2 className="text-2xl font-bold">{title}</h2>

        <p className="text-sm text-gray-300">{description}</p>

        <div className="mt-4 flex gap-4 items-center justify-center">

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 hover:text-blue-300"
          >
            <FaGithub /> GitHub
          </a>

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-300"
            > 
              <FaEye /> Preview
            </a>
          )}
        </div>

      </div>
    </div>
  );
}