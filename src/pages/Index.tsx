import React from "react";
import HeroSection from "@/components/HeroSection";
import ButtonContainer from "@/components/ButtonContainer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <HeroSection />
          <ButtonContainer />
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse" />
      <div className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-25 animate-pulse" />
      <div className="fixed top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-pulse" />
    </div>
  );
};

export default Index;
