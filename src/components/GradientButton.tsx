import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  gradient: string;
  url: string;
  className?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  gradient,
  url,
  className = "",
}) => {
  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative overflow-hidden px-8 py-4 rounded-2xl text-white font-semibold text-lg
        transition-all duration-300 ease-out
        transform hover:scale-105 hover:shadow-2xl
        active:scale-95
        ${gradient}
        ${className}
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default GradientButton;
