import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen
        flex items-center
        relative
        overflow-hidden
        bg-[#f8f8f8]"
    >
      <div
        className="
          absolute
          right-0
          top-0
          w-[40%]
          h-full
          bg-gradient-to-l
          from-purple-300
          via-purple-100
          to-transparent
        "
      />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-8 relative z-10">

        <div>

          <h1 className="text-6xl font-bold mb-5 ">
 Hello, I'm
  <br />

  <span className="text-purple-600">
    Ananya Prabhakar
  </span>
</h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
  Aspiring
  <span className="text-purple-600">
    {" "}Full Stack Developer
  </span>
</h2>

          <p className="text-gray-600 text-lg leading-8">
            Passionate Information Science Engineering student skilled in
            React.js, Java, SQL, Python and Web Development.
            Building scalable and user-friendly applications.
          </p>

          <div className="flex gap-5 mt-8">
           <a
  href="mailto:ananyaprabhakar5403@gmail.com?subject=Software Developer Opportunity"
  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
>
  Contact Me
</a>

            <a
  href="/ananya prabhakar (14).pdf"
  download
  
  
>
  <button className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
    Resume
  </button>
</a>
          </div>

          <div className="flex gap-5 mt-8 text-4xl">
  <a
    href="https://github.com/Ananya-4JN22IS025/CODSOFT/tree/my-new-branch"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="text-gray-700 hover:text-purple-600 hover:scale-110 transition duration-300" />
  </a>

  <a
    href="https://linkedin.com/in/ananya-prabhakar-5b0583273"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="text-blue-600 hover:text-purple-600 hover:scale-110 transition duration-300" />
  </a>
</div>
        </div>

        <div className="flex justify-end items-center pr-0">
      <div
  className="
    w-[400px]
    h-[400px]
    rounded-full
    overflow-hidden
    shadow-xl
  "
>
  <img
    src="/Myphoto.jpeg"
    alt="Ananya Prabhakar"
    className="
      w-full
      h-full
      object-cover
      scale-125
    "
  />
</div>
    </div>

      </div>
    </section>
  );
}

export default Hero;