import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="relative h-80">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-extrabold text-white">About Me</h1>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="px-8 py-12">
            <h2 className="text-3xl font-semibold text-gray-900">
              Hey there! 👋 I'm Mohammad Sahil
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I'm a <strong>React.js Developer</strong> with a strong passion
              for building efficient, scalable, and user-friendly web
              applications. My journey in web development started with a love
              for problem-solving and a curiosity for how things work on the
              internet.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-50 px-8 py-12">
            <h2 className="text-2xl font-semibold text-gray-900">What I Do</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-blue-600">
                  Frontend Development
                </h3>
                <p className="text-gray-600 mt-2">
                  I specialize in <strong>React.js</strong>, building dynamic
                  and responsive user interfaces.
                </p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-blue-600">
                  Backend Development
                </h3>
                <p className="text-gray-600 mt-2">
                  Proficient in <strong>Node.js & Express</strong>, developing
                  robust and secure APIs.
                </p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-blue-600">
                  Software Developer
                </h3>
                <p className="text-gray-600 mt-2">
                  Passionate <strong>Software Developer</strong> dedicated to building innovative
                  and efficient solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Mission Section */}
          <div className="px-8 py-12">
            <h2 className="text-2xl font-semibold text-gray-900">My Mission</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              No matter if you want to learn about different faiths, share your
              own beliefs, or connect with like-minded individuals, Communion
              offers a space to make meaningful connections. Be a part of our
              journey in fostering understanding, unity, and friendships across
              diverse cultures and traditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
