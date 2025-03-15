
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import AboutPreview from '@/components/home/AboutPreview';
import StoreInfo from '@/components/home/StoreInfo';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize animation for sections
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Berwyn's Toys & Trains - Classic Toys and Model Trains in Berwyn, IL</title>
        <meta
          name="description"
          content="Berwyn's Toys & Trains is your destination for quality model trains, classic toys, and hobby supplies. Located in Berwyn, IL."
        />
      </Helmet>
      
      <div className="flex flex-col min-h-screen overflow-hidden bg-cream">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <FeaturedCategories />
          <AboutPreview />
          <StoreInfo />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
