import { IoMdFlower } from "react-icons/io";
import { useState } from "react";

export default function About() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      text: `Hello! I'm Ingrid. I'm 27 years old and based in Malmö. My background is in linguistics and I have a master's degree in language technology (NLP, machine learning, AI...). 
      I'm currently studying to be a fullstack developer and I'm so excited for it. I really enjoy both the creative aspect of frontend development as well as the 
      structural aspect of backend development. Most of all, I enjoy learning and developing. When I'm not coding, you'll find me at the beach, in a second hand shop, at the gym,
      or deep in a book or board game. Scroll down to see my skills and projects!`
    },
    sv: {
      text: `Hej! Jag heter Ingrid — jag är 27 år och bor i Malmö. Jag har en bakgrund inom språkvetenskap och en masterexamen i Språkteknologi (tänk NLP, maskininlärning, AI...). 
      Just nu pluggar jag till fullstack-utvecklare och är så taggad på att jobba med det. Jag gillar verkligen både den kreativa aspekten i frontend-utveckling 
      och den strukturella i backend-utveckling. Framför allt älskar jag att lära mig nya saker och att utvecklas i det jag gör. När jag inte programmerar hittar du mig på stranden, 
      i second hand-butiken, på gymmet, eller med näsan i en bok eller ett brädspel. Scrolla ner för att se mina skills och projekt! ` 
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row bg-brown text-yellow-600 px-2 md:px-12 md:mt-16 gap-24">

      <div className="p-24 "></div>

        <div>
          <div className="flex flex-col items-center mb-12 gap-2">
              <h1 className="font-mogra text-5xl md:text-6xl lg:text-7xl font-bold mt-12 md:mt-16 text-center ">
              About me
              </h1>

              <button
                  onClick={() => setLanguage(language === "en" ? "sv" : "en")}
                  className=" px-6 rounded-full bg-transparent text-yellow-500 font-semibold hover:scale-105 duration-300 underline underline-offset-2">
                  {language === "en" ? "Svenska" : "English"}
              </button>
          </div>
        

          <div className="flex flex-col items-center space-y-6 md:space-y-10 lg:space-y-16  max-w-4xl mx-auto">
            <p className="font-montserrat text-lg md:text-xl max-w-xl text-center">
                {content[language].text}
            </p>

            <a
              href="/CV.pdf"
              download
              className="font-semibold font-montserrat py-3 px-6 rounded-full bg-pink-800 text-white hover:scale-105 duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      


        <div className="flex md:flex-col gap-2 md:gap-8 justify-center md:justify-start md:ml-16 md:mt-12 ">
          <img 
          src={`${process.env.PUBLIC_URL}/images/bild1.jpeg`} 
          alt="pic" 
          className="w-24 h-24 md:w-44 md:h-44 object-cover rounded-full" 
          />
          <img 
          src={`${process.env.PUBLIC_URL}/images/bild2.jpeg`} 
          alt="pic" 
          className="w-24 h-24 md:w-44 md:h-44 object-cover rounded-full" 
          />
          <img 
          src={`${process.env.PUBLIC_URL}/images/bild3.jpeg`} 
          alt="pic" 
          className="w-24 h-24 md:w-44 md:h-44 object-cover rounded-full" 
          />
        </div>

        <IoMdFlower className="hidden lg:block absolute top-[10%] right-[97%] text-5xl md:text-8xl lg:text-9xl text-pink-800" />
        <IoMdFlower className="hidden lg:block absolute top-[26%] right-[95%] text-5xl md:text-8xl lg:text-6xl text-pink-800" />

    </div>
  );
}