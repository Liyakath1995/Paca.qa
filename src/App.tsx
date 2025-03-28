import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, GraduationCap, School, Flag, Moon, FileWarning as Running, MoreHorizontal, Heart, Baby } from 'lucide-react';

const StorkIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-16 h-16"
  >
    {/* Stork body */}
    <path
      d="M18 8c0-3-2-5-6-5S6 5 6 8c0 2 1 3.5 2 4.5l-2 3.5h4l1-2c1 0.5 2 1 3 1s2-0.5 3-1l1 2h4l-2-3.5c1-1 2-2.5 2-4.5z"
      fill="#E5E7EB"
      stroke="#374151"
      strokeWidth="0.5"
    />
    {/* Wing */}
    <path
      d="M16 8c0-2-1-4-4-4"
      fill="none"
      stroke="#374151"
      strokeWidth="0.5"
    />
    {/* Neck and head */}
    <path
      d="M12 3c-1-1-2 0-2 1 0 2 4 2 4 0s-1-2-2-1"
      fill="#E5E7EB"
      stroke="#374151"
      strokeWidth="0.5"
    />
    {/* Legs */}
    <path
      d="M10 16l-1 3M14 16l1 3"
      fill="none"
      stroke="#FD923C"
      strokeWidth="0.5"
    />
    {/* Baby bundle */}
    <path
      d="M11 12c-1 1-1 2 0 3h2c1-1 1-2 0-3h-2z"
      fill="#93C5FD"
      stroke="#374151"
      strokeWidth="0.5"
    />
    {/* Baby face */}
    <circle cx="12" cy="13.5" r="0.5" fill="#374151" />
  </svg>
);

const categories = [
  { id: 1, title: 'BOYS', path: '/boys' },
  { id: 2, title: 'GIRLS', path: '/girls' },
  { id: 3, title: 'BIRTHDAY', icon: <Cake className="w-16 h-16 text-red-500" />, path: '/birthday' },
  { id: 4, title: 'GRADUATION', icon: <GraduationCap className="w-16 h-16 text-yellow-600" />, path: '/graduation' },
  { id: 5, title: 'GENDER REVEAL', icon: <Heart className="w-16 h-16 text-purple-500" />, path: '/gender-reveal' },
  { id: 6, title: 'WELCOME BABY', icon: <StorkIcon />, path: '/welcome-baby' },
  { id: 7, title: 'BABY SHOWER', icon: <Baby className="w-16 h-16 text-pink-400" />, path: '/baby-shower' },
  { id: 8, title: 'RAMDAN & EID', icon: <Moon className="w-16 h-16 text-yellow-500" />, path: '/ramadan-eid' },
  { id: 9, title: 'NATIONAL DAY', icon: <Flag className="w-16 h-16 text-red-600" />, path: '/national-day' },
  { id: 10, title: 'BACK TO SCHOOL', icon: <School className="w-16 h-16 text-blue-600" />, path: '/back-to-school' },
  { id: 11, title: 'SPORTS', icon: <Running className="w-16 h-16 text-orange-500" />, path: '/sports' },
  { id: 12, title: 'OTHERS', icon: <MoreHorizontal className="w-16 h-16 text-gray-600" />, path: '/others' },
];

function App() {
  return (
    <div className="min-h-screen bg-[#e6dcc6] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <img 
            src="img/logo_2.png" 
            alt="PACA - Let's Celebrate!" 
            className="h-32 mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-[#4A332D]">Let's Celebrate!</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center aspect-square">
                {category.icon ? (
                  <div className="mb-4 transform transition-transform duration-300 hover:rotate-6">
                    {category.icon}
                  </div>
                ) : (
                  <div className="mb-4 text-4xl font-bold" style={{
                    color: category.title === 'BOYS' ? '#3B82F6' : '#EC4899'
                  }}>
                    {category.title}
                  </div>
                )}
                {category.icon && (
                  <h3 className="text-center font-bold text-gray-800">
                    {category.title}
                  </h3>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
