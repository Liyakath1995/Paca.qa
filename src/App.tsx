import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Cake, GraduationCap, School, Flag, Moon, FileWarning as Running, MoreHorizontal, Scale as Male, Scale as Female, Heart, Store as Stork } from 'lucide-react';

const categories = [
  { id: 1, title: 'BOYS', icon: <Male className="w-12 h-12 text-blue-500" />, path: '/boys' },
  { id: 2, title: 'GIRLS', icon: <Female className="w-12 h-12 text-pink-500" />, path: '/girls' },
  { id: 3, title: 'BIRTHDAY', icon: <Cake className="w-12 h-12 text-red-500" />, path: '/birthday' },
  { id: 4, title: 'GRADUATION', icon: <GraduationCap className="w-12 h-12 text-yellow-600" />, path: '/graduation' },
  { id: 5, title: 'GENDER REVEAL', icon: <Heart className="w-12 h-12 text-purple-500" />, path: '/gender-reveal' },
  { id: 6, title: 'WELCOME BABY', icon: <Stork className="w-12 h-12 text-blue-400" />, path: '/welcome-baby' },
  { id: 7, title: 'BABY SHOWER', icon: <Baby className="w-12 h-12 text-pink-400" />, path: '/baby-shower' },
  { id: 8, title: 'RAMDAN & EID', icon: <Moon className="w-12 h-12 text-yellow-500" />, path: '/ramadan-eid' },
  { id: 9, title: 'NATIONAL DAY', icon: <Flag className="w-12 h-12 text-red-600" />, path: '/national-day' },
  { id: 10, title: 'BACK TO SCHOOL', icon: <School className="w-12 h-12 text-blue-600" />, path: '/back-to-school' },
  { id: 11, title: 'SPORTS', icon: <Running className="w-12 h-12 text-orange-500" />, path: '/sports' },
  { id: 12, title: 'OTHERS', icon: <MoreHorizontal className="w-12 h-12 text-gray-600" />, path: '/others' },
];

function App() {
  return (
    <div className="min-h-screen bg-[#e6dcc6] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center aspect-square">
                <div className="mb-4 transform transition-transform duration-300 hover:rotate-6">
                  {category.icon}
                </div>
                <h3 className="text-center font-bold text-gray-800">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;