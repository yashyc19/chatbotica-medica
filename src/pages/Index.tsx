
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Brain, MessageCircle, Users, Pill, Activity, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InfoGraphic from "@/components/InfoGraphic";
import { Card, CardContent } from "@/components/ui/card";

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
                  Get instant, reliable answers to your health questions.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/chat">
                  <Button size="lg" className="bg-medbot-500 hover:bg-medbot-600 text-white">
                    Try MedBotica Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 md:flex-shrink-0">
              <div className="relative">
                <div className="w-full h-full absolute -top-2 -left-2 bg-medbot-100 rounded-lg"></div>
                <div className="w-full h-full absolute -bottom-2 -right-2 bg-medbot-200 rounded-lg"></div>
                <Card className="relative overflow-hidden shadow-lg border border-gray-200">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80" 
                      alt="MedBotica in action" 
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-medbot-500 rounded-full flex items-center justify-center text-white">
                          <Heart size={16} />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-semibold">MedBotica</h3>
                          <div className="flex items-center text-xs text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                            <span>Always Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-4">
              How MedBotica Helps You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <InfoGraphic 
              icon={Brain} 
              title="Medical Knowledge" 
              value="5M+"
              subtitle="Medical Records Analyzed"
              color="from-purple-500 to-indigo-500"
            />
            <InfoGraphic 
              icon={MessageCircle} 
              title="24/7 Assistance" 
              value="Instant"
              subtitle="Response Time"
              color="from-green-500 to-emerald-500"
            />
            <InfoGraphic 
              icon={Shield} 
              title="Privacy Focused" 
              value="100%"
              subtitle="Confidential Conversations"
              color="from-blue-500 to-cyan-500"
            />
            <InfoGraphic 
              icon={Users} 
              title="User Trust" 
              value="250K+"
              subtitle="Satisfied Users"
              color="from-orange-500 to-amber-500"
            />
            <InfoGraphic 
              icon={Pill} 
              title="Medication Info" 
              value="10K+"
              subtitle="Medications in Database"
              color="from-red-500 to-pink-500"
            />
            <InfoGraphic 
              icon={Activity} 
              title="Health Monitoring" 
              value="24/7"
              subtitle="Health Guidance"
              color="from-teal-500 to-green-500"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Visual Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-4">
              Common Health Concerns
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-medbot-50 to-white border-none shadow-lg overflow-hidden h-64 flex">
              <CardContent className="p-6 flex items-center space-x-6 w-full">
                <div className="w-16 h-16 rounded-full bg-medbot-100 flex items-center justify-center text-medbot-600 flex-shrink-0">
                  <Activity size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-medbot-700">Symptom Assessment</h3>
                  <div className="flex space-x-2">
                    {["Headache", "Fever", "Cough", "Fatigue"].map((symptom) => (
                      <span key={symptom} className="text-xs bg-medbot-100 text-medbot-700 px-2 py-1 rounded-full">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-medbot-50 to-white border-none shadow-lg overflow-hidden h-64 flex">
              <CardContent className="p-6 flex items-center space-x-6 w-full">
                <div className="w-16 h-16 rounded-full bg-medbot-100 flex items-center justify-center text-medbot-600 flex-shrink-0">
                  <Pill size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-medbot-700">Medication Information</h3>
                  <div className="flex space-x-2 flex-wrap">
                    {["Side Effects", "Dosage", "Interactions", "Usage"].map((info) => (
                      <span key={info} className="text-xs bg-medbot-100 text-medbot-700 px-2 py-1 rounded-full mb-2">
                        {info}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-medbot-50 to-white border-none shadow-lg overflow-hidden h-64 flex">
              <CardContent className="p-6 flex items-center space-x-6 w-full">
                <div className="w-16 h-16 rounded-full bg-medbot-100 flex items-center justify-center text-medbot-600 flex-shrink-0">
                  <FileText size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-medbot-700">Medical Terminology</h3>
                  <div className="flex space-x-2 flex-wrap">
                    {["Diagnoses", "Procedures", "Conditions", "Treatments"].map((term) => (
                      <span key={term} className="text-xs bg-medbot-100 text-medbot-700 px-2 py-1 rounded-full mb-2">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-medbot-50 to-white border-none shadow-lg overflow-hidden h-64 flex">
              <CardContent className="p-6 flex items-center space-x-6 w-full">
                <div className="w-16 h-16 rounded-full bg-medbot-100 flex items-center justify-center text-medbot-600 flex-shrink-0">
                  <Heart size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-medbot-700">Healthy Living</h3>
                  <div className="flex space-x-2 flex-wrap">
                    {["Nutrition", "Exercise", "Sleep", "Stress"].map((topic) => (
                      <span key={topic} className="text-xs bg-medbot-100 text-medbot-700 px-2 py-1 rounded-full mb-2">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medbot-500">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Health Journey Today
          </h2>
          <div className="flex justify-center">
            <Link to="/chat">
              <Button size="lg" variant="secondary" className="bg-white text-medbot-700 hover:bg-gray-100">
                Chat with MedBotica
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
