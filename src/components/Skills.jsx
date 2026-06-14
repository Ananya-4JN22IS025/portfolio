import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaCode,
  FaLeaf,
  FaDocker
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiPostman,
  
} from "react-icons/si";

import { BsDatabase } from "react-icons/bs";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      description:
        "Building responsive and user-friendly interfaces.",
      skills: [
        {
          name: "React JS",
          icon: <FaReact size={30} className="text-cyan-400" />,
        },
        {
          name: "JavaScript",
          icon: (
            <SiJavascript
              size={30}
              className="text-yellow-400"
            />
          ),
        },
        {
          name: "HTML5",
          icon: (
            <FaHtml5
              size={30}
              className="text-orange-500"
            />
          ),
        },
        {
          name: "CSS3",
          icon: (
            <FaCss3Alt
              size={30}
              className="text-blue-500"
            />
          ),
        },
        
      ],
    },

    {
      title: "Backend Technologies",
      description:
        "Developing robust server-side applications and APIs.",
      skills: [
        {
          name: "Java",
          icon: (
            <FaJava
              size={30}
              className="text-red-500"
            />
          ),
        },
        {
  name: "Spring Boot",
  icon: (
    <FaLeaf
      size={30}
      className="text-green-600"
    />
  ),
},

{
          name: "Python",
          icon: (
            <FaPython
              size={30}
              className="text-blue-500"
            />
          ),
        },
      ],
    },

    {
      title: "DATABASE",
      description:
        "Managing structured and relational data.",
      skills: [
        {
          name: "MySQL",
          icon: (
            <SiMysql
              size={30}
              className="text-blue-600"
            />
          ),
        },
        {
  name: "SQL",
  icon: (
    <BsDatabase
      size={30}
      className="text-blue-600"
    />
  ),
},

      ],
    },

    {
      title: "SOFTWARE TOOLS",
      description:
        "Development, collaboration and testing tools.",
      skills: [
        {
          name: "Git",
          icon: (
            <FaGitAlt
              size={30}
              className="text-orange-500"
            />
          ),
        },
        {
          name: "GitHub",
          icon: (
            <FaGithub
              size={30}
              className="text-black"
            />
          ),
        },

        {
      name: "Docker",
      icon: (
        <FaDocker
          size={30}
          className="text-blue-500"
        />
      ),
    },
        {
  name: "VS Code",
  icon: (
    <FaCode
      size={30}
      className="text-blue-500"
    />
  ),
},
        {
          name: "Postman",
          icon: (
            <SiPostman
              size={30}
              className="text-orange-500"
            />
          ),
        },
        {
  name: "REST APIs",
  icon: (
    <FaCode
      size={30}
      className="text-green-500"
    />
  ),
},
        
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-12 bg-[#f5f5f7]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Technical{" "}
            <span className="text-purple-600">
              Proficiency
            </span>
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="mb-16"
          >
            {/* Category Header */}
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-slate-900">
                {category.title}
              </h3>

              <p className="text-lg text-gray-500 mt-2">
                {category.description}
              </p>
            </div>

            <div className="border-b border-gray-200 mb-8"></div>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    bg-white
                    rounded-2xl
                    shadow-sm
                    border
                    border-gray-100
                    p-5
                    flex
                    items-center
                    gap-4
                    min-h-[90px]
                    hover:border-purple-500
                    transition-all
                    duration-300
                  "
                >
                  <div className="bg-gray-50 p-3 rounded-xl">
                    {skill.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-slate-800">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;