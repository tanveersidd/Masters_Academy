
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
      variant: "default",
    });
    
    // Reset form
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-academy-blue text-white py-16">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with us for inquiries, admissions, or any other information.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-academy-blue">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-academy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-academy-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Plot No. 50/T/2, Road No. 6, Above New Diamond Motor Training School, Govandi Slums, Govandi West, Baiganwadi, Shivaji Nagar, Mumbai, Maharashtra 400043
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-academy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-academy-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                    <p className="text-gray-600 mb-1">8082213981</p>
                    <p className="text-gray-600 mb-1">9920813688</p>
                    <p className="text-gray-600">9821062303</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-academy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-academy-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                    <p className="text-gray-600">info@mastersacademy.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-academy-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-academy-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.985576886684!2d72.9243658760401!3d19.060562682163165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c74d5600bd05%3A0x8649ee0e6ff22290!2sShivaji%20Nagar%2C%20Govandi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698138423707!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-academy-blue">Send Us a Message</h2>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Write your message here..." 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-academy-blue hover:bg-academy-light-blue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4 text-academy-blue">Visit Our Campus</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Experience the Masters Academy learning environment firsthand. Schedule a visit to our campus to meet our faculty and learn more about our programs.
          </p>
          <a 
            href="tel:8082213981" 
            className="inline-block bg-academy-blue text-white font-medium py-3 px-6 rounded-md hover:bg-academy-light-blue transition-colors"
          >
            Call to Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
