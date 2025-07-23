import React from 'react';
import { Star } from 'lucide-react';

const BillingSettingsPage: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Billing & Membership</h2>

      {/* Current Plan */}
      <div className="bg-gray-700/50 p-6 rounded-2xl mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Your Plan</h3>
        <div className="flex items-center justify-between">
            <div>
                <div className="flex items-center gap-2">
                    <Star className="text-yellow-400" />
                    <p className="text-xl font-bold">SHYN Member</p>
                </div>
                <p className="text-gray-400">Renews on July 23, 2026</p>
            </div>
            <button className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800">Manage Plan</button>
        </div>
      </div>
      
      {/* Payment History */}
       <div>
        <h3 className="text-lg font-semibold text-white mb-4">Payment History</h3>
        <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                <p>July 23, 2025 - Annual Membership</p>
                <p className="font-semibold">₹500.00</p>
            </div>
             <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
                <p>May 10, 2025 - Workshop Fee</p>
                <p className="font-semibold">₹150.00</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSettingsPage;