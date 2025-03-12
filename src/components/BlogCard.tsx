
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  className?: string;
}

const BlogCard = ({ id, title, excerpt, category, date, imageUrl, className }: BlogCardProps) => {
  return (
    <Link 
      to={`/blog/${id}`} 
      className={cn(
        "group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute top-2 left-2 rounded-full bg-white px-2 py-1 text-xs font-medium text-medbot-700">
          {category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <CalendarIcon size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-medbot-600">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
