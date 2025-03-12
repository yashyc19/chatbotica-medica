
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface UseCaseProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const UseCase = ({ icon: Icon, title, description, className }: UseCaseProps) => {
  return (
    <div className={cn("flex items-start", className)}>
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 rounded-full bg-medbot-100 flex items-center justify-center text-medbot-600">
          <Icon size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold mb-1 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default UseCase;
