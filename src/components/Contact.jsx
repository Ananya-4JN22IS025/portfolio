import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";



function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side */}
          <div>

            <h2 className="text-5xl font-bold mb-8">
              Get In
              <span className="text-purple-600">
                {" "}Touch
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              I'm actively looking for Software Developer,
              Full Stack Developer and Java Developer roles.
              Feel free to connect regarding opportunities,
              projects or collaborations.
            </p>

            {/* Address */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-5 mb-5 hover:shadow-xl transition">

              <div className="bg-purple-100 p-4 rounded-xl">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 uppercase text-sm">
                  Address
                </p>

                <h3 className="font-semibold text-xl">
                  Shivamogga, Karnataka
                </h3>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-5 mb-5 hover:shadow-xl transition">

              <div className="bg-purple-100 p-4 rounded-xl">
                <FaEnvelope className="text-purple-600 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 uppercase text-sm">
                  Email
                </p>

                <h3 className="font-semibold text-xl">
                  ananyaprabhakar5403@gmail.com
                </h3>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-center gap-5">

              <div className="bg-purple-100 p-4 rounded-xl">
                <FaPhoneAlt className="text-purple-600 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 uppercase text-sm">
                  Phone
                </p>

                <h3 className="font-semibold text-xl">
                  +91 6362570103
                </h3>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-5">
                Follow Me
              </h3>

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

          </div>

          {/* Right Side */}
          <div className="flex items-center">

            <div className="bg-purple-50 border border-purple-200 rounded-3xl p-12 text-center shadow-lg w-full">

              <h3 className="text-4xl font-bold mb-6">
                Open To Opportunities
              </h3>

              <p className="text-gray-600 text-lg leading-8">
                Looking for opportunities as a
                <span className="text-purple-600 font-semibold">
                  {" "}Software Developer
                </span>,
                <span className="text-purple-600 font-semibold">
                  {" "}Full Stack Developer
                </span>
                {" "}or
                <span className="text-purple-600 font-semibold">
                  {" "}Java Developer
                </span>.
              </p>

              <a
                href="mailto:yourmail@gmail.com"
                className="inline-block mt-8 bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition"
              >
                Let's Connect
              </a>

            </div>

          </div>

        </div>
      </div>
      <footer className="bg-slate-600 py-2 mt-20">
  <div className="max-w-7xl mx-auto px-8">
    <p className="text-right text-white text-lg">
      Copyright © {new Date().getFullYear()} Ananya Prabhakar.
      All Rights Reserved.
    </p>
  </div>
</footer>
    </section>
    
  );
}

export default Contact;