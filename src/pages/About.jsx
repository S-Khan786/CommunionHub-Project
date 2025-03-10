import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative h-60 md:h-80 bg-blue-600 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            About Me
          </h1>
        </div>

        {/* Introduction Section */}
        <div className="px-6 sm:px-10 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Hi there! 👋 I'm Mohammad Sahil
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            I'm a <strong>React.js Developer</strong> who loves creating
            intuitive and efficient web applications. My passion for coding
            comes from solving complex problems and turning ideas into
            user-friendly solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-50 px-6 sm:px-10 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            What I Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-medium text-blue-600">
                Frontend Development
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                I specialize in <strong>React.js</strong>, crafting dynamic and
                responsive user interfaces.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-medium text-blue-600">
                Backend Development
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Proficient in <strong>Node.js & Express</strong>, ensuring
                secure and scalable APIs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-medium text-blue-600">
                Software Development
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Passionate about building <strong>high-quality software</strong>{" "}
                that solves real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="px-6 sm:px-10 py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            My Mission
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            Whether you're here to collaborate, learn, or innovate, I aim to
            contribute by creating impactful software solutions. Let’s build
            something great together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
