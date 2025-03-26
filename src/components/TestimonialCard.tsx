
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, rating, image, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm border border-gray-200",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{quote}"</p>
      <div className="flex items-center">
        <Avatar className="h-10 w-10 mr-3 border border-gray-200">
          <AvatarImage src={image} alt={author} />
          <AvatarFallback className="bg-medbot-100 text-medbot-600">
            {author.split(' ').map(name => name[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
