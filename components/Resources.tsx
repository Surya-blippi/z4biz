import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

const resourcesData = [
  {
    title: "News",
    description: "Get the latest updates on our company and industry trends.",
    color: "from-purple-500 to-pink-500",
    bgGlow: "from-purple-300 to-pink-300",
    link: "/news"
  },
  {
    title: "Case Studies",
    description: "Discover how our solutions have transformed businesses.",
    color: "from-emerald-500 to-teal-500",
    bgGlow: "from-emerald-300 to-teal-300",
    link: "/case-studies"
  }
];

const Resources = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 10}rem`,
                height: `${Math.random() * 10 + 10}rem`,
                animation: `float ${12 + Math.random() * 12}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 6}s`
              }}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${i % 2 === 0 ? 'from-blue-700/10 to-purple-700/10' : 'from-emerald-600/10 to-teal-600/10'} blur-3xl`} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(49,46,129,0.15)_0%,rgba(0,0,0,0)_70%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="absolute -top-20 sm:-top-28 left-1/2 transform -translate-x-1/2 w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] bg-indigo-600/15 rounded-full blur-[100px] opacity-50 animate-pulse pointer-events-none"></div>
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-100 to-blue-100 bg-clip-text text-transparent mb-5 animate-shine tracking-tight">
              Explore Our Insights
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Stay informed with our latest company news and success stories.
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {resourcesData.map((resource, index) => (
            <Link 
              href={resource.link} 
              key={resource.title}
              className="block transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 rounded-2xl"
            >
              <div
                className="group relative h-full rounded-2xl overflow-hidden border border-slate-800/50 bg-slate-900/30 backdrop-blur-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:border-slate-700/70 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transform: 'translateZ(0)' }}
              >
                {/* Background Glow on Hover */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ease-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden="true"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgGlow} opacity-30 blur-3xl`} />
                  <div className={`absolute -inset-4 bg-gradient-to-r ${resource.color} opacity-15 blur-2xl animate-pulse`} style={{ animationDuration: '5s' }}/>
                </div>

                {/* Card Content */}
                <div className="relative p-8 z-10 h-full flex flex-col">
                  {/* Corner accents */}
                  <div className={`absolute top-0 left-0 h-8 w-8 border-t border-l rounded-tl-2xl transition-all duration-300 ${hoveredIndex === index ? 'border-blue-400/60' : 'border-slate-700/0 group-hover:border-slate-700/40'}`}></div>
                  <div className={`absolute bottom-0 right-0 h-8 w-8 border-b border-r rounded-br-2xl transition-all duration-300 ${hoveredIndex === index ? 'border-purple-400/60' : 'border-slate-700/0 group-hover:border-slate-700/40'}`}></div>

                  <div className="space-y-4 flex-grow">
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${resource.color} bg-clip-text text-transparent mb-2`}>
                      {resource.title}
                    </h3>
                    <p className="text-slate-300/90 text-base leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 text-white group/button font-medium text-sm transition-colors duration-300 group-hover:text-cyan-300 pt-4">
                    <span>Read More</span>
                    <ChevronRightIcon className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Keyframes definition */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        }
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 7s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Resources;