import React, { useState, useRef } from 'react';
import { UserPlus, Upload, Download, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface Guest {
  id: string;
  email: string;
}

export default function GuestList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newEmail, setNewEmail] = useState('');

  const handleAddGuest = () => {
    if (!newEmail) return;
    
    const guest: Guest = {
      id: Date.now().toString(),
      email: newEmail,
    };
    setGuests([...guests, guest]);
    setNewEmail('');
    setShowAddForm(false);
    toast.success('Guest email added successfully!');
  };

  const handleRemoveGuest = (id: string) => {
    setGuests(guests.filter(guest => guest.id !== id));
    toast.success('Guest email removed successfully!');
  };

  const handleCSVUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const rows = text.split('\n').filter(row => row.trim());
        
        const newGuests: Guest[] = rows.slice(1).map(email => ({
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          email: email.trim(),
        }));

        setGuests([...guests, ...newGuests]);
        toast.success('Guest emails imported successfully!');
      };
      reader.readAsText(file);
    }
  };

  const downloadCSVTemplate = () => {
    const headers = ['Email'];
    const csvContent = `data:text/csv;charset=utf-8,${headers.join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'guest_emails_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Guest List</h2>
          <div className="flex space-x-4">
            <button
              onClick={downloadCSVTemplate}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Template
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Upload className="h-5 w-5 mr-2" />
              Import CSV
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleCSVUpload}
              accept=".csv"
              className="hidden"
            />
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Add Guest
            </button>
          </div>
        </div>

        {showAddForm && (
          <div className="mb-8 p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Add Guest Email</h3>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Email address"
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddGuest}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
              >
                Add
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {guests.map(guest => (
                <tr key={guest.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{guest.email}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleRemoveGuest(guest.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {guests.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No guest emails added yet. Add emails individually or import from a CSV file.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}