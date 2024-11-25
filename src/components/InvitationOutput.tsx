import React, { useEffect, useRef } from 'react';
import { Download, Share2, MapPin, Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import toast from 'react-hot-toast';

interface InvitationOutputProps {
  output: {
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
  };
  onClose: () => void;
}

export default function InvitationOutput({ output, onClose }: InvitationOutputProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Audio playback failed:', error);
      });
    }
  }, []);

  const handleShare = async () => {
    if (navigator.share && navigator.canShare) {
      try {
        await navigator.share({
          title: 'Event Invitation',
          text: output.output,
          url: window.location.href
        });
        toast.success('Invitation shared successfully!');
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          handleCopyToClipboard();
        }
      }
    } else {
      handleCopyToClipboard();
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${output.output}\n\nView location: https://www.google.com/maps?q=${
          output["1f4b5b22-0469-4d68-9250-ea81f8c0be03"].latitude
        },${output["1f4b5b22-0469-4d68-9250-ea81f8c0be03"].longitude}`
      );
      toast.success('Invitation details copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy invitation details');
    }
  };

  const handleViewLocation = () => {
    const { latitude, longitude } = output["1f4b5b22-0469-4d68-9250-ea81f8c0be03"];
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
  };

  const handleDownload = () => {
    try {
      window.print();
      toast.success('Downloading invitation...');
    } catch (error) {
      toast.error('Failed to download invitation');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="p-8 space-y-8">
          {/* Background Music */}
          <div className="glass-card p-4">
            <p className="font-cinzel text-sm text-gray-600 mb-2 uppercase tracking-wider">Background Music</p>
            <audio
              ref={audioRef}
              src={output.output_1732498863574.output}
              controls
              className="w-full"
            />
          </div>

          {/* Invitation Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-20"></div>
            <img
              src={output["19f72370-d1ab-4b25-832f-cfeccedcadec"]}
              alt="Invitation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Invitation Text */}
          <div className="glass-card p-8">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="invitation-title mb-8">{children}</h1>,
                h2: ({ children }) => <h2 className="invitation-heading mb-6">{children}</h2>,
                p: ({ children }) => <p className="invitation-body mb-4">{children}</p>,
                strong: ({ children }) => (
                  <strong className="font-alex text-3xl gradient-text elegant-shadow">
                    {children}
                  </strong>
                ),
              }}
              className="whitespace-pre-wrap text-center"
            >
              {output.output}
            </ReactMarkdown>
          </div>

          {/* Location Button */}
          <button
            onClick={handleViewLocation}
            className="w-full glass-card py-3 px-6 font-cinzel text-gray-800 hover:bg-white hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MapPin className="h-5 w-5" />
            <span>View Location on Map</span>
          </button>

          {/* Action Buttons */}
          <div className="flex justify-between pt-6 border-t border-white border-opacity-20">
            <button
              onClick={onClose}
              className="font-cinzel px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Close
            </button>
            <div className="flex space-x-4">
              <button
                onClick={handleShare}
                className="glass-card px-6 py-2 font-cinzel text-gray-800 hover:bg-white hover:bg-opacity-30 transition-all duration-300 flex items-center space-x-2"
              >
                {navigator.share && navigator.canShare ? (
                  <>
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                className="glass-card px-6 py-2 font-cinzel bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}