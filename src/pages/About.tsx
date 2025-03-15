
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Berwyn's Toys & Trains</title>
        <meta
          name="description"
          content="Learn about the history and mission of Berwyn's Toys & Trains, serving Berwyn and beyond with quality toys and model trains since 1990."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen overflow-hidden bg-cream">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-28 pb-20 md:pt-32 md:pb-24 relative">
            <div className="absolute inset-0 bg-paper-texture opacity-30 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-wood/20 text-train-red rounded-full">
                  Our Story
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-train-black">
                  About Berwyn's Toys & Trains
                </h1>
                <p className="text-lg mb-8 text-train-black/80">
                  A classic neighborhood toy and train store serving enthusiasts and families since 1990.
                </p>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-16 relative overflow-hidden bg-white">
            <div className="container-padding max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/store-interior.jpg"
                    alt="Inside Berwyn's Toys & Trains"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-train-black">Our History</h2>
                  <div className="space-y-4 text-train-black/80">
                    <p>
                      Berwyn's Toys & Trains began as a small family operation in 1990, founded by passionate hobbyists who wanted to share their love of classic toys and model trains with the community.
                    </p>
                    <p>
                      Over the decades, we've grown while maintaining our commitment to quality products, exceptional customer service, and creating an authentic "old-school" neighborhood store experience.
                    </p>
                    <p>
                      What started with a modest selection of model trains has expanded to include a wide variety of toys, games, puzzles, and hobby supplies, carefully curated to inspire creativity and joy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-80 h-80 bg-train-red/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
          </section>

          {/* Mission Section */}
          <section className="py-16 bg-wood/10 relative">
            <div className="absolute inset-0 bg-paper-texture opacity-20 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-train-black">Our Mission</h2>
                <p className="text-xl text-train-black/80 mb-8">
                  "To create a welcoming space where nostalgia meets imagination, and to provide quality toys and trains that inspire creativity and bring joy to collectors and families alike."
                </p>
                <div className="flex justify-center">
                  <Link to="/contact">
                    <CustomButton>
                      Get in Touch
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Team/Experience Section */}
          <section className="py-16 bg-white">
            <div className="container-padding max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-train-black">The In-Store Experience</h2>
                <p className="mt-4 max-w-2xl mx-auto text-train-black/70">
                  What makes Berwyn's Toys & Trains special is the atmosphere and knowledge we provide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-cream rounded-lg p-6 shadow-md border border-wood/20">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-train-red/10 text-train-red mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-train-black">Expert Knowledge</h3>
                  <p className="text-train-black/70">
                    Our staff are passionate hobbyists themselves, offering personalized recommendations and answers to all your questions.
                  </p>
                </div>

                <div className="bg-cream rounded-lg p-6 shadow-md border border-wood/20">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-train-blue/10 text-train-blue mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-train-black">Community Focus</h3>
                  <p className="text-train-black/70">
                    We're more than a store – we're a gathering place for enthusiasts to share their passion and connect with like-minded individuals.
                  </p>
                </div>

                <div className="bg-cream rounded-lg p-6 shadow-md border border-wood/20">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-train-green/10 text-train-green mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-train-black">Authentic Atmosphere</h3>
                  <p className="text-train-black/70">
                    Step into a world of wonder with our working train displays, nostalgic decor, and carefully arranged merchandise that invites exploration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-train-blue/10 relative overflow-hidden">
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-train-black">Visit Us Today</h2>
                <p className="text-lg mb-8 text-train-black/80">
                  Experience the magic of Berwyn's Toys & Trains in person. Browse our collection, ask questions, and find your next treasure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/shop">
                    <CustomButton>
                      Explore Our Products
                    </CustomButton>
                  </Link>
                  <Link to="/find-us">
                    <CustomButton variant="outline">
                      Get Directions
                    </CustomButton>
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-60 h-60 bg-train-blue/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-train-red/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
