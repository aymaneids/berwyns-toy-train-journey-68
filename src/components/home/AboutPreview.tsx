
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/CustomButton';

const AboutPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0.8]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about-section" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-wood/5 z-0"></div>
      
      <div className="container-padding max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Container */}
          <motion.div 
            className="relative order-2 lg:order-1"
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/store-interior.jpg"
                alt="Inside Berwyn's Toys & Trains shop"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-train-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-train-red/10 rounded-full"></div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-train-blue/10 rounded-full"></div>
            
            {/* Year badge */}
            <div className="absolute top-6 right-6 bg-train-red/90 text-white w-20 h-20 rounded-full flex items-center justify-center flex-col shadow-lg">
              <span className="text-xs">Since</span>
              <span className="text-xl font-bold">1990</span>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="order-1 lg:order-2"
            style={{ opacity: contentOpacity }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-wood/20 text-train-green rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-train-black">
              The Magic of a Classic Neighborhood Toy Store
            </h2>
            
            <div className="space-y-4 text-train-black/80 mb-8">
              <p>
                For over three decades, Berwyn's Toys & Trains has been a cornerstone of the community, providing quality toys, model trains, and hobby supplies to enthusiasts of all ages.
              </p>
              <p>
                What started as a small family business has grown into a beloved destination where imagination thrives and generations connect through the joy of play and collection.
              </p>
              <p>
                Our knowledgeable staff, authentic atmosphere, and carefully curated selection make us more than just a store – we're a place where memories are made.
              </p>
            </div>
            
            <CustomButton variant="secondary" size="lg" as={Link} to="/about">
              Read Our Full Story
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
