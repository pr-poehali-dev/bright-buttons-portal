import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent font-montserrat">
        Добро пожаловать!
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-open-sans">
        Откройте для себя удивительный мир возможностей с нашими яркими
        интерактивными кнопками
      </p>
    </div>
  );
};

export default HeroSection;
