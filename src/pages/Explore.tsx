
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// Event interface
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

// Sample events data
const eventsData: Event[] = [
  {
    id: 1,
    title: "Model Train Exhibition",
    date: "June 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "In-Store",
    description: "Join us for a special exhibition featuring incredible model train layouts from local enthusiasts. Witness miniature worlds in motion!",
    image: "/event-trains.jpg",
    category: "Exhibition"
  },
  {
    id: 2,
    title: "Build & Play Workshop",
    date: "June 22, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "In-Store",
    description: "A hands-on workshop for children ages 6-12 to build their own wooden toy creations. Materials provided, registration required.",
    image: "/event-workshop.jpg",
    category: "Workshop"
  },
  {
    id: 3,
    title: "Collector's Night",
    date: "July 5, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "In-Store",
    description: "An evening for train collectors to meet, trade, and discuss their passion. Light refreshments will be served.",
    image: "/event-collectors.jpg",
    category: "Social"
  },
  {
    id: 4,
    title: "Puzzle Competition",
    date: "July 12, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "Community Center",
    description: "Test your puzzle-solving skills in our annual competition. Categories for all ages and skill levels.",
    image: "/event-puzzle.jpg",
    category: "Competition"
  }
];

// Event card component
const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-wood/20 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-train-red/90 text-white text-xs font-medium px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-train-black mb-2">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <Calendar className="h-4 w-4 mr-2 mt-0.5 text-train-blue" />
            <span className="text-sm text-train-black/80">{event.date}</span>
          </div>
          <div className="flex items-start">
            <Clock className="h-4 w-4 mr-2 mt-0.5 text-train-blue" />
            <span className="text-sm text-train-black/80">{event.time}</span>
          </div>
          <div className="flex items-start">
            <MapPin className="h-4 w-4 mr-2 mt-0.5 text-train-blue" />
            <span className="text-sm text-train-black/80">{event.location}</span>
          </div>
        </div>
        
        <p className="text-train-black/70 text-sm mb-4">{event.description}</p>
        
        <CustomButton variant="secondary" size="sm">
          Register Now
        </CustomButton>
      </div>
    </div>
  );
};

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Explore Events - Berwyn's Toys & Trains</title>
        <meta
          name="description"
          content="Discover upcoming events, workshops, and exhibitions at Berwyn's Toys & Trains."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen overflow-hidden bg-cream">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative bg-train-green/10">
            <div className="absolute inset-0 bg-paper-texture opacity-20 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-wood/20 text-train-green rounded-full">
                  Join Us
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-train-black">
                  Upcoming Events
                </h1>
                <p className="text-lg mb-6 text-train-black/80">
                  Discover workshops, exhibitions, and community gatherings at Berwyn's Toys & Trains
                </p>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-12 relative">
            <div className="container-padding max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eventsData.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          </section>

          {/* Host an Event Section */}
          <section className="py-16 bg-train-blue/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-paper-texture opacity-20 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-wood/20 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-20 h-20 mx-auto md:mx-0 bg-train-blue/10 rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-train-blue" />
                    </div>
                  </div>
                  <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4 text-train-black">Host an Event</h2>
                    <p className="mb-6 text-train-black/80">
                      Interested in hosting a workshop, club meeting, or special event at our store? We'd love to collaborate with you!
                    </p>
                    <CustomButton as={Link} to="/contact">
                      Contact Us
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-train-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-train-green/10 rounded-full blur-3xl"></div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Explore;
