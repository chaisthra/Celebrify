import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Send, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import InvitationOutput from './InvitationOutput';

interface FormData {
  eventType: string;
  hostNames: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  rsvpDeadline: string;
  customMessage: string;
  guestList: string;
}

interface InvitationOutput {
  output: string;
  output_1732498863574: { output: string };
  "19f72370-d1ab-4b25-832f-cfeccedcadec": string;
  "1f4b5b22-0469-4d68-9250-ea81f8c0be03": {
    latitude: number;
    longitude: number;
  };
  "5817d4b1-0134-4a52-96d9-7ff0b391b32b": {
    id: string;
    threadId: string;
    labelIds: string[];
  };
}

// Mock API response for testing
const mockApiResponse = (formData: any): InvitationOutput => ({
  output: `Front of the Invitation:\n\nTogether with their families\n\n**${formData.hostNames}**\n\nrequest the honour of your presence at their ${formData.eventType}\n\n\nBack of the Invitation:\n\n**Date:** ${formData.eventDate}\n\n**Time:** ${formData.eventTime}\n\n**Venue:** ${formData.venue}\n\n\nReception to follow\n\n\nKindly RSVP by ${formData.rsvpDeadline}\n\n\n${formData.customMessage}`,
  output_1732498863574: {
    output: "https://replicate.delivery/yhqm/wtnHXFrV2mZpJ5ix6pky02hc7eWN8tDhCFM5W3E2ew7YlY0TA/out.wav"
  },
  "19f72370-d1ab-4b25-832f-cfeccedcadec": "https://replicate.delivery/czjl/Bp2KtYSGOx5cGRijBFIKCz4DJ3bREGLYXzzMhPgQG4TLJG9E/tmpoxy_fc0m.png",
  "1f4b5b22-0469-4d68-9250-ea81f8c0be03": {
    latitude: 42.088313,
    longitude: -72.57835589999999
  },
  "5817d4b1-0134-4a52-96d9-7ff0b391b32b": {
    id: "1936101365e7c6a7",
    threadId: "1936101365e7c6a7",
    labelIds: ["SENT"]
  }
});

export default function CreateInvitation() {
  const [formData, setFormData] = useState<FormData>({
    eventType: '',
    hostNames: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    rsvpDeadline: '',
    customMessage: '',
    guestList: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invitationOutput, setInvitationOutput] = useState<InvitationOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate guest emails
      const emails = formData.guestList.split(',').map(email => email.trim());
      const validEmails = emails.every(email => 
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      );

      if (!validEmails) {
        toast.error('Please enter valid email addresses separated by commas');
        return;
      }

      const jsonData = {
        ...formData,
        guestList: emails,
      };

      // For testing: Use mock API response instead of actual API call
      const result = mockApiResponse(jsonData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Invitation created successfully!');
      setInvitationOutput(result);
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to send invitation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Create Your Invitation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate Event</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Host Names
              </label>
              <input
                type="text"
                name="hostNames"
                value={formData.hostNames}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter host names"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Event Date</span>
                </div>
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Event Time</span>
                </div>
              </label>
              <input
                type="time"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Venue</span>
                </div>
              </label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter venue details"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                RSVP Deadline
              </label>
              <input
                type="date"
                name="rsvpDeadline"
                value={formData.rsvpDeadline}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Guest List</span>
              </div>
            </label>
            <input
              type="text"
              name="guestList"
              value={formData.guestList}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter guest emails separated by commas"
              required
            />
            <p className="mt-1 text-sm text-gray-500">
              Example: john@example.com, jane@example.com
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Message
            </label>
            <textarea
              name="customMessage"
              value={formData.customMessage}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your custom message for the invitation"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transition-opacity ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              <Send className="h-5 w-5 mr-2" />
              {isSubmitting ? 'Sending...' : 'Generate Invitation'}
            </button>
          </div>
        </form>
      </div>

      {invitationOutput && (
        <InvitationOutput
          output={invitationOutput}
          onClose={() => setInvitationOutput(null)}
        />
      )}
    </div>
  );
}