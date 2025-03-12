
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-medbot-200",
      className
    )}>
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-medbot-50 text-medbot-600">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
