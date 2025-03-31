
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Masters Academy?",
          answer: "Masters Academy is an educational institute located in Shivaji Nagar-Govandi West, Mumbai. We offer tutoring services for students from Class 8 to Class 12 in both English and Urdu mediums, as well as specialized courses in Pharmacy, Commerce, and preparation for competitive exams such as NEET, MHT-CET, and JEE (Mains)."
        },
        {
          question: "What sets Masters Academy apart from other coaching institutes?",
          answer: "Masters Academy stands out for its personalized attention to each student, experienced faculty, innovative teaching methodologies, and consistent track record of producing top results. We focus on building strong foundations and developing critical thinking skills rather than rote learning."
        },
        {
          question: "Where is Masters Academy located?",
          answer: "Masters Academy is located at Plot No. 50/T/2, Road No. 6, Above New Diamond Motor Training School, Govandi Slums, Govandi West, Baiganwadi, Shivaji Nagar, Mumbai, Maharashtra 400043."
        },
        {
          question: "How can I contact Masters Academy?",
          answer: "You can reach us at phone numbers 8082213981, 9920813688, or 9821062303, or by email at info@mastersacademy.co.in. You can also visit our campus during working hours or use the contact form on our website."
        }
      ]
    },
    {
      category: "Admissions & Enrollment",
      questions: [
        {
          question: "How do I enroll my child at Masters Academy?",
          answer: "To enroll at Masters Academy, you can visit our campus, call our admissions office, or fill out the inquiry form on our website. Our team will guide you through the enrollment process, which typically includes an initial assessment to understand the student's current academic level and needs."
        },
        {
          question: "Is there an entrance test for admission?",
          answer: "We conduct a basic assessment for new students to understand their current academic level and identify areas that need focus. This helps us tailor our teaching approach to meet individual student needs. However, this is not a competitive entrance test but rather a diagnostic assessment."
        },
        {
          question: "When do admissions open for new academic sessions?",
          answer: "Admissions typically open in March-April for the new academic year starting in June. However, we also offer mid-term admissions based on seat availability. We recommend contacting our admissions office for the most current information."
        },
        {
          question: "Can a student join in the middle of an academic year?",
          answer: "Yes, students can join Masters Academy in the middle of an academic year, subject to seat availability. Our faculty provides necessary support to help new students catch up with the ongoing curriculum."
        }
      ]
    },
    {
      category: "Courses & Curriculum",
      questions: [
        {
          question: "What subjects are offered for Class 8-10 students?",
          answer: "For Class 8-10 students, we offer comprehensive coaching in Mathematics, Science, English, and Social Science for both English and Urdu medium students. Our focus is on building strong foundations in these core subjects."
        },
        {
          question: "What subjects are covered in Class 11-12 Science stream?",
          answer: "For Class 11-12 Science stream, we cover Physics, Chemistry, Biology, Mathematics, Computer Science, and English. Our program is designed to prepare students for both board examinations and competitive entrance tests."
        },
        {
          question: "What subjects are covered in Class 11-12 Commerce stream?",
          answer: "For Class 11-12 Commerce stream, we offer coaching in Accountancy, Business Studies, Economics, Mathematics, and English. Our faculty includes experienced professionals with expertise in these subjects."
        },
        {
          question: "How is the NEET/JEE/MHT-CET preparation program structured?",
          answer: "Our competitive exam preparation programs are structured to cover the entire syllabus comprehensively, with a focus on concept building, problem-solving techniques, and exam strategies. The programs include regular mock tests, performance analysis, doubt-clearing sessions, and personalized guidance."
        }
      ]
    },
    {
      category: "Fees & Schedule",
      questions: [
        {
          question: "What are the tuition fees for different courses?",
          answer: "Tuition fees vary depending on the course, grade level, and specific program. Please contact our admissions office or visit our campus for detailed fee information for the current academic year."
        },
        {
          question: "Are there any scholarships or financial aid options available?",
          answer: "Yes, Masters Academy offers scholarships to deserving students based on academic merit and financial need. We also offer special fee concessions for siblings and students from economically disadvantaged backgrounds. Please inquire with our admissions office for more details."
        },
        {
          question: "What is the class schedule like?",
          answer: "Class schedules are designed to accommodate school timings and are typically held in the morning, afternoon, or evening batches. The duration and frequency of classes vary depending on the course and grade level. Detailed schedules are provided at the time of admission."
        },
        {
          question: "Do you conduct classes on weekends?",
          answer: "Yes, we offer weekend batches for students who cannot attend weekday classes. Weekend sessions are typically more intensive to cover the same material in fewer sessions."
        }
      ]
    },
    {
      category: "Teaching & Learning",
      questions: [
        {
          question: "What is the teacher-to-student ratio in classes?",
          answer: "We maintain a healthy teacher-to-student ratio to ensure personalized attention for each student. For regular classes, the ratio is typically 1:20, while for specialized programs and doubt-clearing sessions, we maintain smaller groups for more focused interaction."
        },
        {
          question: "How do you assess student progress?",
          answer: "Student progress is assessed through regular tests, quizzes, assignments, and comprehensive examinations. We provide detailed performance analysis and feedback to both students and parents to track improvement and identify areas that need more focus."
        },
        {
          question: "Do you provide study materials?",
          answer: "Yes, we provide comprehensive study materials, including notes, practice questions, previous years' papers, and reference materials. These are designed by our expert faculty to cover the curriculum thoroughly and prepare students for examinations effectively."
        },
        {
          question: "How do you handle students who need extra support?",
          answer: "For students requiring additional support, we offer remedial classes, one-on-one tutoring sessions, and specialized attention to address specific learning challenges. Our faculty is trained to identify and address various learning styles and difficulties."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-academy-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our courses, admissions, teaching methodology, and more.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-academy-blue">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg overflow-hidden shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-white">
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            If you couldn't find the information you were looking for, please don't hesitate to reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="inline-block bg-academy-blue text-white font-medium py-3 px-6 rounded-md hover:bg-academy-light-blue transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="tel:8082213981" 
              className="inline-block bg-white border border-academy-blue text-academy-blue font-medium py-3 px-6 rounded-md hover:bg-gray-50 transition-colors"
            >
              Call Us: 8082213981
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
