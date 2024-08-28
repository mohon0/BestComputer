import React from "react";
import { IconType } from "react-icons";

interface ServicesCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 border p-4 text-center shadow-custom transition-all duration-300 hover:bg-gray-200">
      <div className="text-primary-200">
        <Icon size={60} />
      </div>
      <div className="text-xl font-bold text-primary-100 md:text-2xl">
        {title}
      </div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
};

export default ServicesCard;
