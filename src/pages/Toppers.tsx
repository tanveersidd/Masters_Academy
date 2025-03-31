
import { Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Toppers = () => {
  // Sample data - in a real application, this would come from a database
  const toppersData = {
    "2023": [
      { name: "Aisha Khan", exam: "NEET", score: "650/720", image: "placeholder.svg", testimonial: "Masters Academy's structured approach and dedicated faculty helped me achieve my dream score in NEET." },
      { name: "Rahul Sharma", exam: "JEE Mains", score: "285/360", image: "placeholder.svg", testimonial: "The competitive environment and expert guidance at Masters Academy were instrumental in my JEE success." },
      { name: "Priya Patel", exam: "MHT-CET", score: "178/200", image: "placeholder.svg", testimonial: "The faculty's personal attention to each student makes Masters Academy stand out from other coaching institutes." },
      { name: "Mohammed Siddiqui", exam: "Class 12 (Science)", score: "92%", image: "placeholder.svg", testimonial: "The focused approach to each subject helped me understand complex concepts with ease." },
    ],
    "2022": [
      { name: "Zara Ahmed", exam: "NEET", score: "635/720", image: "placeholder.svg", testimonial: "The rigorous test series and personalized feedback helped me improve consistently." },
      { name: "Vikram Singh", exam: "JEE Mains", score: "275/360", image: "placeholder.svg", testimonial: "Masters Academy's problem-solving approach transformed my perspective on learning." },
      { name: "Sneha Desai", exam: "Class 12 (Commerce)", score: "95%", image: "placeholder.svg", testimonial: "The faculty's dedication and knowledge made complex accounting and economics topics easy to understand." },
    ],
    "2021": [
      { name: "Adil Shaikh", exam: "MHT-CET", score: "172/200", image: "placeholder.svg", testimonial: "The faculty's expertise and comprehensive study materials were key to my success." },
      { name: "Riya Joshi", exam: "Class 10", score: "96%", image: "placeholder.svg", testimonial: "Masters Academy built my confidence and helped me develop strong study habits that will benefit me throughout my academic journey." },
      { name: "Farhan Khan", exam: "B. Pharmacy", score: "First Class Distinction", image: "placeholder.svg", testimonial: "The practical approach to pharmacy subjects helped me excel in both theory and lab work." },
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-academy-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Toppers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the brilliant minds who achieved excellence through dedication, hard work, and the guidance of Masters Academy.
          </p>
        </div>
      </section>

      {/* Toppers Gallery */}
      <section className="py-16">
        <div className="section-container">
          <Tabs defaultValue="2023" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="2023" className="text-lg py-3">2023</TabsTrigger>
              <TabsTrigger value="2022" className="text-lg py-3">2022</TabsTrigger>
              <TabsTrigger value="2021" className="text-lg py-3">2021</TabsTrigger>
            </TabsList>
            
            {Object.entries(toppersData).map(([year, toppers]) => (
              <TabsContent key={year} value={year} className="animate-fade-in">
                <h2 className="section-heading text-center mb-8">Academic Year {year} Achievers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {toppers.map((topper, index) => (
                    <div key={index} className="content-card flex flex-col items-center text-center group">
                      <div className="relative mb-4">
                        <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-2">
                          <img 
                            src={`/${topper.image}`} 
                            alt={topper.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 h-10 w-10 bg-academy-yellow rounded-full flex items-center justify-center shadow-md">
                          <Award className="h-6 w-6 text-academy-blue" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1 group-hover:text-academy-blue transition-colors">{topper.name}</h3>
                      <p className="text-gray-600 mb-2">{topper.exam}</p>
                      <p className="font-semibold text-academy-blue mb-3">{topper.score}</p>
                      <p className="text-sm italic">{topper.testimonial}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="content-card">
              <blockquote className="text-lg italic mb-4">
                "Masters Academy transformed my approach to learning. The faculty's dedication and innovative teaching methods helped me understand complex concepts and apply them effectively. I'm grateful for the personalized attention that helped me secure a top rank in the NEET examination."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-bold">Fatima Shaikh</p>
                  <p className="text-sm text-gray-600">NEET 2020 - All India Rank 1256</p>
                </div>
              </div>
            </div>
            
            <div className="content-card">
              <blockquote className="text-lg italic mb-4">
                "Joining Masters Academy was one of the best decisions I made. The structured curriculum, regular assessments, and doubt-clearing sessions helped me build confidence and overcome my weaknesses. The teachers' guidance was instrumental in my success in the board examinations."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-bold">Arjun Mehta</p>
                  <p className="text-sm text-gray-600">Class 12 Science - 96% (State Rank 45)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-academy-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Be Our Next Success Story?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join Masters Academy today and embark on your journey to academic excellence and a bright future.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-academy-yellow text-academy-blue font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Toppers;
