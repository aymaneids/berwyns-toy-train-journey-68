
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/CustomButton';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const InfoCard = ({ icon, title, children, delay = 0 }: InfoCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 border border-purple-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-purple-100 rounded-full text-purple-600">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
          <div className="text-gray-600 text-sm">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

const StoreInfo = () => {
  return (
    <section className="section-padding bg-purple-50 relative">
      <div className="absolute inset-0 bg-paper-texture opacity-30"></div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Location & Hours</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            We're conveniently located in Uptown Chicago. Stop by to explore our collection and experience the magic of our store in person.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard 
            icon={<MapPin className="h-6 w-6" />} 
            title="Our Location" 
            delay={100}
          >
            <p className="mb-3">4523 N Broadway, Chicago, IL 60640</p>
            <Link 
              to="/find-us" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              Get Directions
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </InfoCard>
          
          <InfoCard 
            icon={<Phone className="h-6 w-6" />} 
            title="Contact Us" 
            delay={200}
          >
            <p>Phone: 773-555-1234</p>
            <p className="mb-3">Email: info@celltoyscollectibles.com</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              Send a Message
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </InfoCard>
          
          <InfoCard 
            icon={<Clock className="h-6 w-6" />} 
            title="Store Hours" 
            delay={300}
          >
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>11:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday:</span>
                <span>11:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 5:00 PM</span>
              </li>
            </ul>
          </InfoCard>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact">
            <CustomButton variant="outline" size="lg">
              Contact Us
            </CustomButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
