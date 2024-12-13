import React from "react";
import clsx from "clsx";

type ButtonProps = {
  id: string;
  title: string;
  rightIcon?: React.ReactNode; // Optionnel pour permettre de ne pas toujours inclure une icône à droite
  leftIcon?: React.ReactNode;  // Optionnel pour permettre de ne pas inclure une icône à gauche
  containerClass?: string; 
  onClick?: () => void;    // Optionnel pour une meilleure flexibilité dans les styles
};

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass = "",
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {/* Icône à gauche */}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}

      {/* Texte avec effet de transition */}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {/* Icône à droite */}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
