
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
    // For a real implementation, you'd send the form data to a server
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Berwyn's Toys & Trains</title>
        <meta
          name="description"
          content="Get in touch with Berwyn's Toys & Trains. Contact us for inquiries about our products, services, or to plan your visit."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen overflow-hidden bg-cream">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative bg-train-red/5">
            <div className="absolute inset-0 bg-paper-texture opacity-20 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-wood/20 text-train-red rounded-full">
                  Get In Touch
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-train-black">
                  Contact Us
                </h1>
                <p className="text-lg mb-6 text-train-black/80">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info & Form Section */}
          <section className="py-12 relative">
            <div className="container-padding max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Contact Information */}
                <div className="bg-white p-8 rounded-lg shadow-md border border-wood/20">
                  <h2 className="text-2xl font-bold mb-6 text-train-black">Store Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-train-red/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-train-red" />
                      </div>
                      <div>
                        <h3 className="font-medium text-train-black mb-1">Address</h3>
                        <p className="text-train-black/70">7025 Ogden Ave.</p>
                        <p className="text-train-black/70">Berwyn, IL 60402</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-train-blue/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-train-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-train-black mb-1">Phone</h3>
                        <p className="text-train-black/70">708-484-4384</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-train-green/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-train-green" />
                      </div>
                      <div>
                        <h3 className="font-medium text-train-black mb-1">Email</h3>
                        <p className="text-train-black/70">info@berwynstoysandtrains.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-wood/10 p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-wood-dark" />
                      </div>
                      <div>
                        <h3 className="font-medium text-train-black mb-1">Hours</h3>
                        <div className="grid grid-cols-2 text-train-black/70 gap-1">
                          <p>Monday</p>
                          <p>10:00 AM - 6:00 PM</p>
                          <p>Tuesday</p>
                          <p>10:00 AM - 6:00 PM</p>
                          <p>Wednesday</p>
                          <p>10:00 AM - 6:00 PM</p>
                          <p>Thursday</p>
                          <p>10:00 AM - 8:00 PM</p>
                          <p>Friday</p>
                          <p>10:00 AM - 6:00 PM</p>
                          <p>Saturday</p>
                          <p>10:00 AM - 5:00 PM</p>
                          <p>Sunday</p>
                          <p>Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md border border-wood/20">
                  <h2 className="text-2xl font-bold mb-6 text-train-black">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-train-black/70 mb-1">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-wood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-train-red/50"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-train-black/70 mb-1">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-wood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-train-red/50"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-train-black/70 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-2 border border-wood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-train-red/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-train-black/70 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full px-4 py-2 border border-wood/30 rounded-md focus:outline-none focus:ring-2 focus:ring-train-red/50 resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <CustomButton type="submit" className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </CustomButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Google Map Section */}
          <section className="py-12 bg-train-blue/5 relative">
            <div className="absolute inset-0 bg-paper-texture opacity-20 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-train-black">Find Us</h2>
                <p className="text-train-black/70 mt-2">We're located on Ogden Avenue in Berwyn, Illinois</p>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white h-[400px] bg-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.4898858109876!2d-87.80411572413688!3d41.8592210726256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e34b7b2625339%3A0xf0fdb629d5078dbe!2s7025%20Ogden%20Ave%2C%20Berwyn%2C%20IL%2060402!5e0!3m2!1sen!2sus!4v1659636311754!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map to Berwyn's Toys & Trains"
                ></iframe>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
