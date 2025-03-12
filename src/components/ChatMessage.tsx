
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

type MessageRole = "user" | "assistant";

interface ChatMessageProps {
  role: MessageRole;
  content: string;
  isLoading?: boolean;
  className?: string;
}

const ChatMessage = ({ role, content, isLoading, className }: ChatMessageProps) => {
  const isUser = role === "user";
  
  return (
    <div
      className={cn(
        "flex items-start gap-3 py-4",
        isUser ? "justify-end" : "justify-start",
        className
      )}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-medbot-500 text-white">
          <Bot size={16} />
        </div>
      )}

      <div
        className={cn(
          "rounded-lg px-4 py-3 max-w-[85%] md:max-w-[70%]",
          isUser
            ? "bg-medbot-500 text-white"
            : "bg-gray-100 text-gray-800 border border-gray-200"
        )}
      >
        {isLoading ? (
          <div className="flex space-x-2 h-5 items-center">
            <div className="w-2 h-2 rounded-full bg-current animate-bounce"></div>
            <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{content}</div>
        )}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-gray-100">
          <User size={16} />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
