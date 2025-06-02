import React from "react";
import GradientButton from "./GradientButton";

const ButtonContainer: React.FC = () => {
  const buttons = [
    {
      text: "🌊 Открыть Океан",
      gradient: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600",
      url: "https://ocean.com",
    },
    {
      text: "🌸 Весенний Сад",
      gradient: "bg-gradient-to-r from-pink-400 via-rose-500 to-orange-500",
      url: "https://garden.com",
    },
    {
      text: "✨ Звёздное Небо",
      gradient: "bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700",
      url: "https://stars.com",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      {buttons.map((button, index) => (
        <GradientButton
          key={index}
          gradient={button.gradient}
          url={button.url}
          className="min-w-[240px]"
        >
          {button.text}
        </GradientButton>
      ))}
    </div>
  );
};

export default ButtonContainer;
