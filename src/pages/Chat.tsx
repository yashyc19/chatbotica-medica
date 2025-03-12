
import { useState, useEffect, useRef } from "react";
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
    content: "Hello! I'm MedBotica, your AI health assistant. How can I help you today? Please note I'm for informational purposes only and not a substitute for professional medical advice."
  }
];

// Sample responses for demo purposes
const sampleResponses: Record<string, string> = {
  default: "I understand your concern. While I can provide general information, it's always best to consult with a healthcare professional for personalized advice tailored to your specific situation.",
  
  headache: "Headaches can have many causes, including stress, dehydration, eye strain, or lack of sleep. For occasional headaches, rest, hydration, and over-the-counter pain relievers may help. If you're experiencing severe, frequent, or unusual headaches, please consult a healthcare provider.",
  
  cold: "Common cold symptoms include runny nose, sore throat, cough, and mild fever. Rest, staying hydrated, and over-the-counter cold medications can help manage symptoms. Most colds resolve within 7-10 days. If symptoms worsen or persist longer, consider consulting a healthcare provider.",

  sleep: "Good sleep habits include maintaining a regular sleep schedule, creating a comfortable sleep environment, limiting screen time before bed, avoiding caffeine and large meals before sleep, and managing stress. Adults typically need 7-9 hours of quality sleep per night.",

  exercise: "Regular physical activity offers numerous health benefits, including improved cardiovascular health, better weight management, enhanced mood, and reduced risk of chronic diseases. Aim for at least 150 minutes of moderate-intensity exercise weekly, along with muscle-strengthening activities twice a week.",

  nutrition: "A balanced diet includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit processed foods, added sugars, and excessive sodium. Portion control and mindful eating are also important components of good nutrition.",
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to simulate AI response
  const generateResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate network delay for a more realistic experience
    setTimeout(() => {
      let responseText = sampleResponses.default;
      
      // Simple keyword matching for demo purposes
      const lowerCaseMessage = userMessage.toLowerCase();
      if (lowerCaseMessage.includes("headache") || lowerCaseMessage.includes("migraine")) {
        responseText = sampleResponses.headache;
      } else if (lowerCaseMessage.includes("cold") || lowerCaseMessage.includes("flu") || lowerCaseMessage.includes("fever")) {
        responseText = sampleResponses.cold;
      } else if (lowerCaseMessage.includes("sleep") || lowerCaseMessage.includes("insomnia")) {
        responseText = sampleResponses.sleep;
      } else if (lowerCaseMessage.includes("exercise") || lowerCaseMessage.includes("workout")) {
        responseText = sampleResponses.exercise;
      } else if (lowerCaseMessage.includes("food") || lowerCaseMessage.includes("diet") || lowerCaseMessage.includes("nutrition")) {
        responseText = sampleResponses.nutrition;
      }

      setMessages(prev => [...prev, { role: "assistant", content: responseText }]);
      setIsTyping(false);
    }, 1500); // Simulated response delay
  };

  // Handle sending a new message
  const handleSendMessage = (message: string) => {
    const newMessage: Message = { role: "user", content: message };
    setMessages(prev => [...prev, newMessage]);
    generateResponse(message);
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
              About MedBotica
            </Button>
          </div>

          {showInfoCard && (
            <Card className="mb-6 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-blue-800 mb-1">Important Information</h3>
                    <p className="text-sm text-blue-700">
                      MedBotica provides general health information for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
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
              <h2 className="text-xl font-semibold text-gray-900">Chat with MedBotica</h2>
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
