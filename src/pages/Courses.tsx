
import { Book, BookOpen, Award, Beaker, Calculator, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-academy-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed to help students excel in their academic journey.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16">
        <div className="section-container">
          <Tabs defaultValue="school" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="school" id="school" className="text-lg py-3">School Tuitions</TabsTrigger>
              <TabsTrigger value="competitive" id="competitive" className="text-lg py-3">Competitive Exams</TabsTrigger>
              <TabsTrigger value="pharmacy" id="pharmacy" className="text-lg py-3">Pharmacy Courses</TabsTrigger>
            </TabsList>
            
            {/* School Tuitions */}
            <TabsContent value="school" className="animate-fade-in">
              <h2 className="section-heading">School Tuitions</h2>
              
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Book className="h-6 w-6 text-academy-blue mr-2" />
                  <h3 className="text-xl font-bold">Class 8 to 10 (English & Urdu Medium)</h3>
                </div>
                <div className="content-card mb-8">
                  <p className="mb-4">
                    Our comprehensive tuition programs for Class 8 to 10 students are designed to build strong 
                    foundations in core subjects. We offer classes in both English and Urdu mediums to cater to 
                    diverse student needs.
                  </p>
                  <h4 className="text-lg font-semibold mb-2 text-academy-blue">Subjects Offered:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                        <Calculator size={18} />
                      </div>
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                        <Beaker size={18} />
                      </div>
                      <span>Science</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                        <BookOpen size={18} />
                      </div>
                      <span>English</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                        <Users size={18} />
                      </div>
                      <span>Social Science</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Book className="h-6 w-6 text-academy-blue mr-2" />
                  <h3 className="text-xl font-bold">Class 11 & 12 (Science & Commerce)</h3>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-academy-blue">Science Stream</h4>
                  <div className="content-card mb-8">
                    <p className="mb-4">
                      Our science stream program prepares students for board examinations and lays the groundwork for 
                      future competitive exams. Students receive in-depth knowledge and practical understanding of key subjects.
                    </p>
                    <h5 className="text-lg font-semibold mb-2 text-academy-blue">Subjects Offered:</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <Calculator size={18} />
                        </div>
                        <span>Physics</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <Beaker size={18} />
                        </div>
                        <span>Chemistry</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <BookOpen size={18} />
                        </div>
                        <span>Biology</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <Calculator size={18} />
                        </div>
                        <span>Mathematics</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <Users size={18} />
                        </div>
                        <span>Computer Science</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <BookOpen size={18} />
                        </div>
                        <span>English</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-academy-blue">Commerce Stream</h4>
                  <div className="content-card">
                    <p className="mb-4">
                      Our commerce program equips students with strong business and financial knowledge, preparing them 
                      for successful careers in accounting, business management, and economics.
                    </p>
                    <h5 className="text-lg font-semibold mb-2 text-academy-blue">Subjects Offered:</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <Calculator size={18} />
                        </div>
                        <span>Accountancy</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <Users size={18} />
                        </div>
                        <span>Business Studies</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <BookOpen size={18} />
                        </div>
                        <span>Economics</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <Calculator size={18} />
                        </div>
                        <span>Mathematics</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3">
                          <BookOpen size={18} />
                        </div>
                        <span>English</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Competitive Exams */}
            <TabsContent value="competitive" className="animate-fade-in">
              <h2 className="section-heading">Competitive Exam Preparation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="content-card">
                  <div className="mb-4">
                    <Award className="h-12 w-12 text-academy-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-academy-blue">NEET (Medical)</h3>
                  <p className="mb-4">
                    Our NEET preparation program offers intensive coaching focusing on Physics, Chemistry, and Biology. 
                    The curriculum is designed to cover the entire NEET syllabus comprehensively.
                  </p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    <li>- Expert faculty with proven track record</li>
                    <li>- Regular mock tests and practice sessions</li>
                    <li>- Personalized doubt-clearing sessions</li>
                    <li>- Study materials and question banks</li>
                    <li>- Performance tracking and improvement strategies</li>
                  </ul>
                </div>
                
                <div className="content-card">
                  <div className="mb-4">
                    <Award className="h-12 w-12 text-academy-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-academy-blue">MHT-CET</h3>
                  <p className="mb-4">
                    Our MHT-CET coaching prepares students for the Maharashtra Common Entrance Test for Engineering and 
                    Pharmacy courses. The program covers Physics, Chemistry, Mathematics, and Biology.
                  </p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    <li>- Comprehensive coverage of all subjects</li>
                    <li>- Focus on Maharashtra State Board topics</li>
                    <li>- Regular assessment and feedback</li>
                    <li>- Topic-wise tests and full-length mock exams</li>
                    <li>- Time management and exam strategies</li>
                  </ul>
                </div>
                
                <div className="content-card">
                  <div className="mb-4">
                    <Award className="h-12 w-12 text-academy-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-academy-blue">JEE (Mains) Engineering</h3>
                  <p className="mb-4">
                    Our JEE (Mains) preparation program provides focused training in Physics, Chemistry, and Mathematics 
                    for engineering aspirants. The curriculum is designed to build strong conceptual understanding.
                  </p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    <li>- In-depth coverage of advanced concepts</li>
                    <li>- Problem-solving techniques and strategies</li>
                    <li>- Regular practice with JEE-level problems</li>
                    <li>- Mock tests and performance analysis</li>
                    <li>- One-on-one mentoring for challenging topics</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            {/* Pharmacy Courses */}
            <TabsContent value="pharmacy" className="animate-fade-in">
              <h2 className="section-heading">Pharmacy Courses</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="content-card">
                  <div className="mb-4">
                    <Beaker className="h-12 w-12 text-academy-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-academy-blue">B. Pharmacy</h3>
                  <p className="mb-4">
                    Our B. Pharmacy coaching program provides comprehensive coverage of all major subjects required for 
                    bachelor's degree in pharmacy. We focus on both theoretical knowledge and practical skills.
                  </p>
                  <h4 className="font-semibold mb-2">Subjects Covered:</h4>
                  <ul className="space-y-2">
                    <li>- Pharmaceutical Chemistry</li>
                    <li>- Pharmaceutics</li>
                    <li>- Pharmacology</li>
                    <li>- Pharmacognosy</li>
                    <li>- Pharmaceutical Analysis</li>
                    <li>- Pharmacy Practice</li>
                  </ul>
                </div>
                
                <div className="content-card">
                  <div className="mb-4">
                    <Beaker className="h-12 w-12 text-academy-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-academy-blue">D. Pharmacy</h3>
                  <p className="mb-4">
                    Our D. Pharmacy program offers detailed coaching for diploma in pharmacy students. The curriculum 
                    covers essential pharmacy subjects and practical knowledge needed for a successful career.
                  </p>
                  <h4 className="font-semibold mb-2">Subjects Covered:</h4>
                  <ul className="space-y-2">
                    <li>- Pharmaceutics</li>
                    <li>- Pharmaceutical Chemistry</li>
                    <li>- Pharmacognosy</li>
                    <li>- Human Anatomy and Physiology</li>
                    <li>- Social Pharmacy</li>
                    <li>- Pharmacy Practice</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-8">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                At Masters Academy, we believe in a holistic approach to education that goes beyond textbooks and 
                examinations. Our teaching methodology is designed to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>1</span>
                  </div>
                  <span><strong>Build Strong Foundations:</strong> We ensure students have a solid understanding of fundamental concepts.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>2</span>
                  </div>
                  <span><strong>Develop Critical Thinking:</strong> We encourage students to analyze, question, and apply concepts rather than memorize them.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>3</span>
                  </div>
                  <span><strong>Personalize Learning:</strong> We adapt our teaching methods to accommodate different learning styles and paces.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>4</span>
                  </div>
                  <span><strong>Foster Practical Application:</strong> We connect theoretical knowledge with real-world applications.</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg mb-6">
                Our comprehensive approach includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>•</span>
                  </div>
                  <span><strong>Interactive Lectures:</strong> Engaging sessions that encourage active participation and discussion.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>•</span>
                  </div>
                  <span><strong>Regular Assessments:</strong> Frequent tests and quizzes to track progress and identify areas needing improvement.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>•</span>
                  </div>
                  <span><strong>Doubt-Clearing Sessions:</strong> Dedicated time for addressing individual questions and difficulties.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>•</span>
                  </div>
                  <span><strong>Comprehensive Study Materials:</strong> Well-structured notes, practice questions, and reference materials.</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-academy-blue text-white flex items-center justify-center mr-3 mt-1">
                    <span>•</span>
                  </div>
                  <span><strong>Parent-Teacher Communication:</strong> Regular updates on student progress and areas for improvement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
