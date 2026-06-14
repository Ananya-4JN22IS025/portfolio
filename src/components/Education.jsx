

// function Education() {
//   const education = [
//     {
//       year: "2022 - 2026",
//       title: "Bachelor of Engineering",
//       institute:
//         "Jawaharlal Nehru New College of Engineering, Shivamogga",
//       score: "CGPA: 8.58 / 10.0",
//     },
//     {
//       year: "2019 - 2021",
//       title: "Pre-University",
//       institute: "Govt. P U College, Thirthahalli",
//       score: "92.33%",
//     },
//     {
//       year: "2017 - 2019",
//       title: "Matriculation",
//       institute: "Govt. Girls High School, Thirthahalli",
//       score: "87.84%",
//     },
//   ];

//   return (
//     <section id="education" className="py-28 bg-slate-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-5xl font-bold text-center mb-20">
//           Education
//         </h2>

//         <div className="relative">

//           <div className="absolute left-1/2 top-0 h-full w-1 bg-purple-300 -translate-x-1/2"></div>

//           {education.map((item, index) => (
//             <div
//               key={index}
//               className={`mb-16 flex items-center ${
//                 index % 2 === 0
//                   ? "justify-start"
//                   : "justify-end"
//               }`}
//             >
//               <div className="w-[45%] bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition duration-300">

//                 <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
//                   {item.year}
//                 </span>

//                 <h3 className="text-3xl font-bold mt-5">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-600 mt-2">
//                   {item.institute}
//                 </p>

//                 <p className="text-purple-600 font-semibold mt-4">
//                   {item.score}
//                 </p>
//               </div>

//               <div className="absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Education;

// import { motion } from "framer-motion";
// import { FaGraduationCap } from "react-icons/fa";

// function Education() {
//   const education = [
//     {
//       year: "2022 - 2026",
//       title: "Bachelor of Engineering",
//       institute:
//         "Jawaharlal Nehru New College of Engineering, Shivamogga",
//       score: "CGPA: 8.58 / 10.0",
//     },
//     {
//       year: "2019 - 2021",
//       title: "Pre-University",
//       institute: "Govt. P U College, Thirthahalli",
//       score: "92.33%",
//     },
//     {
//       year: "2017 - 2019",
//       title: "Matriculation",
//       institute: "Govt. Girls High School, Thirthahalli",
//       score: "87.84%",
//     },
//   ];

//   return (
//     <section
//       id="education"
//       className="py-28 bg-slate-950 text-white"
//     >
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-6xl font-bold">
//             Educa
//             <span className="text-purple-500">
//               tion
//             </span>
//           </h2>

//           <div className="w-28 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Center Line */}
//           <div className="absolute left-1/2 top-0 h-full w-1 bg-purple-600/40 -translate-x-1/2"></div>

//           {education.map((item, index) => (
//             <div
//               key={index}
//               className={`relative flex items-center mb-20 ${
//                 index % 2 === 0
//                   ? "justify-start"
//                   : "justify-end"
//               }`}
//             >
//               {/* Animated Card */}
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   x: index % 2 === 0 ? -100 : 100,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   duration: 0.8,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className="
//                   w-full
//                   md:w-[45%]
//                   bg-slate-900
//                   border
//                   border-purple-500/20
//                   rounded-3xl
//                   p-8
//                   shadow-xl
//                   hover:border-purple-500
//                   hover:scale-105
//                   transition-all
//                   duration-300
//                 "
//               >
//                 {/* Year */}
//                 <span
//                   className="
//                   inline-block
//                   bg-purple-500/20
//                   text-purple-400
//                   px-4
//                   py-2
//                   rounded-full
//                   text-sm
//                   font-semibold
//                   mb-5
//                 "
//                 >
//                   {item.year}
//                 </span>

//                 {/* Degree */}
//                 <h3 className="text-3xl font-bold mb-3">
//                   {item.title}
//                 </h3>

//                 {/* Institute */}
//                 <p className="text-slate-400 text-lg">
//                   {item.institute}
//                 </p>

//                 {/* Score */}
//                 <p className="mt-5 text-purple-400 font-semibold text-xl">
//                   {item.score}
//                 </p>
//               </motion.div>

//               {/* Timeline Dot */}
//               <div
//                 className="
//                 absolute
//                 left-1/2
//                 -translate-x-1/2
//                 w-14
//                 h-14
//                 bg-slate-900
//                 border-4
//                 border-purple-500
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 shadow-lg
//               "
//               >
//                 <FaGraduationCap
//                   className="text-purple-500 text-xl"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Education;


import { motion, useScroll } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaBookOpen,
} from "react-icons/fa";

function Education() {
  const education = [
    {
      year: "2022 - 2026",
      title: "B.E in Information Science and Engineering",
      institute:
        "Jawaharlal Nehru New College of Engineering, Shivamogga",
      score: "CGPA: 8.58 / 10.0",
      icon: <FaGraduationCap size={22} />,
    },
    {
      year: "2019 - 2021",
      title: "Pre-University Course (Science)",
      institute: "Govt. P U College, Thirthahalli",
      score: "92.33%",
       icon: <FaBookOpen size={22} />,
    },
    {
      year: "2017 - 2019",
      title: "Secondary School Leaving Certificate (SSLC)",
      institute: "Govt. Girls High School, Thirthahalli",
      score: "87.84%",
       icon: <FaSchool size={22} />,
    },
  ];

  const { scrollYProgress } = useScroll();

  return (
    <section
      id="education"
      className="py-1 bg-[#f5f5f7]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900">
            Education
          </h2>

          <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          {/* Center Line */}
<div
  className="
    absolute
    left-1/2
    top-0
    h-full
    w-[2px]
    bg-purple-200
    -translate-x-1/2
  "
>
  <motion.div
    className="
      absolute
      top-0
      left-0
      w-full
      bg-purple-600
      origin-top
    "
    style={{
      scaleY: scrollYProgress,
      height: "100%",
    }}
  />
</div>

          {education.map((item, index) => (
            <div
              key={index}
              className={`relative flex mb-12 ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {/* Timeline Icon */}
              <div
                className="
                  absolute
                  left-1/2
                  top-10
                  -translate-x-1/2
                  z-20
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    bg-white
                    border-[3px]
                    border-purple-500
                    rounded-full
                    flex
                    items-center
                    justify-center
                    shadow-sm
                  "
                >
                  <div className="text-purple-600">
                  {item.icon}
                  </div>
                </div>
              </div>

              {/* Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  w-[46%]
                  bg-white
                  rounded-[28px]
                  p-8
                  shadow-md
                "
              >
                {/* Year Badge */}
                <span
                  className="
                    inline-block
                    bg-purple-100
                    text-purple-600
                    px-5
                    py-2
                    rounded-full
                    text-xs
                    font-bold
                    tracking-wider
                  "
                >
                  {item.year}
                </span>

                {/* Degree */}
                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                    mt-6
                  "
                >
                  {item.title}
                </h3>

                {/* Institute */}
                <p
                  className="
                    text-gray-600
                    text-base
                    mt-3
                  "
                >
                  {item.institute}
                </p>

                {/* Score */}
                <p
                  className="
                    text-purple-600
                    font-semibold
                    text-base
                    mt-5
                  "
                >
                  {item.score}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;