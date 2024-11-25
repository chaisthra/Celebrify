import React from 'react';
import { Heart, Users, Calendar, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Heart, label: 'Events Organized', value: '1000+' },
    { icon: Users, label: 'Happy Couples', value: '500+' },
    { icon: Calendar, label: 'Years Experience', value: '10+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="invitation-title mb-6">Our Story</h1>
            <p className="invitation-body text-gray-600 max-w-3xl mx-auto">
              At Celebrify, we believe that every celebration deserves to be extraordinary. Our journey began with a simple vision: to make event planning and invitation creation seamless, elegant, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                <div className="font-cinzel text-3xl text-gray-900 mb-2">{stat.value}</div>
                <div className="font-cormorant text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="invitation-heading mb-4">Meet Our Team</h2>
            <p className="invitation-body text-gray-600">
              Dedicated to bringing innovation and excellence to event management
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card overflow-hidden group">
              <div className="relative h-96">
                <img
                  src="https://i1.rgstatic.net/ii/profile.image/11431281098351596-1668890778316_Q512/Chaithra-n.jpg"
                  alt="Chaithra N"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="font-cinzel text-2xl text-gray-900 mb-2">Chaithra N</h3>
                <p className="font-cormorant text-xl text-purple-600 mb-4">Founder & Technical Lead</p>
                <p className="font-cormorant text-gray-600 leading-relaxed">
                  A passionate B.Tech student specializing in Artificial Intelligence and Machine Learning at Jain (Deemed-to-be University), Bangalore. Bringing technical expertise and innovation to revolutionize the way we plan and celebrate special moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}