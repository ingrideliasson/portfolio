import ProjectCard from '/Users/ingrideliasson/Downloads/Lexicon/frontend/portfolio/src/components/ProjectCard.jsx';

export default function Projects(){
    return(
        <div className="flex flex-col">


            <div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 text-yellow-600 font-mogra">Projects</h2>
            </div>

            <div className="grid sm:gap-8 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-8 lg:p-12 lg:px-48">

                <ProjectCard
                image="/images/cv-project.png"
                title="CV-template"
                description="A CV-template created with HTML and CSS."
                githubLink="https://github.com/ingrideliasson/CV-template"
                liveLink="https://ingrideliasson.github.io/CV-template/"
                />

                <ProjectCard
                image="/images/macaron-project.png"
                title="Malmö Macarons"
                description="An e-commerce website for a fictional macaron shop. Created with React and Tailwind CSS."
                githubLink="https://github.com/ingrideliasson/malmomacarons"
                liveLink="https://ingrideliasson.github.io/malmomacarons/"
                />

                <ProjectCard
                image="/images/travelsite.png"
                title="Wanderlust"
                description="A travel agency website created with React and Tailwind CSS."
                githubLink="https://github.com/ingrideliasson/travelsite"
                liveLink="https://ingrideliasson.github.io/travelsite/"
                />

                <ProjectCard
                image="/images/assettracker-project.png"
                title="Asset Tracker"
                description="A .NET console application for asset tracking. Created with C#, REST API and Microsoft Entity Framework."
                githubLink="https://github.com/ingrideliasson/AssetTracker_EF"
                />

                <ProjectCard
                image="/images/clock.png"
                title="Another project"
                description="Working on it..."
                githubLink="https://github.com/ingrideliasson/repo-name"
                liveLink="https://ingrideliasson.github.io/repo-name/"
                />

                <ProjectCard
                image="/images/clock.png"
                title="Another project"
                description="Working on it..."
                githubLink="https://github.com/ingrideliasson/repo-name"
                liveLink="https://ingrideliasson.github.io/repo-name/"
                />
            </div>
        </div>
    );
}

