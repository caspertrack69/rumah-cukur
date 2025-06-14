import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Classic Fade',
      image: 'https://placehold.co/400x300/1a1a1a/d4af37?text=Classic+Fade',
      category: 'Haircut'
    },
    {
      id: 2,
      title: 'Beard Styling',
      image: 'https://placehold.co/400x300/1a1a1a/d4af37?text=Beard+Styling',
      category: 'Grooming'
    },
    {
      id: 3,
      title: 'Modern Pompadour',
      image: 'https://placehold.co/400x300/1a1a1a/d4af37?text=Modern+Pompadour',
      category: 'Styling'
    },
    {
      id: 4,
      title: 'Traditional Cut',
      image: 'https://placehold.co/400x300/1a1a1a/d4af37?text=Traditional+Cut',
      category: 'Haircut'
    },
    {
      id: 5,
      title: 'Mustache Trim',
      image: 'https://placehold.co/400x300/1a1a1a/d4af37?text=Mustache+Trim',
      category: 'Grooming'
    },
    {
      id: 6,
      title: 'Undercut Style',
      image: 'https://placehold.co/400x300/1a1a1a/d4af37?text=Undercut+Style',
      category: 'Styling'
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Galeri Karya Kami
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lihat hasil kerja profesional dari tim barbershop kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-dark-900 border border-dark-700 hover:border-primary-300/50 transition-all duration-300 hover:transform hover:scale-105 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <span className="text-primary-300 text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                    <ExternalLink className="h-5 w-5 text-primary-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;