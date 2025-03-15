
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CategoryProps {
  title: string;
  image: string;
  description: string;
  link: string;
  delay: number;
}

const Category = ({ title, image, description, link, delay }: CategoryProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <motion.div
      className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.7 }}
    >
      <Link to={link} className="block relative aspect-[4/5] overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-wood/20 z-10 transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )} />
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-train-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-70 z-10" />
        
        <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{description}</p>
          <span className="inline-block text-white text-sm font-medium border-b border-white/50 pb-0.5 transition-all duration-300 group-hover:border-white">
            Explore Collection
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Model Trains",
      image: "/category-trains.jpg",
      description: "Discover HO, G, O, and S scale model trains from top manufacturers.",
      link: "/shop",
      delay: 100
    },
    {
      title: "Building Toys",
      image: "/category-building.jpg",
      description: "Explore creative building sets including LEGO, Cobi, and more.",
      link: "/shop",
      delay: 200
    },
    {
      title: "Wooden Toys",
      image: "/category-wooden.jpg",
      description: "Quality wooden toys including Brio trains and classic playthings.",
      link: "/shop",
      delay: 300
    },
    {
      title: "Puzzles & Games",
      image: "/category-puzzles.jpg",
      description: "Brain-teasing puzzles and entertaining games for all ages.",
      link: "/shop",
      delay: 400
    }
  ];

  return (
    <section className="section-padding bg-cream bg-paper-texture relative">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-wood/20 text-train-blue rounded-full">
            Collections
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-train-black">Discover Our Categories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-train-black/70">
            Explore our carefully curated selection of quality toys, trains, and hobby supplies for enthusiasts of all ages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              image={category.image}
              description={category.description}
              link={category.link}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-40 h-40 bg-train-green opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-train-red opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturedCategories;
