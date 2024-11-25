import React from 'react';
import { Heart, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const services = [
    {
      title: 'Wedding Walls',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTV6EVv7p2t6FZ-XFK7KCd5Oau-Oz07HpxTW801ojXCjfq5lzz8Q-h92FllVyyjqDLBYKVMKUvzwYSVwVrzHdy8AyFrmBJVE9yLCTPMw-o&usqp=CAE',
      description: 'Beautiful backdrop designs for your special day',
      link: 'https://www.amazon.in/Lazybeee-Backdrop-Decoration-Anniversary-Valentines/dp/B0DCTZ62XR?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2V17PZIMHTXAY'
    },
    {
      title: 'Metal Circles & Flowers',
      image: 'https://rukminim2.flixcart.com/image/850/1000/kxf0jgw0/art-craft-kit/u/1/j/2-macrame-metal-circle-garland-rings-for-wedding-garlands-original-imag9vw3sxtxf94r.jpeg?q=90&crop=false',
      description: 'Elegant floral arrangements and decorative elements',
      link: 'https://www.flipkart.com/zazza-home-decor-macrame-metal-circle-garland-rings-wedding-garlands-decorations-4-pieces-gold-30-cms/p/itm294d29b1c4e12'
    },
    {
      title: 'Catering Services',
      image: 'https://cdn.togetherv.com/Untitled%2520design%2520%25283%2529_1601914982.webp',
      description: 'Exquisite dining experiences for your guests',
      link: 'https://www.togetherv.com/delhi-ncr/house-party/delhi-ncr-empress-delhi-catering-service-veg?srsltid=AfmBOoqcQ-hAy_-pqq-P9ONAQg0b88tpZzsPBNQ1e-GE_CE6KAxICeTziOo'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600"
          >
            <source src="https://cdn.pixabay.com/video/2021/09/08/87806-601467089_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <h1 className="font-frutilla text-7xl md:text-8xl lg:text-9xl text-white elegant-shadow">
                Perfect Weddings Made Easy!
              </h1>
              <p className="text-xl text-white/90 font-cormorant">
                Create beautiful invitations and manage your special day with elegance and ease
              </p>
            </div>
            <Link
              to="/create"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-gray-900 font-medium hover:bg-opacity-90 transition-opacity"
            >
              Create Invitations
              <Heart className="ml-2 h-5 w-5 text-pink-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* About Section with Second Video */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1511795409834-432f7b1728b2?auto=format&fit=crop&q=80&w=1600"
          >
            <source src="https://cdn.pixabay.com/video/2023/11/13/189020-884234925_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="invitation-heading">
                What We do, We do With Passion
              </h2>
              <p className="invitation-body text-gray-700">
                We bring your dream wedding to life with meticulous attention to detail and a passion for creating unforgettable moments.
              </p>
              <Link
                to="/create"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition-colors"
              >
                Learn More
                <Sparkles className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="glass-card p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-cinzel text-xl text-gray-900">Easy Planning</h3>
                    <p className="text-gray-600">Streamlined process for creating beautiful events</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Heart className="h-8 w-8 text-pink-600" />
                  <div>
                    <h3 className="font-cinzel text-xl text-gray-900">Personalized Touch</h3>
                    <p className="text-gray-600">Custom designs that reflect your style</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="font-cinzel text-xl text-gray-900">Magical Moments</h3>
                    <p className="text-gray-600">Creating memories that last forever</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="invitation-heading mb-4">
              Includes Various Product Categories
            </h2>
            <p className="invitation-body text-gray-600">
              Everything you need to make your wedding day perfect
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-cinzel text-xl text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="font-cormorant text-gray-600">{service.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}