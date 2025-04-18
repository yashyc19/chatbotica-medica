
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";

// Sample blog data
const blogPosts = [
  {
    id: "understanding-headaches",
    title: "Understanding Different Types of Headaches and When to Seek Help",
    excerpt: "Learn about the common types of headaches, their symptoms, potential triggers, and when it's time to consult a healthcare professional.",
    category: "Conditions",
    date: "June 12, 2023",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "nutrition-immune-system",
    title: "Nutrition and Your Immune System: Foods That Help Your Body Fight Illness",
    excerpt: "Discover how certain foods and nutrients can support your immune system and help your body defend against infections and illnesses.",
    category: "Nutrition",
    date: "May 28, 2023",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "mental-health-exercise",
    title: "The Connection Between Physical Exercise and Mental Health",
    excerpt: "Explore how regular physical activity affects brain chemistry, mood, and overall mental well-being, with practical tips for getting started.",
    category: "Mental Health",
    date: "May 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "sleep-health",
    title: "Sleep and Health: Why Quality Rest Is Essential for Well-being",
    excerpt: "Learn about the stages of sleep, how sleep affects physical and mental health, and strategies for improving your sleep quality.",
    category: "Wellness",
    date: "April 30, 2023",
    imageUrl: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "stress-management",
    title: "Effective Stress Management Techniques for Everyday Life",
    excerpt: "Discover practical approaches to managing stress, from mindfulness practices to lifestyle adjustments that can help reduce anxiety.",
    category: "Wellness",
    date: "April 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "common-medications",
    title: "Understanding Common Medications: Uses, Side Effects, and Considerations",
    excerpt: "An overview of frequently prescribed medications, how they work, potential side effects, and important information for patients.",
    category: "Medications",
    date: "March 25, 2023",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
  },
];

// Categories for filtering
const categories = [
  "All",
  "Conditions", 
  "Nutrition", 
  "Mental Health", 
  "Wellness", 
  "Medications"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="bg-medbot-50 py-10 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
                Health Articles & Resources
              </h1>
              <p className="text-gray-600 mb-8">
                Explore our collection of articles on various health topics, written in clear, accessible language to help you make informed decisions about your well-being.
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category 
                    ? "bg-medbot-500 hover:bg-medbot-600" 
                    : "text-gray-700 border-gray-200"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Blog posts grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    imageUrl={post.imageUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or category filter</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-medbot-50 py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold gradient-heading mb-4">
              Have a Health Question?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Get personalized information by chatting with Aurora, our AI health assistant.
            </p>
            <Link to="/chat">
              <Button size="lg" className="bg-medbot-500 hover:bg-medbot-600">
                Chat with Aurora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
