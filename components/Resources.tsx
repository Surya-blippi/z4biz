import React, { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';

const resourcesData = [
  {
    title: "News",
    description: "Get the latest updates on our company and industry trends.",
    color: "from-purple-500 to-pink-500",
    bgGlow: "from-purple-300 to-pink-300",
  },
  {
    title: "Blogs",
    description: "Explore insights, tips, and trends in the technology space.",
    color: "from-blue-500 to-cyan-500",
    bgGlow: "from-blue-300 to-cyan-300",
  },
  {
    title: "Case Studies",
    description: "Discover how our solutions have transformed businesses.",
    color: "from-emerald-500 to-teal-500",
    bgGlow: "from-emerald-300 to-teal-300",
  }
];

const Resources = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${10 + Math.random() * 10}s infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              <div className={`w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl transform rotate-${Math.random() * 360}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section with gradient text and shine effect */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-6 animate-shine">
              Resources
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest news, blogs, and case studies
          </p>
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        </div>

        {/* Resources grid with hover effects and animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resourcesData.map((resource, index) => (
            <div
              key={resource.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${resource.bgGlow} opacity-20 blur-xl rounded-2xl`} />
              </div>
              
              <div className="relative p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping" />
                  <div className={`absolute top-4 left-4 w-8 h-[1px] bg-gradient-to-r ${resource.color} transform -rotate-45`} />
                </div>
                
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}>
                    {resource.title}
                  </h3>
                  <p className="text-gray-300">
                    {resource.description}
                  </p>
                  <button className="flex items-center space-x-2 text-white group/button">
                    <span className={`bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}>
                      Read More
                    </span>
                    <ChevronRightIcon className={`w-4 h-4 transform transition-transform group-hover/button:translate-x-1 text-gradient-to-r ${resource.color}`} />
                  </button>
                </div>

                {/* Floating elements */}
                <div className="absolute -right-2 -bottom-2 w-24 h-24">
                  <div className={`absolute inset-0 bg-gradient-to-r ${resource.color} opacity-20 blur-xl rounded-full animate-pulse`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated particles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Resources;