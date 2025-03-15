
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { MapPin, Phone, Clock, Navigation, Car, Train as TrainIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const FindUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Find Us - Berwyn's Toys & Trains</title>
        <meta
          name="description"
          content="Visit Berwyn's Toys & Trains in person. Directions, store hours, and information to help you find our brick-and-mortar location in Berwyn, IL."
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
                  Store Location
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-train-black">
                  Find Us
                </h1>
                <p className="text-lg mb-6 text-train-black/80">
                  Plan your visit to our brick-and-mortar location in Berwyn, Illinois
                </p>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-12 relative">
            <div className="container-padding max-w-7xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-wood/20">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-train-black">Our Location</h2>
                    
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-train-red mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-train-black">Address</h3>
                          <p className="text-train-black/70">7025 Ogden Ave.</p>
                          <p className="text-train-black/70">Berwyn, IL 60402</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-train-blue mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-train-black">Phone</h3>
                          <p className="text-train-black/70">708-484-4384</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-train-green mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-train-black">Store Hours</h3>
                          <div className="grid grid-cols-2 text-sm text-train-black/70 gap-1">
                            <p>Monday - Wednesday:</p>
                            <p>10:00 AM - 6:00 PM</p>
                            <p>Thursday:</p>
                            <p>10:00 AM - 8:00 PM</p>
                            <p>Friday:</p>
                            <p>10:00 AM - 6:00 PM</p>
                            <p>Saturday:</p>
                            <p>10:00 AM - 5:00 PM</p>
                            <p>Sunday:</p>
                            <p>Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/contact">
                        <CustomButton>
                          Contact Us
                        </CustomButton>
                      </Link>
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=7025+Ogden+Ave+Berwyn+IL+60402" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <CustomButton variant="outline" className="flex items-center">
                          <Navigation className="mr-2 h-4 w-4" /> Get Directions
                        </CustomButton>
                      </a>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 h-[400px] lg:h-auto">
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
              </div>
            </div>
          </section>

          {/* Directions Section */}
          <section className="py-12 bg-wood-light/20 relative">
            <div className="absolute inset-0 bg-paper-texture opacity-30 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-train-black">How to Get Here</h2>
                <p className="text-train-black/70 mt-2 max-w-2xl mx-auto">
                  We're conveniently located on Ogden Avenue in Berwyn, just minutes from downtown Chicago.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-wood/20">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-train-blue/10 rounded-full mr-3">
                      <Car className="h-6 w-6 text-train-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-train-black">By Car</h3>
                  </div>
                  
                  <div className="space-y-4 text-train-black/80">
                    <p><strong>From Chicago:</strong> Take I-290 West to the Harlem Avenue exit. Head south on Harlem to Ogden Avenue. Turn right on Ogden Avenue and continue for about 0.5 miles. Our store will be on your right.</p>
                    <p><strong>From Western Suburbs:</strong> Take Ogden Avenue east toward Chicago. We're located between East Avenue and Gunderson Avenue on the south side of the street.</p>
                    <p><strong>Parking:</strong> Free parking is available in our lot behind the store, as well as street parking on Ogden Avenue.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-wood/20">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-train-red/10 rounded-full mr-3">
                      <TrainIcon className="h-6 w-6 text-train-red" />
                    </div>
                    <h3 className="text-xl font-bold text-train-black">By Public Transit</h3>
                  </div>
                  
                  <div className="space-y-4 text-train-black/80">
                    <p><strong>CTA Pink Line:</strong> Take the Pink Line to the 54th/Cermak station. Transfer to the #302 Ogden/Stanley bus heading northeast. Exit at Ogden & Gunderson.</p>
                    <p><strong>Metra BNSF Line:</strong> Take the train to the Berwyn station. From there, it's approximately a 15-minute walk north to our location, or transfer to the #302 Ogden bus.</p>
                    <p><strong>PACE Bus:</strong> The #302 Ogden/Stanley and #322 Cermak buses both have stops within a block of our store.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-train-green/10 p-6 rounded-lg border border-train-green/20 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-train-black mb-4 text-center">Local Landmarks</h3>
                <p className="text-train-black/80 mb-4">
                  We're located near several local landmarks that can help you find us:
                </p>
                <ul className="space-y-2 text-train-black/80 pl-6 list-disc">
                  <li>Two blocks east of MacNeal Hospital</li>
                  <li>Across from Berwyn's Houby Park</li>
                  <li>Three blocks west of the Berwyn Metra station</li>
                  <li>Near the intersection of Ogden Avenue and East Avenue</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Area Attractions Section */}
          <section className="py-12 relative">
            <div className="container-padding max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-train-black">While You're Here</h2>
                <p className="text-train-black/70 mt-2 max-w-2xl mx-auto">
                  Make a day of your visit! Check out these nearby attractions and restaurants.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-wood/20">
                  <h3 className="text-xl font-bold text-train-black mb-3">Dining Options</h3>
                  <ul className="space-y-2 text-train-black/80">
                    <li>• Autre Monde Cafe (Mediterranean)</li>
                    <li>• Big Guys Sausage Stand (American)</li>
                    <li>• Lalo's Restaurant (Mexican)</li>
                    <li>• Olive Garden (Italian)</li>
                    <li>• Connie's Family Restaurant (American)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-wood/20">
                  <h3 className="text-xl font-bold text-train-black mb-3">Family Activities</h3>
                  <ul className="space-y-2 text-train-black/80">
                    <li>• FitzGerald's (Live Music Venue)</li>
                    <li>• Proksa Park</li>
                    <li>• Houby Park</li>
                    <li>• Berwyn Historic Society</li>
                    <li>• 16th Street Theater</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-wood/20">
                  <h3 className="text-xl font-bold text-train-black mb-3">Shopping</h3>
                  <ul className="space-y-2 text-train-black/80">
                    <li>• Cermak Plaza Shopping Center</li>
                    <li>• North Riverside Park Mall</li>
                    <li>• Depot District Shopping</li>
                    <li>• Vintage Shops on Roosevelt Road</li>
                    <li>• Berwyn Antique Mall</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FindUs;
