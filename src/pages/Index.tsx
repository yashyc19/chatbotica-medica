import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, MessageCircle, Brain, Search, Users, BookOpen, FileText, Activity, Monitor, AlertCircle, Pill } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import UseCase from "@/components/UseCase";
const Index = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight gradient-heading mb-4">
                  Your Personal AI Health Assistant
                </h1>
                <p className="text-gray-600 md:text-lg max-w-xl mx-auto md:mx-0">
                  Get instant, reliable answers to your health questions through natural conversation. MedBotica combines medical knowledge with AI to provide you with trustworthy guidance.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/chat">
                  <Button size="lg" className="bg-medbot-500 hover:bg-medbot-600 text-white">
                    Try MedBotica Now
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button size="lg" variant="outline" className="border-medbot-300 text-medbot-700">
                    Read Health Articles
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center md:justify-start text-sm text-gray-500 gap-2">
                <Shield size={16} className="text-medbot-500" />
                <span>Your privacy is our priority. All conversations are confidential.</span>
              </div>
            </div>
            <div className="flex-1 md:flex-shrink-0">
              <div className="relative">
                <div className="w-full h-full absolute -top-2 -left-2 bg-medbot-100 rounded-lg"></div>
                <div className="w-full h-full absolute -bottom-2 -right-2 bg-medbot-200 rounded-lg"></div>
                <div className="relative bg-white p-4 md:p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-medbot-500 rounded-full flex items-center justify-center text-white">
                      <Heart size={16} />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold">MedBotica</h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none text-gray-800 text-sm">
                      Hello! I'm MedBotica, your AI health assistant. How can I help you today?
                    </div>
                    <div className="bg-medbot-100 p-3 rounded-lg rounded-tr-none text-medbot-800 text-sm ml-auto max-w-[80%]">
                      I've been having headaches after looking at screens all day. What could help?
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none text-gray-800 text-sm">
                      You may be experiencing digital eye strain. Try the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Also, ensure proper lighting and screen position. Would you like more tips?
                    </div>
                  </div>
                  <div className="text-center">
                    <Link to="/chat">
                      <Button size="sm" className="w-full bg-medbot-500 hover:bg-medbot-600">
                        Continue the conversation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-4">
              Why Choose MedBotica?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform combines medical knowledge with cutting-edge technology to provide you with reliable health information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Brain} title="Medical Knowledge" description="Built on a comprehensive database of medical information, regularly updated with the latest research and guidelines." />
            <FeatureCard icon={MessageCircle} title="Conversational Interface" description="Ask questions naturally as you would to a healthcare professional, and receive clear, understandable answers." />
            <FeatureCard icon={Clock} title="24/7 Availability" description="Get health information whenever you need it, without waiting for appointments or office hours." />
            <FeatureCard icon={Shield} title="Privacy Focused" description="Your conversations are confidential. We prioritize your privacy and data security." />
            <FeatureCard icon={Search} title="Symptom Exploration" description="Discuss your symptoms and receive information about possible causes and when to seek professional care." />
            <FeatureCard icon={BookOpen} title="Health Education" description="Learn about medical conditions, treatments, and preventive measures in an accessible way." />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-4">
                How People Use MedBotica
              </h2>
              <p className="text-gray-600 mb-8">
                Our AI health assistant helps with a variety of health-related questions and concerns. Here are some common ways people use MedBotica:
              </p>
              
              <div className="space-y-6">
                <UseCase icon={AlertCircle} title="Symptom Assessment" description="Discuss symptoms and learn about possible causes, severity, and when to consult a doctor." />
                <UseCase icon={Pill} title="Medication Information" description="Learn about medications, potential side effects, and general usage guidelines." />
                <UseCase icon={Activity} title="Healthy Living Advice" description="Get tips on nutrition, exercise, sleep, and other aspects of maintaining a healthy lifestyle." />
                <UseCase icon={FileText} title="Medical Term Explanation" description="Understand complex medical terminology and procedures in simple, clear language." />
                <UseCase icon={Monitor} title="Condition Management" description="Learn about managing chronic conditions and preventive measures for better health." />
              </div>
            </div>
            
            <div className="md:w-1/2 flex items-center justify-center">
              <div className="relative max-w-sm">
                <div className="absolute -top-4 -right-4 w-full h-full bg-medbot-100 rounded-xl"></div>
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" alt="Doctor using laptop" className="relative z-10 rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thousands of people use MedBotica to get reliable health information and guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard quote="MedBotica helped me understand my symptoms when I couldn't get an immediate doctor's appointment. The information was clear and helped me decide when to seek medical attention." author="Sarah Johnson" role="High School Teacher" rating={5} />
            <TestimonialCard quote="As someone with a chronic condition, I often have questions between doctor visits. MedBotica provides reliable information that helps me manage my health better." author="Michael Chen" role="Software Engineer" rating={4} />
            <TestimonialCard quote="The conversational interface makes it so easy to get health information. It's like texting with a knowledgeable friend who happens to be a medical expert." author="Emily Rodriguez" role="Marketing Manager" rating={5} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medbot-500">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Health Conversation Today
          </h2>
          <p className="text-medbot-50 max-w-2xl mx-auto mb-8">
            Get answers to your health questions, explore symptoms, and learn more about maintaining your well-being.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/chat">
              <Button size="lg" variant="secondary" className="bg-white text-medbot-700 hover:bg-gray-100">
                Chat with MedBotica
              </Button>
            </Link>
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-white bg-slate-200 hover:bg-slate-100 text-blue-800">
                Browse Health Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;