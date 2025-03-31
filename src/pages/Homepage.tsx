
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, CheckCircle, Users, Award } from 'lucide-react';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-academy-blue to-academy-light-blue text-white py-16 md:py-24">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Masters Academy
              </h1>
              <p className="text-xl md:text-2xl font-light italic mb-6">
                "See the difference that makes the difference."
              </p>
              <p className="text-lg mb-8">
                Delivering top-quality education through innovative methodologies for students from Class 8 to 12 in English and Urdu mediums.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-academy-yellow text-academy-blue hover:bg-yellow-400">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-4 rounded-full shine-effect">
                <img 
                  src="/lovable-uploads/1c3bdbed-c9da-4255-a14b-b38539cd834c.png" 
                  alt="Masters Academy Logo" 
                  className="h-56 w-56 md:h-72 md:w-72"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="section-heading text-center">Welcome to Masters Academy</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              At Masters Academy, we are committed to educational excellence and student success. 
              Our mission is to provide comprehensive, quality education through innovative teaching 
              methodologies that prepare students for their academic journey and beyond.
            </p>
            <p className="text-lg mb-8">
              Located in Shivaji Nagar-Govandi West, Mumbai, we offer tutoring services for 
              students from Class 8 to Class 12 in both English and Urdu mediums, as well as specialized 
              courses in Pharmacy, Commerce, and preparation for competitive exams.
            </p>
            <Button asChild className="bg-academy-blue hover:bg-academy-light-blue">
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Highlight Section */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* School Tuitions */}
            <div className="content-card group">
              <div className="h-12 w-12 bg-academy-blue rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-academy-yellow group-hover:text-academy-blue transition-all duration-300">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">School Tuitions</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Class 8 to 10 (English & Urdu Medium)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Class 11 & 12 (Science & Commerce)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Comprehensive subject coverage</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses#school">Learn More</Link>
              </Button>
            </div>

            {/* Competitive Exams */}
            <div className="content-card group">
              <div className="h-12 w-12 bg-academy-blue rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-academy-yellow group-hover:text-academy-blue transition-all duration-300">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Exams</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>NEET (Medical)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>MHT-CET (Engineering & Pharmacy)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>JEE (Mains) Engineering</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses#competitive">Learn More</Link>
              </Button>
            </div>

            {/* Pharmacy Courses */}
            <div className="content-card group">
              <div className="h-12 w-12 bg-academy-blue rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-academy-yellow group-hover:text-academy-blue transition-all duration-300">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pharmacy Courses</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>B. Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>D. Pharmacy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Comprehensive subject coverage</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/courses#pharmacy">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="section-heading text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="content-card">
              <h3 className="text-xl font-bold mb-4 text-academy-blue">Expert Faculty</h3>
              <p>Our teachers are highly qualified and experienced educators with deep subject expertise, dedicated to helping students achieve academic excellence.</p>
            </div>
            
            <div className="content-card">
              <h3 className="text-xl font-bold mb-4 text-academy-blue">Innovative Learning Methods</h3>
              <p>We emphasize practical skills, critical thinking, and continuous improvement through our innovative teaching methodologies.</p>
            </div>
            
            <div className="content-card">
              <h3 className="text-xl font-bold mb-4 text-academy-blue">Personalized Attention</h3>
              <p>We provide education tailored to each student's unique needs and learning style to ensure they reach their full potential.</p>
            </div>
            
            <div className="content-card">
              <h3 className="text-xl font-bold mb-4 text-academy-blue">Proven Track Record</h3>
              <p>Our students consistently achieve top results in board examinations and competitive entrance tests across various disciplines.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-academy-blue hover:bg-academy-light-blue">
              <Link to="/about#why-choose-us">Learn More About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-academy-blue text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Academic Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join Masters Academy today and experience education that transforms lives. Our dedicated faculty is ready to guide you towards academic excellence.
          </p>
          <Button asChild size="lg" className="bg-academy-yellow text-academy-blue hover:bg-yellow-400">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
