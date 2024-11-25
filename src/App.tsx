import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CreateInvitation from './components/CreateInvitation';
import GuestList from './components/GuestList';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ClerkProvider 
      publishableKey={clerkPubKey}
      navigate={(to) => window.location.href = to}
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Toaster position="top-right" />
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in/*" element={<Login />} />
          <Route path="/sign-up/*" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/create"
            element={
              <>
                <SignedIn>
                  <CreateInvitation />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/guests"
            element={
              <>
                <SignedIn>
                  <GuestList />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />

          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        <Footer />
      </div>
    </ClerkProvider>
  );
}