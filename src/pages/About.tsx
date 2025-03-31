
import { Briefcase, GraduationCap, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-academy-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Masters Academy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, vision, and the dedicated team behind Masters Academy's success.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="content-card">
              <div className="mb-4">
                <Target className="h-12 w-12 text-academy-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-academy-blue">Our Mission</h2>
              <p className="mb-4">
                At Masters Academy, our mission is to provide high-quality education that prepares students 
                for academic excellence and personal growth. We are committed to creating a supportive learning 
                environment where students can develop critical thinking skills, confidence, and a lifelong love for learning.
              </p>
              <p>
                We strive to make quality education accessible to all students, regardless of their background, 
                by offering courses in both English and Urdu mediums and providing personalized attention to address 
                the unique needs of each learner.
              </p>
            </div>
            
            <div className="content-card">
              <div className="mb-4">
                <GraduationCap className="h-12 w-12 text-academy-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-academy-blue">Our Vision</h2>
              <p className="mb-4">
                Our vision is to be the leading educational institution in Mumbai, recognized for academic excellence, 
                innovative teaching methodologies, and a commitment to student success. We aspire to transform lives 
                through education and empower our students to become lifelong learners and responsible citizens.
              </p>
              <p>
                We envision a future where our students excel in their chosen fields, contribute positively to society, 
                and become leaders in their communities. Our goal is to create a legacy of excellence in education that 
                inspires generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-8">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Masters Academy was founded with the vision to provide quality education to students in the Shivaji Nagar-Govandi 
              West area of Mumbai. What started as a small tutoring center has now grown into a comprehensive educational 
              institution serving students across various academic levels and disciplines.
            </p>
            <p className="text-lg mb-6">
              Over the years, we have expanded our course offerings to include specialized programs for competitive exam 
              preparation and professional courses, while maintaining our commitment to personalized attention and academic excellence.
            </p>
            <p className="text-lg">
              Today, Masters Academy stands as a testament to the power of quality education and dedicated teaching. We are proud 
              of our journey and the thousands of students whose lives we have positively impacted through our educational programs.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">Meet Our Founder</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="aspect-square rounded-full bg-gray-200 mb-4">
                {/* Placeholder for founder's image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <Users size={64} />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-3 text-academy-blue">Zain Sir</h3>
              <p className="text-lg font-semibold mb-4 text-gray-600">Founder & Director</p>
              <p className="mb-4">
                Zain Sir founded Masters Academy with a vision to transform education in the Shivaji Nagar-Govandi West area. 
                His passion for teaching and commitment to academic excellence has been the driving force behind the academy's success.
              </p>
              <p className="mb-4">
                With extensive experience in education and a deep understanding of various curricula, Zain Sir has developed 
                innovative teaching methodologies that have helped thousands of students achieve their academic goals.
              </p>
              <p>
                Under his leadership, Masters Academy has become synonymous with quality education, personalized attention, 
                and student success. His dedication to helping each student reach their full potential has made him a respected 
                figure in the educational community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">Why Choose Masters Academy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="content-card text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-academy-blue rounded-full flex items-center justify-center text-white">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-academy-blue">Expert Faculty</h3>
              <p>
                Our educators are highly qualified professionals with years of teaching experience and deep subject expertise.
              </p>
            </div>
            
            <div className="content-card text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-academy-blue rounded-full flex items-center justify-center text-white">
                  <Briefcase size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-academy-blue">Innovative Learning</h3>
              <p>
                We employ modern teaching methodologies focused on conceptual understanding and practical application.
              </p>
            </div>
            
            <div className="content-card text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-academy-blue rounded-full flex items-center justify-center text-white">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-academy-blue">Personalized Attention</h3>
              <p>
                We recognize each student's unique learning style and provide tailored guidance for optimal results.
              </p>
            </div>
            
            <div className="content-card text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-academy-blue rounded-full flex items-center justify-center text-white">
                  <GraduationCap size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-academy-blue">Proven Track Record</h3>
              <p>
                Our students consistently achieve excellent results in board examinations and competitive entrance tests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
