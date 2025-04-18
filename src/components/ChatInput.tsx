
import { useState, FormEvent, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, StethoscopeIcon } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !isLoading) {
        onSendMessage(message.trim());
        setMessage("");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t bg-white p-4">
      <div className="relative flex items-center">
        <StethoscopeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Aurora about your health concerns..."
          disabled={isLoading}
          className="min-h-12 max-h-36 pl-10 pr-16 resize-none rounded-full border-gray-200 focus-visible:ring-1 focus-visible:ring-medbot-500"
        />
        <Button
          type="submit"
          size="icon"
          disabled={isLoading || !message.trim()}
          className="absolute right-2 h-8 w-8 rounded-full bg-medbot-500 hover:bg-medbot-600"
        >
          <Send size={16} className="text-white" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;
