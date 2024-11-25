import React from 'react';
import { Heart, Calendar, Sparkles, Music, Camera, Utensils } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Comprehensive wedding planning services from concept to execution',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600',
    },
    {
      icon: Calendar,
      title: 'Event Coordination',
      description: 'Day-of coordination and timeline management',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1600',
    },
    {
      icon: Sparkles,
      title: 'Decor & Design',
      description: 'Custom event design and decor services',
      image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&q=80&w=1600',
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Live music, DJs, and entertainment booking',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600',
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography and videography services',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1600',
    },
    {
      icon: Utensils,
      title: 'Catering',
      description: 'Gourmet catering and beverage services',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.pixabay.com/video/2023/11/13/189020-884234925_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="invitation-title text-white mb-6">Our Services</h1>
          <p className="invitation-body text-white/90 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive event services tailored to your unique vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card group hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <service.icon className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="font-cinzel text-2xl text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="font-cormorant text-gray-600 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-alex text-white mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="font-cormorant text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to start planning your special day.
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-cinzel hover:bg-opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}