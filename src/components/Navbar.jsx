// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

//         <h1 className="text-3xl font-bold">
//           My<span className="text-purple-600"> Portfolio</span>
//         </h1>

//         <ul className="hidden md:flex gap-10 font-medium">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#education">Education</a></li>
//           <li><a href="#internship">Internship</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



function Navbar() {
  const navItems = [
    "Home",
    "Skills",
    "Education",
    "Internship",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold">
          My
          <span className="text-purple-600">
            {" "}Portfolio
          </span>
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  inline-block
                  text-black
                  transition-colors
                  duration-300
                  hover:text-purple-600

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[3px]
                  after:bg-purple-600
                  after:rounded-full
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;