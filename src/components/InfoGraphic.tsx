
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InfoGraphicProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  color?: string;
  className?: string;
}

const InfoGraphic = ({ 
  icon: Icon, 
  title, 
  value, 
  subtitle, 
  color = "from-blue-500 to-indigo-500",
  className 
}: InfoGraphicProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg bg-white",
      className
    )}>
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 bg-gradient-to-br", 
        color
      )} />
      
      <div className="p-6">
        <div className={cn(
          "flex items-center justify-center w-14 h-14 mb-4 rounded-lg text-white bg-gradient-to-br",
          color
        )}>
          <Icon size={28} />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        
        <div className="mt-3">
          <span className={cn(
            "text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
            color
          )}>
            {value}
          </span>
          <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoGraphic;
