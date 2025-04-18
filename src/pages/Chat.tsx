import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique session IDs
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Type for our chat messages
interface Message {
  role: "user" | "assistant";
  content: string;
}

// Initial welcome message from the assistant
const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hello! I'm Aurora, your AI health assistant. How can I help you today? Please note I'm for informational purposes only and not a substitute for professional medical advice."
  }
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef<string>(uuidv4()); // Generate a unique session ID

  // Function to fetch AI response from the API
  const fetchResponse = async (userMessage: string) => {
    setIsTyping(true);
    try {
      // Send the user message to the server
      const response = await fetch("https://mental-health-bot-e36v.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // mode: "no-cors",
        body: JSON.stringify({
          session_id: sessionId.current,
          message: userMessage,
        }),
      });
      console.log("Response from server:", response); // Log the response for debugging
      if (response.ok) {
        const data = await response.json();
        const responseText = data.response || "I'm sorry, I couldn't process your request."; // Change "reply" to "response"
        setMessages((prev) => [...prev, { role: "assistant", content: responseText }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "There was an error processing your request. Please try again later." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Unable to connect to the server. Please check your internet connection." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle sending a new message
  const handleSendMessage = (message: string) => {
    const newMessage: Message = { role: "user", content: message };
    setMessages((prev) => [...prev, newMessage]);
    fetchResponse(message);
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-gray-600"
              onClick={() => setShowInfoCard(!showInfoCard)}
            >
              <Info size={16} className="mr-2" />
              About Aurora
            </Button>
          </div>

          {showInfoCard && (
            <Card className="mb-6 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-blue-800 mb-1">Important Information</h3>
                    <p className="text-sm text-blue-700">
                    Aurora provides general health information for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-700" 
                    onClick={() => setShowInfoCard(false)}
                  >
                    <X size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Chat with Aurora</h2>
              <p className="text-sm text-gray-600">Ask questions about symptoms, conditions, or general health advice</p>
            </div>
            
            <div className="h-[calc(100vh-350px)] min-h-[400px] overflow-y-auto p-4">
              {messages.map((message, index) => (
                <ChatMessage 
                  key={index}
                  role={message.role}
                  content={message.content}
                />
              ))}
              
              {isTyping && (
                <ChatMessage 
                  role="assistant"
                  content=""
                  isLoading={true}
                />
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <ChatInput onSendMessage={handleSendMessage} isLoading={isTyping} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
