import {
  FaHeartbeat,
  FaBrain,
  FaSchool
} from "react-icons/fa";





const projects = [
  {
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    title: "Heart Disease Prediction using Machine Learning",
    tech: "Python + ML + Machine Learning + Flask + TensorFlow ",
    
    description:
    `Developed a heart disease prediction system using clinical patient data and heart health features,
implementing Decision Tree, Random Forest, and SVM models with performance evaluation metrics,
along with a user-friendly web application for predicting heart disease outcomes.`

  },
  {
    icon: <FaBrain className="text-purple-600 text-3xl" />,
    title: "ECG Signal Analysis and Interpretation using deep learning",
    tech: "Python + CNN + Keras + TensorFlow + JavaScript + HTML + CSS",
    
    description:
    `Developed an ECG prediction system using image preprocessing and CNN models for accurate ECG
analysis and prediction, implemented using Python, TensorFlow/Keras, OpenCV, and Flask for web-based
prediction.`
  },
  {
    icon: <FaSchool className="text-blue-500 text-3xl" />,
    title: "ERP Project- School management system",
    tech: "Java + Spring Boot + MySQL + Postman + Docker + Kubernates + GitHub + Git + Next.js",
    description:
    `During my internship at Skyllx Technologies Pvt. Ltd., I completed training in Java Full Stack Development
and worked on an ERP-based School Management System project. The project included modules such as
student management, staff administration, leave management, attendance tracking, and financial
operations. A modern and user-friendly interface was developed using Next.js, while backend services
were built with Java Spring Boot framework. Git, Postman, and Docker were used for version control, API
testing, and deployment.`
  }
];



function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900">
            Projects
          </h2>

          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="space-y-8">
      {projects.map((project) => (
    <div
    
      key={project.title}
      className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
      <span className="flex items-center">
    {project.icon}
  </span>
      <h3 className="text-2xl font-bold">
        
        {project.title}
      </h3>
      </div>

      <p className="mt-4 text-gray-600">
        {project.tech}
      </p>

      <p className="mt-4 text-gray-600 leading-7 text-justify">
      {project.description}
      </p>
      
    </div>
  ))}        

        </div>
      </div>
    </section>
  );
}

export default Projects;