import { FaGithub,FaLinkedin  } from "react-icons/fa";




const team = [
  {
    name: "Jane Cooper",
    role: "CEO",
    linkedIn: "sdsdsd",
    github: "sdsdsdsd",
  },
  {
    name: "John Cooper",
    role: "CEO",
    linkedIn: "sdsdsd",
    github: "sdsdsdsd",
  },
  {
    name: "Joaco Cooper",
    role: "CEO",
    linkedIn: "sdsdsd",
    github: "sdsdsdsd",
  },
  {
    name: "Dever Cooper",
    role: "CEO",
    linkedIn: "sdsdsd",
    github: "sdsdsdsd",
  },
  {
    name: "Frula Cooper",
    role: "CEO",
    linkedIn: "sdsdsd",
    github: "sdsdsdsd",
  },
  {
    name: "Corner Cooper",
    role: "CEO",
    linkedIn: "sdsdsd",
    github: "sdsdsdsd",
  },
];

export const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font font-nunito ">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-nunito">
          Nuestro equipo
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
        Este proyecto proporcionará una experiencia enriquecida para los usuarios, promoviendo la exploración y apoyo a los pueblos rurales a través de la gastronomía, utilizando la tecnología como puente para el crecimiento económico y la sostenibilidad.
        </p>
      </div>
      <div className="flex flex-wrap -m-2">
        {team.map((person) => (
          <div key={person.name} className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow flex justify-between items-center">
                <div>
                  <h2 className="text-gray-900 title-font font-medium">
                    {person.name}
                  </h2>
                  <p className="text-gray-500">{person.role}</p>
                </div>
                <div className="flex space-x-2">
                  <a href={person.linkedIn} className="text-gray-500 hover:text-gray-700">
                    <FaLinkedin size={24} />
                  </a>
                  <a href={person.github} className="text-gray-500 hover:text-gray-700">
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};
