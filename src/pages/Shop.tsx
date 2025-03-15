
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CustomButton } from '@/components/ui/CustomButton';
import { Filter, Search, ChevronDown } from 'lucide-react';

// Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  subCategory: string;
  price: number;
  image: string;
}

// Sample product data
const productData: Product[] = [
  {
    id: 1,
    name: "HO Scale Steam Locomotive",
    description: "Detailed HO scale steam locomotive with authentic sounds and lighting.",
    category: "Model Trains",
    subCategory: "HO Scale",
    price: 189.99,
    image: "/product-train-1.jpg"
  },
  {
    id: 2,
    name: "Wooden Train Set",
    description: "Expandable wooden train set compatible with all major wooden railway systems.",
    category: "Wooden Toys",
    subCategory: "Train Sets",
    price: 49.99,
    image: "/product-train-2.jpg"
  },
  {
    id: 3,
    name: "Building Blocks Set",
    description: "Creative building blocks set with 500+ pieces for endless construction possibilities.",
    category: "Building Toys",
    subCategory: "Blocks",
    price: 34.99,
    image: "/product-building-1.jpg"
  },
  {
    id: 4,
    name: "1000 Piece Puzzle",
    description: "Challenging 1000 piece puzzle featuring a vintage train scene.",
    category: "Puzzles",
    subCategory: "Jigsaw Puzzles",
    price: 19.99,
    image: "/product-puzzle-1.jpg"
  },
  {
    id: 5,
    name: "Die-Cast Vintage Car",
    description: "Collectible die-cast vintage car with opening doors and detailed interior.",
    category: "Die-Cast Cars",
    subCategory: "Vintage",
    price: 24.99,
    image: "/product-car-1.jpg"
  },
  {
    id: 6,
    name: "O Scale Train Set",
    description: "Complete O scale train set with locomotive, cars, and track.",
    category: "Model Trains",
    subCategory: "O Scale",
    price: 299.99,
    image: "/product-train-3.jpg"
  },
  // Add more products as needed
];

// Product card component
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-wood/20">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-train-red/90 text-white text-xs font-medium px-2 py-1 rounded">
          {product.subCategory}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-train-black truncate">{product.name}</h3>
        <p className="text-train-black/70 text-sm line-clamp-2 h-10 mb-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-train-black font-bold">${product.price.toFixed(2)}</span>
          <CustomButton variant="primary" size="sm">
            View Details
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>(productData);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Model Trains", "Building Toys", "Wooden Toys", "Puzzles", "Die-Cast Cars"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterByCategory = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setProducts(productData);
    } else {
      setProducts(productData.filter(product => product.category === category));
    }
  };

  return (
    <>
      <Helmet>
        <title>Shop - Berwyn's Toys & Trains</title>
        <meta
          name="description"
          content="Browse our collection of model trains, toys, puzzles, and hobby supplies at Berwyn's Toys & Trains."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen overflow-hidden bg-cream">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative bg-train-blue/10">
            <div className="absolute inset-0 bg-paper-texture opacity-20 z-0"></div>
            <div className="container-padding max-w-7xl mx-auto relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-wood/20 text-train-blue rounded-full">
                  Our Products
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-train-black">
                  Shop Our Collection
                </h1>
                <p className="text-lg mb-6 text-train-black/80">
                  Discover quality model trains, classic toys, and hobby supplies
                </p>
                
                {/* Search bar */}
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-train-black/40" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="block w-full pl-10 pr-3 py-2 border border-wood rounded-md bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-train-blue focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-10 relative">
            <div className="container-padding max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="lg:w-1/4">
                  <div className="bg-white rounded-lg shadow-md border border-wood/20 p-5 sticky top-24">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-train-black">Categories</h3>
                      <Filter className="h-5 w-5 text-train-black/60" />
                    </div>
                    
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => filterByCategory(category)}
                          className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                            activeCategory === category 
                              ? "bg-train-blue/10 text-train-blue font-medium" 
                              : "text-train-black hover:bg-wood/10"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-wood/20">
                      <h3 className="text-lg font-bold text-train-black mb-4">Price Range</h3>
                      <div className="flex items-center justify-between gap-4">
                        <input
                          type="number"
                          placeholder="Min"
                          className="block w-full px-3 py-2 border border-wood rounded-md"
                          min="0"
                        />
                        <span className="text-train-black/60">-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          className="block w-full px-3 py-2 border border-wood rounded-md"
                          min="0"
                        />
                      </div>
                      <CustomButton variant="secondary" size="sm" fullWidth className="mt-3">
                        Apply
                      </CustomButton>
                    </div>
                  </div>
                </div>
                
                {/* Products Grid */}
                <div className="lg:w-3/4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-train-black">
                      {activeCategory === "All" ? "All Products" : activeCategory}
                      <span className="text-sm font-normal text-train-black/60 ml-2">
                        ({products.length} products)
                      </span>
                    </h2>
                    
                    <div className="flex items-center">
                      <span className="text-sm text-train-black/60 mr-2">Sort by:</span>
                      <button className="flex items-center bg-white px-3 py-1.5 rounded border border-wood/30 text-sm">
                        Featured
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  
                  {/* Pagination */}
                  <div className="mt-10 flex justify-center">
                    <div className="flex space-x-1">
                      <button className="px-4 py-2 border border-wood/30 rounded-md text-train-black/60 bg-white hover:bg-wood/10 transition-colors">
                        Previous
                      </button>
                      <button className="px-4 py-2 border border-wood/30 rounded-md bg-train-blue text-white">
                        1
                      </button>
                      <button className="px-4 py-2 border border-wood/30 rounded-md text-train-black bg-white hover:bg-wood/10 transition-colors">
                        2
                      </button>
                      <button className="px-4 py-2 border border-wood/30 rounded-md text-train-black bg-white hover:bg-wood/10 transition-colors">
                        3
                      </button>
                      <button className="px-4 py-2 border border-wood/30 rounded-md text-train-black/60 bg-white hover:bg-wood/10 transition-colors">
                        Next
                      </button>
                    </div>
                  </div>
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

export default Shop;
