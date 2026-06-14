// import { FaLaptopCode } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

function Internship() {
  return (
    <section id="internship" className="py-28 bg-[#f5f5f7]">
      <div className="max-w-screen-xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900">
            Internship
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

         <h3 className="text-2xl font-bold flex items-center gap-3">
            <FaBriefcase className="text-purple-600" />
            Full-Stack Web Development Intern
          </h3>

          <p className="text-gray-600">
            Skyllx Technologies Pvt. Ltd. - Java Full-Stack Development Intern
          </p>

          <p className="mt-4">
           During my internship as a Software Developer Intern, I gained practical experience in developing web applications using React.js and Spring Boot. I worked on building responsive user interfaces and integrating them with backend services through REST APIs. The internship helped me strengthen my understanding of Java, Spring Boot, database connectivity, and application debugging. I also learned to use Git for version control and collaborated with team members on project development. This experience enhanced both my technical skills and my understanding of real-world software development practices.
          </p>

        </div>
      </div>
    </section>
  );
}

export default Internship;