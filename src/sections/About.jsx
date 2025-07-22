export default function About(){
    return(
        <div className="flex flex-col items-center px-6 max-w-4xl mx-auto gap-12 font-montserrat text-gray-800 gap-36">

        <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 text-transparent bg-clip-text my-12 mt-24">
            About Me
            </h1>
            <p className="text-lg max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non aliquam odio. Proin odio ante, consectetur vitae faucibus sed, euismod volutpat neque. 
            Suspendisse vel enim urna. Sed rhoncus erat id odio elementum mollis. Cras fermentum molestie orci vel porttitor. Mauris posuere velit nec sem auctor malesuada. 
            Etiam efficitur molestie malesuada. Praesent dignissim, turpis eget sagittis feugiat, eros lorem consectetur velit, sed maximus nisl eros quis massa. 
            Phasellus urna dui, convallis et ipsum a, hendrerit rhoncus odio. Maecenas quis volutpat purus. Suspendisse non rhoncus orci.
            {/* Integer varius orci nec tellus feugiat elementum. Mauris ut sapien vel felis tempor pellentesque. Sed vel mi est. Nunc a nunc ac elit aliquet efficitur vitae a nunc. 
            Vestibulum sit amet diam ac leo rutrum dapibus a vitae leo. Sed luctus finibus dapibus. Vivamus tempus nisi non neque sollicitudin, sit amet scelerisque risus suscipit. */}
            </p>
        </div>


        <a
            href="/resume.pdf"
            download
            className="bg-gradient-to-r from-blue-300 to-pink-300 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
            Download CV
        </a>
        </div>
        
    );
}




