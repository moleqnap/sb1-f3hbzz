import React from 'react';
import { ArrowLeft, Car, MapPin, Phone, Mail, Plus, History } from 'lucide-react';
import type { Customer, Vehicle } from '../../types';

interface CustomerDetailsProps {
  customer: Customer;
  onBack: () => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, onBack }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Customer Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">{customer.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">{customer.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Vehicles</h2>
              <button className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                <Plus className="w-4 h-4 mr-1" />
                Add Vehicle
              </button>
            </div>
            <div className="space-y-4">
              {customer.vehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <Car className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </p>
                      <p className="text-sm text-gray-600">
                        VIN: {vehicle.vin} • Plate: {vehicle.licensePlate}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    {vehicle.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <History className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-sm font-medium">Oil Change Completed</p>
              <p className="text-xs text-gray-500">2 days ago</p>
            </div>
            <div className="border-l-2 border-green-500 pl-4">
              <p className="text-sm font-medium">Vehicle Check-in</p>
              <p className="text-xs text-gray-500">1 week ago</p>
            </div>
            <div className="border-l-2 border-gray-500 pl-4">
              <p className="text-sm font-medium">Brake Inspection</p>
              <p className="text-xs text-gray-500">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;