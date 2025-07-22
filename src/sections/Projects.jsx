import ProjectCard from '/Users/ingrideliasson/Downloads/Lexicon/frontend/portfolio/src/components/ProjectCard.jsx';

export default function Projects(){
    return(
        <div>
            <div>
                    <h2 className="text-4xl font-semibold text-center mb-4 text-gray-600">Projects</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 px-48">
                <ProjectCard
                image="/macarons-project.png"
                title="Malmö Macarons"
                description="An e-commerce website for a fictive macaron shop. Created with React and Tailwind CSS."
                githubLink="https://github.com/ingrideliasson/weather-app"
                liveLink="https://ingridweather.netlify.app"
                />

                <ProjectCard
                image="/images/myproject.png"
                title="Weather App"
                description="A responsive weather forecast app using React and OpenWeather API."
                githubLink="https://github.com/ingrideliasson/weather-app"
                liveLink="https://ingridweather.netlify.app"
                />

                <ProjectCard
                image="/images/myproject.png"
                title="Weather App"
                description="A responsive weather forecast app using React and OpenWeather API."
                githubLink="https://github.com/ingrideliasson/weather-app"
                liveLink="https://ingridweather.netlify.app"
                />

                <ProjectCard
                image="/images/myproject.png"
                title="Weather App"
                description="A responsive weather forecast app using React and OpenWeather API."
                githubLink="https://github.com/ingrideliasson/weather-app"
                liveLink="https://ingridweather.netlify.app"
                />

                <ProjectCard
                image="/images/myproject.png"
                title="Weather App"
                description="A responsive weather forecast app using React and OpenWeather API."
                githubLink="https://github.com/ingrideliasson/weather-app"
                liveLink="https://ingridweather.netlify.app"
                />
            </div>
        </div>
    );
}

