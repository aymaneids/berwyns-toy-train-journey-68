
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { Star, ThumbsUp, Calendar, User } from 'lucide-react';

// Review interface
interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  content: string;
  productCategory: string;
  helpfulCount: number;
}

// Sample reviews data
const reviewsData: Review[] = [
  {
    id: 1,
    author: "Michael Johnson",
    date: "June 10, 2023",
    rating: 5,
    content: "Cell-Toys has the most impressive collection of vintage action figures I've seen anywhere in Chicago. I found a mint condition 1980s Transformer that I've been searching for years. The staff was incredibly knowledgeable and helped me authenticate the piece. Worth every penny!",
    productCategory: "Vintage Action Figures",
    helpfulCount: 42
  },
  {
    id: 2,
    author: "Sarah Williams",
    date: "May 22, 2023",
    rating: 4,
    content: "Great selection of limited edition collectibles. I visit every month to see what's new. The display cases are well-organized and the staff doesn't hover but is always available when you have questions. Prices are fair for the rarity of items they carry.",
    productCategory: "Limited Edition Collectibles",
    helpfulCount: 28
  },
  {
    id: 3,
    author: "David Martinez",
    date: "April 15, 2023",
    rating: 5,
    content: "As a serious collector of anime figurines, I'm absolutely thrilled with Cell-Toys. They have imports I haven't seen elsewhere and they take great care in handling and packaging items. I appreciate that they provide certificates of authenticity with rare purchases.",
    productCategory: "Anime Collectibles",
    helpfulCount: 37
  },
  {
    id: 4,
    author: "Emily Chen",
    date: "March 30, 2023",
    rating: 3,
    content: "Good variety of collectible card games and related merchandise. The trading events they host are fun and well-organized. Would appreciate if they expanded their selection of international cards. Staff is friendly and prices are reasonable.",
    productCategory: "Collectible Card Games",
    helpfulCount: 15
  },
  {
    id: 5,
    author: "James Wilson",
    date: "February 18, 2023",
    rating: 5,
    content: "Cell-Toys is a collector's paradise. Their selection of classic video game memorabilia is unmatched in the city. I found several rare Nintendo items that I'd been hunting for years. The owner clearly has a passion for collectibles and it shows in the quality of their inventory.",
    productCategory: "Video Game Collectibles",
    helpfulCount: 52
  },
  {
    id: 6,
    author: "Sophia Rodriguez",
    date: "January 25, 2023",
    rating: 4,
    content: "I love browsing through their movie memorabilia section. They have some really unique pieces from classic sci-fi films. The themed display arrangements make it fun to explore. My only suggestion would be to improve the lighting in some corners of the store.",
    productCategory: "Movie Memorabilia",
    helpfulCount: 21
  }
];

// Review card component
const ReviewCard = ({ review }: { review: Review }) => {
  const [helpful, setHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulCount);
  
  const handleHelpful = () => {
    if (!helpful) {
      setHelpfulCount(helpfulCount + 1);
      setHelpful(true);
    } else {
      setHelpfulCount(helpfulCount - 1);
      setHelpful(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-purple-100 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 flex items-center">
            <User className="h-4 w-4 mr-2 text-purple-400" />
            {review.author}
          </h3>
          <div className="flex items-center mt-1">
            <Calendar className="h-3.5 w-3.5 text-gray-400 mr-1.5" />
            <span className="text-xs text-gray-500">{review.date}</span>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-purple-50 px-3 py-1 rounded text-xs font-medium text-purple-600 inline-block mb-3">
        {review.productCategory}
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {review.content}
      </p>
      
      <button 
        onClick={handleHelpful}
        className={`flex items-center text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
          helpful 
            ? 'bg-purple-100 text-purple-600' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <ThumbsUp className={`h-3.5 w-3.5 mr-1.5 ${helpful ? 'fill-purple-600' : ''}`} />
        Helpful ({helpfulCount})
      </button>
    </div>
  );
};

const Reviews = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [displayedReviews, setDisplayedReviews] = useState(reviewsData);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Filter reviews if needed
    let filtered = [...reviewsData];
    if (filter !== 'all') {
      const ratingFilter = parseInt(filter);
      filtered = reviewsData.filter(review => review.rating === ratingFilter);
    }
    
    // Sort reviews
    if (sort === 'newest') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sort === 'highest') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'helpful') {
      filtered.sort((a, b) => b.helpfulCount - a.helpfulCount);
    }
    
    setDisplayedReviews(filtered);
  }, [filter, sort]);

  return (
    <>
      <Helmet>
        <title>Customer Reviews - Cell-Toys Collectibles</title>
        <meta
          name="description"
          content="Read authentic reviews from customers who have experienced Cell-Toys Collectibles' selection of rare and collectible toys in Uptown Chicago."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-50">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative bg-purple-100/30">
            <div className="absolute inset-0 bg-paper-texture opacity-20 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
                  Customer Experiences
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                  Customer Reviews
                </h1>
                <p className="text-lg mb-6 text-gray-600">
                  See what collectors and enthusiasts are saying about their experiences at Cell-Toys Collectibles
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <div className="relative">
                    <select 
                      className="appearance-none bg-white border border-purple-200 rounded-md py-2 pl-4 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">All Ratings</option>
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select 
                      className="appearance-none bg-white border border-purple-200 rounded-md py-2 pl-4 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="newest">Newest First</option>
                      <option value="highest">Highest Rated</option>
                      <option value="helpful">Most Helpful</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="py-12 relative">
            <div className="container-padding max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              
              {/* Write a Review CTA */}
              <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-purple-100 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Share Your Experience</h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Have you visited Cell-Toys Collectibles? We'd love to hear about your experience and the treasures you discovered in our store.
                </p>
                <CustomButton>
                  Write a Review
                </CustomButton>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Reviews;
