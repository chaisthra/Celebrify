import React, { useState, useEffect } from 'react';
import { SignIn, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Heart, Calendar, Users, Sparkles } from 'lucide-react';

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/', { replace: true });
    }

    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSignedIn, navigate]);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const features = [
    {
      icon: Heart,
      title: 'Beautiful Invitations',
      description: 'Create stunning digital invitations with ease'
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Organize and track all your event details'
    },
    {
      icon: Users,
      title: 'Guest List',
      description: 'Manage RSVPs and guest communications'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Smart features to enhance your event planning'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={handleVideoError}
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600"
          >
            <source 
              src="https://cdn.pixabay.com/video/2023/09/29/182810-869773948_large.mp4" 
              type="video/mp4" 
            />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600"
            alt="Wedding Background"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {!showLogin ? (
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
            <div className="space-y-6">
              <h1 className="invitation-title text-white">
                Welcome to Celebrify
              </h1>
              <p className="invitation-body text-white/90 text-xl max-w-2xl mx-auto">
                Your all-in-one platform for creating magical events and unforgettable moments. 
                Powered by AI, designed for elegance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center text-white hover:bg-white/10 transition-colors"
                >
                  <feature.icon className="h-8 w-8 mx-auto mb-4 text-pink-400" />
                  <h3 className="font-cinzel text-lg mb-2">{feature.title}</h3>
                  <p className="font-cormorant text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowLogin(true)}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-cinzel hover:bg-opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="glass-card p-8 max-w-md w-full animate-fade-in">
            <SignIn 
              routing="path"
              path="/sign-in"
              signUpUrl="/sign-up"
              redirectUrl="/"
              appearance={{
                elements: {
                  formButtonPrimary: 
                    'bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'font-cinzel text-white',
                  headerSubtitle: 'font-cormorant text-white/90',
                  formFieldLabel: 'text-white',
                  formFieldInput: 'bg-white/10 border-white/20 text-white',
                  footerActionLink: 'text-white hover:text-pink-400',
                  identityPreviewText: 'text-white',
                  socialButtonsBlockButton: 
                    'bg-white/10 border-white/20 text-white hover:bg-white/20',
                  socialButtonsBlockButtonText: 'text-white',
                  dividerLine: 'bg-white/20',
                  dividerText: 'text-white/60',
                },
                layout: {
                  socialButtonsPlacement: "bottom",
                  showOptionalFields: false
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}