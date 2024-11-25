import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart, Users } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

export default function Navbar() {
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  // Don't show navbar on login page
  if (isLoginPage) return null;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Celebrify
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="/gallery" className="text-gray-600 hover:text-gray-900">Gallery</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <SignedIn>
              <Link to="/guests" className="text-gray-600 hover:text-gray-900">
                <div className="flex items-center space-x-1">
                  <Users className="h-5 w-5" />
                  <span>Guests</span>
                </div>
              </Link>
              <Link
                to="/create"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Create Invitation
              </Link>
              <UserButton
                afterSignOutUrl="/login"
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <Link
                to="/login"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Sign In
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}