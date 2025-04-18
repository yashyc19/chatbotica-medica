
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
  },
  "common-medications": {
    title: "Understanding Common Medications: Uses, Side Effects, and Considerations",
    date: "March 25, 2023",
    category: "Medications",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    content: `
      <p>Medications play an essential role in managing health conditions and improving quality of life. However, understanding how they work, their potential side effects, and important considerations is crucial for safe and effective use.</p>
      
      <h2>Commonly Prescribed Medications</h2>
      
      <h3>Analgesics (Pain Relievers)</h3>
      <p>Analgesics are medications used to relieve pain. They include over-the-counter options like acetaminophen and nonsteroidal anti-inflammatory drugs (NSAIDs), as well as prescription opioids for severe pain [[8]].</p>
      <p><strong>Potential Side Effects:</strong> Nausea, constipation, dizziness, and in some cases, dependency or addiction with prolonged opioid use [[1]].</p>
      
      <h3>Antidepressants</h3>
      <p>Antidepressants are commonly prescribed for depression, anxiety, and other mental health conditions. Selective serotonin reuptake inhibitors (SSRIs) and serotonin-norepinephrine reuptake inhibitors (SNRIs) are among the most widely used classes [[9]].</p>
      <p><strong>Potential Side Effects:</strong> Drowsiness, dry mouth, insomnia, and in rare cases, suicidal thoughts [[3]].</p>
      
      <h3>Beta-Blockers</h3>
      <p>Beta-blockers are often prescribed for high blood pressure, heart conditions, and anxiety. They work by slowing the heart rate and reducing the workload on the heart [[9]].</p>
      <p><strong>Potential Side Effects:</strong> Fatigue, dizziness, cold hands and feet, and in some cases, depression [[4]].</p>
      
      <h3>Mood Stabilizers</h3>
      <p>Mood stabilizers, such as lithium, are frequently used to treat bipolar disorder. Lithium helps regulate mood swings and prevent manic episodes [[10]].</p>
      <p><strong>Potential Side Effects:</strong> Increased thirst, weight gain, tremors, and thyroid or kidney issues with long-term use [[3]].</p>
      
      <h3>Antihistamines</h3>
      <p>Antihistamines are used to relieve allergy symptoms like sneezing, itching, and runny nose. Some antihistamines also have sedative effects, making them useful for sleep issues.</p>
      <p><strong>Potential Side Effects:</strong> Drowsiness, dry mouth, and dizziness [[1]].</p>
      
      <h2>Important Considerations</h2>
      
      <p>While medications can be highly effective, it’s important to consider the following:</p>
      
      <ul>
        <li><strong>Allergic Reactions:</strong> Any medication can cause an allergic reaction, ranging from mild rashes to life-threatening anaphylaxis [[2]].</li>
        <li><strong>Drug Interactions:</strong> Always inform your healthcare provider about all medications and supplements you’re taking to avoid harmful interactions [[6]].</li>
        <li><strong>Side Effects:</strong> Be aware of common side effects and report any unusual symptoms to your doctor immediately [[7]].</li>
        <li><strong>Adherence:</strong> Follow the prescribed dosage and schedule to ensure the medication works effectively and minimize risks [[4]].</li>
      </ul>
      
      <p>By understanding your medications and working closely with your healthcare provider, you can maximize their benefits while minimizing potential risks.</p>
    `
  },
  "stress-management": {
    title: "Effective Stress Management Techniques for Everyday Life",
    date: "April 10, 2023",
    category: "Wellness",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    content: `
      <p>Stress is an inevitable part of life, but how we manage it can make all the difference. Chronic stress can negatively impact your physical health, mental well-being, and overall quality of life. Fortunately, there are practical techniques you can incorporate into your daily routine to reduce anxiety and find balance.</p>
      
      <h2>Practical Stress Management Techniques</h2>
      
      <h3>1. Practice Deep Breathing</h3>
      <p>Deep breathing exercises can help calm your nervous system and reduce stress levels. Try inhaling deeply through your nose, holding your breath for a few seconds, and exhaling slowly through your mouth [[4]].</p>
      
      <h3>2. Engage in Mindfulness Practices</h3>
      <p>Mindfulness involves focusing on the present moment without judgment. Meditation, mindful walking, or simply paying attention to your surroundings can help decrease stress by increasing self-awareness and reducing overthinking [[3]].</p>
      
      <h3>3. Prioritize Tasks</h3>
      <p>Feeling overwhelmed often stems from having too much on your plate. Prioritizing tasks helps you focus on what needs to be done first, reducing the feeling of being swamped [[6]].</p>
      
      <h3>4. Incorporate Regular Exercise</h3>
      <p>Physical activity is one of the most effective ways to manage stress. Exercise releases endorphins, which are natural mood boosters, and helps reduce tension in the body [[1]].</p>
      
      <h3>5. Take Regular Breaks</h3>
      <p>Whether at work or home, taking short breaks throughout the day can prevent burnout. Step away from your desk, stretch, or go for a quick walk to recharge your mind [[9]].</p>
      
      <h3>6. Maintain a Healthy Lifestyle</h3>
      <p>A balanced diet, adequate sleep, and staying hydrated are foundational for managing stress. Avoid excessive caffeine and alcohol, as they can exacerbate feelings of anxiety [[10]].</p>
      
      <h2>Additional Strategies</h2>
      
      <p>Beyond these techniques, consider implementing the following strategies:</p>
      
      <ul>
        <li><strong>Set Boundaries:</strong> Learn to say no when necessary and establish limits to protect your time and energy [[7]].</li>
        <li><strong>Practice Relaxation Techniques:</strong> Activities like progressive muscle relaxation or guided imagery can help calm your mind and body [[4]].</li>
        <li><strong>Write It Down:</strong> Journaling or creating a stress list can help you identify triggers and process emotions [[10]].</li>
      </ul>
      
      <p>By incorporating these stress management techniques into your daily life, you can build resilience and improve your ability to handle challenges effectively [[5]]. Remember, small changes can lead to significant improvements over time.</p>
    `
  },
  "sleep-health": {
    title: "Sleep and Health: Why Quality Rest Is Essential for Well-being",
    date: "April 30, 2023",
    category: "Wellness",
    imageUrl: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    content: `
      <p>Sleep is a fundamental aspect of health that is often overlooked in our busy lives. Quality sleep is essential for physical health, mental well-being, and overall quality of life. This article explores the importance of sleep, its stages, and tips for improving sleep quality.</p>
      
      <h2>The Importance of Sleep</h2>
      
      <p>Sleep plays a vital role in various bodily functions, including:</p>
      
      <ul>
        <li><strong>Physical Health:</strong> Sleep is crucial for repairing tissues, building muscle, and regulating hormones [[1]].</li>
        <li><strong>Mental Health:</strong> Lack of sleep can lead to mood swings, anxiety, and cognitive impairments [[2]].</li>
        <li><strong>Immune Function:</strong> Quality sleep supports the immune system, helping your body fight off infections [[3]].</li>
      </ul>
      
      <h2>Stages of Sleep</h2>
      
      <p>Sleep consists of several stages that cycle throughout the night:</p>
      
      <ul>
        <li><strong>Stage 1:</strong> Light sleep where you drift in and out of sleep.</li>
        <li><strong>Stage 2:</strong> Deeper sleep where your heart rate slows down and body temperature drops.</li>
        <li><strong>Stage 3:</strong> Deep sleep crucial for physical recovery and growth.</li>
        <li><strong>REM Sleep:</strong> Rapid Eye Movement sleep associated with dreaming and memory consolidation [[4]].</li>
      </ul>
      
      <h2>Tips for Improving Sleep Quality</h2>
      
      <p>If you're struggling with sleep, consider these tips to improve your rest:</p>
      
      <ul>
        <li><strong>Create a Sleep Schedule:</strong> Go to bed and wake up at the same time
 every day, even on weekends [[5]].</li>
        <li><strong>Limit Screen Time:</strong> Reduce exposure to screens at least an hour before bed to minimize blue light interference [[6]].</li>
        <li><strong>Create a Relaxing Bedtime Routine:</strong> Engage in calming activities like reading or meditation before sleep [[7]].</li>
        <li><strong>Optimize Your Sleep Environment:</strong> Keep your bedroom dark, quiet, and cool. Consider using blackout curtains and white noise machines [[8]].</li>
        <li><strong>Avoid Stimulants:</strong> Limit caffeine and nicotine intake, especially in the hours leading up to bedtime [[9]].</li>
      </ul>
      
      <h2>The Bottom Line</h2>
      
      <p>Quality sleep is essential for overall health and well-being. By prioritizing sleep and implementing strategies to improve its quality, you can enhance your physical health, mental clarity, and emotional resilience.</p>
    `
  },
  "mental-health-exercise": {
    title: "The Connection Between Physical Exercise and Mental Health",
    date: "May 15, 2023",
    category: "Mental Health",
    imageUrl: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    content: `
      <p>Physical exercise is not just about building muscles or improving cardiovascular health—it also has profound effects on mental well-being. Regular physical activity can positively influence brain chemistry, mood, and overall mental health [[1]].</p>
      
      <h2>How Exercise Affects Brain Chemistry</h2>
      
      <p>Exercise stimulates the release of endorphins, often referred to as "feel-good" hormones, which help reduce stress and improve mood [[8]]. Additionally, physical activity decreases levels of cortisol, a hormone associated with stress, while increasing serotonin and dopamine levels, which are linked to happiness and motivation [[6]].</p>
      
      <h2>Benefits for Mental Well-being</h2>
      
      <ul>
        <li><strong>Reduced Anxiety and Depression:</strong> Exercise is a natural anti-anxiety treatment that relieves tension and boosts mental energy [[6]]. Studies show that regular physical activity can significantly reduce symptoms of anxiety and depression [[2]].</li>
        <li><strong>Improved Focus and Motivation:</strong> Physical activity enhances cognitive function, increases focus, and improves motivation, making it easier to tackle daily tasks [[9]].</li>
        <li><strong>Better Sleep:</strong> Engaging in regular exercise helps regulate sleep patterns by causing physical fatigue and mental relaxation, leading to more restorative rest [[4]].</li>
        <li><strong>Increased Self-Esteem:</strong> Achieving fitness goals, no matter how small, boosts self-esteem and confidence, contributing to better mental health [[9]].</li>
      </ul>
      
      <h2>Practical Tips for Getting Started</h2>
      
      <p>If you're new to exercise or unsure where to begin, here are some practical tips:</p>
      
      <ul>
        <li><strong>Start Small:</strong> Begin with short, manageable workouts like a 10-minute walk or stretching session. Gradually increase the duration and intensity as you build stamina.</li>
        <li><strong>Choose Activities You Enjoy:</strong> Whether it's dancing, swimming, cycling, or yoga, pick activities that bring you joy to stay motivated [[10]].</li>
        <li><strong>Set Realistic Goals:</strong> Define achievable goals, such as exercising three times a week or completing a 5K run, to maintain consistency and track progress.</li>
        <li><strong>Incorporate Movement into Daily Life:</strong> Take the stairs instead of the elevator, walk during phone calls, or do desk stretches to stay active throughout the day [[7]].</li>
      </ul>
      
      <p>By integrating regular physical activity into your routine, you can harness its powerful benefits for both your body and mind. Remember, even small steps toward an active lifestyle can lead to significant improvements in mental well-being [[5]].</p>
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
              Talk to Aurora About This Topic
            </h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Have questions about this article or related health topics? Chat with our AI health assistant for more information.
              </p>
              <Link to="/chat">
                <Button size="lg" className="bg-medbot-500 hover:bg-medbot-600">
                  Chat with Aurora
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
