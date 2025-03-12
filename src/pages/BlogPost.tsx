
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample blog post data
const blogPostsData: Record<string, {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  content: string;
}> = {
  "understanding-headaches": {
    title: "Understanding Different Types of Headaches and When to Seek Help",
    date: "June 12, 2023",
    category: "Conditions",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    content: `
      <p>Headaches are one of the most common health complaints, affecting millions of people worldwide. While most headaches are not serious, understanding the different types can help you manage them better and know when to seek medical advice.</p>
      
      <h2>Common Types of Headaches</h2>
      
      <h3>Tension Headaches</h3>
      <p>Tension headaches are the most common type, characterized by a dull, aching pain, tightness, or pressure around the forehead or back of the head and neck. These headaches are often described as feeling like a tight band around the head.</p>
      <p><strong>Potential triggers:</strong> Stress, anxiety, poor posture, eye strain, fatigue, or dehydration.</p>
      <p><strong>Management:</strong> Over-the-counter pain relievers, stress management techniques, maintaining good posture, staying hydrated, and getting regular sleep can help manage tension headaches.</p>
      
      <h3>Migraines</h3>
      <p>Migraines are severe, often debilitating headaches that can last from hours to days. They typically cause throbbing or pulsing pain, usually on one side of the head, and may be accompanied by nausea, vomiting, and sensitivity to light and sound.</p>
      <p><strong>Potential triggers:</strong> Hormonal changes, certain foods and additives, alcohol, stress, sensory stimuli, changes in sleep patterns, and physical exertion.</p>
      <p><strong>Management:</strong> Prescription medications, lifestyle changes, identifying and avoiding triggers, and resting in a quiet, dark room can help manage migraines.</p>
      
      <h3>Cluster Headaches</h3>
      <p>Cluster headaches cause severe pain around one eye or on one side of the head. They occur in cyclical patterns or clusters, with frequent attacks lasting weeks or months, followed by periods of remission.</p>
      <p><strong>Potential triggers:</strong> Alcohol, tobacco, strong smells, bright light, high altitude, and certain foods.</p>
      <p><strong>Management:</strong> Cluster headaches often require prescription medications. Oxygen therapy and injectable treatments may be used for acute attacks.</p>
      
      <h3>Sinus Headaches</h3>
      <p>Sinus headaches cause pain and pressure around the eyes, cheeks, and forehead, often worsening with movement. They are typically associated with other sinus symptoms like nasal congestion, facial pressure, and sometimes fever.</p>
      <p><strong>Potential triggers:</strong> Sinus infections, allergies, and nasal congestion.</p>
      <p><strong>Management:</strong> Treating the underlying sinus issue with decongestants, antihistamines, or antibiotics if infection is present.</p>
      
      <h2>When to Seek Medical Help</h2>
      
      <p>While most headaches are not serious, certain symptoms warrant immediate medical attention:</p>
      
      <ul>
        <li>Sudden, severe headache that feels like "the worst headache of your life"</li>
        <li>Headache accompanied by fever, stiff neck, confusion, seizures, double vision, or weakness</li>
        <li>Headache after a head injury</li>
        <li>Headache that worsens despite rest and pain medication</li>
        <li>New headache pain if you're over 50</li>
        <li>Headaches that wake you from sleep</li>
        <li>Chronic daily headaches</li>
      </ul>
      
      <h2>Prevention Strategies</h2>
      
      <p>Many headaches can be prevented by adopting healthy lifestyle habits:</p>
      
      <ul>
        <li>Maintain a regular sleep schedule</li>
        <li>Stay hydrated</li>
        <li>Exercise regularly</li>
        <li>Manage stress through relaxation techniques or meditation</li>
        <li>Limit alcohol and caffeine consumption</li>
        <li>Eat regular, balanced meals</li>
        <li>Practice good posture, especially if you work at a desk</li>
        <li>Take regular breaks from screens and adjust lighting to reduce eye strain</li>
      </ul>
      
      <p>By understanding your headaches and their triggers, you can work with your healthcare provider to develop an effective management plan. Remember that persistent or severe headaches should always be evaluated by a medical professional to rule out more serious conditions.</p>
    `
  },
  "nutrition-immune-system": {
    title: "Nutrition and Your Immune System: Foods That Help Your Body Fight Illness",
    date: "May 28, 2023",
    category: "Nutrition",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    content: `
      <p>Your immune system is your body's natural defense against illness and infection. While no single food or nutrient can prevent disease, a balanced diet rich in certain nutrients can help support immune function. This article explores how nutrition impacts your immune system and highlights foods that can help strengthen your body's defenses.</p>

      <h2>Key Nutrients for Immune Health</h2>

      <h3>Vitamin C</h3>
      <p>Vitamin C is a powerful antioxidant that supports various cellular functions of the immune system. It helps stimulate the production of white blood cells, which are key to fighting infections.</p>
      <p><strong>Food sources:</strong> Citrus fruits (oranges, grapefruits), strawberries, bell peppers, broccoli, kiwi, and tomatoes.</p>

      <h3>Vitamin D</h3>
      <p>Vitamin D plays a crucial role in immune regulation. Low levels of vitamin D have been associated with increased susceptibility to infection.</p>
      <p><strong>Food sources:</strong> Fatty fish (salmon, mackerel), fortified foods (milk, orange juice, cereals), egg yolks, and cheese. Sunlight exposure also helps your body produce vitamin D.</p>

      <h3>Zinc</h3>
      <p>Zinc is essential for immune cell development and communication. Even a mild deficiency can impair immune function.</p>
      <p><strong>Food sources:</strong> Oysters, crab, lean meats, poultry, beans, nuts, and whole grains.</p>

      <h3>Selenium</h3>
      <p>Selenium plays an important role in the health of your immune system. This antioxidant helps lower oxidative stress in your body, which reduces inflammation and enhances immunity.</p>
      <p><strong>Food sources:</strong> Brazil nuts, seafood, meats, and poultry.</p>

      <h3>Protein</h3>
      <p>Protein is crucial for immune health. Amino acids found in protein are essential for building and repairing body tissue and fighting viral and bacterial infections.</p>
      <p><strong>Food sources:</strong> Lean meat, poultry, seafood, eggs, beans, peas, lentils, tofu, and nuts.</p>

      <h2>Immune-Boosting Foods</h2>

      <h3>Garlic</h3>
      <p>Garlic contains compounds that help the immune system fight germs. It has been shown to enhance immune cell function and may reduce the severity of cold and flu symptoms.</p>

      <h3>Ginger</h3>
      <p>Ginger has anti-inflammatory and antioxidant properties. It may help decrease inflammation, which can help reduce sore throat and inflammatory illnesses.</p>

      <h3>Turmeric</h3>
      <p>Curcumin, the active compound in turmeric, has powerful anti-inflammatory effects and is a strong antioxidant, which may help boost immune function.</p>

      <h3>Berries</h3>
      <p>Berries are rich in anthocyanins, a type of flavonoid with antioxidant properties that may help boost immune function.</p>

      <h3>Yogurt</h3>
      <p>Yogurt that contains live cultures (probiotics) can stimulate your immune system. Look for plain yogurts with "live and active cultures" on the label.</p>

      <h3>Green Tea</h3>
      <p>Green tea contains flavonoids and epigallocatechin gallate (EGCG), another powerful antioxidant. Green tea also contains L-theanine, an amino acid that may aid in the production of germ-fighting compounds in your T-cells.</p>

      <h2>Hydration and Immune Function</h2>

      <p>Staying well-hydrated is essential for overall health, including immune function. Water helps your body produce lymph, which carries white blood cells and other immune system cells. Aim for 8-10 glasses of water daily, and more when you're ill or exercising.</p>

      <h2>Foods to Limit</h2>

      <p>Certain foods may weaken your immune response:</p>

      <ul>
        <li>Added sugars (found in candy, soda, and many processed foods)</li>
        <li>Processed foods high in refined carbohydrates</li>
        <li>Excessive alcohol consumption</li>
        <li>Foods high in saturated and trans fats</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>While no single food or nutrient can prevent illness, a varied diet rich in nutrients that support immune function can help your body fight off infections more effectively. Focus on incorporating plenty of fruits, vegetables, lean proteins, healthy fats, and whole grains into your diet, and limit processed foods and added sugars.</p>

      <p>Remember that nutrition is just one component of immune health. Regular physical activity, adequate sleep, stress management, and good hygiene practices are equally important for maintaining a strong immune system.</p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id] : null;

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-16 container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-6 text-gray-600">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <Button className="bg-medbot-500 hover:bg-medbot-600">
              Back to Articles
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-medbot-600 mb-6 hover:text-medbot-700">
            <ArrowLeft size={16} className="mr-2" />
            Back to Articles
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-1" />
              <span>{post.category}</span>
            </div>
          </div>

          <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Articles Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center gradient-heading">
              Talk to MedBotica About This Topic
            </h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Have questions about this article or related health topics? Chat with our AI health assistant for more information.
              </p>
              <Link to="/chat">
                <Button size="lg" className="bg-medbot-500 hover:bg-medbot-600">
                  Chat with MedBotica
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
