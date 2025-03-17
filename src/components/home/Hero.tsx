
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CustomButton } from '@/components/ui/CustomButton';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-paper-texture opacity-30 z-0"></div>
      
      {/* Content Container */}
      <div className="container-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-purple-100 text-purple-600 rounded-full animate-fade-in">
            Your Premier Destination for Collectible Toys in Chicago
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
            Discover Rare <br className="hidden md:block" />
            <span className="text-purple-600">Collectibles</span>
          </h1>
          <p className="text-lg mb-8 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Step into Cell-Toys Collectibles, where nostalgia meets rarity. Explore our curated selection of action figures, limited editions, and collectible treasures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/explore">
              <CustomButton size="lg">
                Explore Collection
              </CustomButton>
            </Link>
            <Link to="/find-us">
              <CustomButton variant="outline" size="lg">
                Visit Our Store
              </CustomButton>
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <img
              src="/hero-collectibles.jpg"
              alt="Rare collectible toys display at Cell-Toys Collectibles"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-500 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
          
          {/* Stats or Featured Label */}
          <div className="absolute -bottom-5 right-10 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg border border-purple-100">
            <p className="text-sm font-medium text-gray-800">Serving Collectors Since 2010</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
