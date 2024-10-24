import React from 'react';
import { ArrowLeft, Car, Calendar, Tool, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import type { Vehicle, WorkOrder } from '../../types';

interface VehicleDetailsProps {
  vehicle: Vehicle;
  onBack: () => void;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicle, onBack }) => {
  const serviceHistory: WorkOrder[] = [
    {
      id: 'wo1',
      vehicleId: vehicle.id,
      customerId: vehicle.customerId,
      status: 'completed',
      services: [
        {
          id: 's1',
          name: 'Oil Change',
          description: 'Full synthetic oil change',
          cost: 89.99,
          estimatedTime: 60
        }
      ],
      notes: 'Regular maintenance',
      createdAt: new Date('2024-02-15'),
      updatedAt: new Date('2024-02-15')
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Vehicle Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Car className="w-8 h-8 text-gray-400" />
                <div>
                  <h2 className="text-xl font-semibold">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h2>
                  <p className="text-gray-600">VIN: {vehicle.vin}</p>
                </div>
              </div>
              <span className="px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-full">
                {vehicle.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">License Plate</p>
                <p className="text-lg font-semibold">{vehicle.licensePlate}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Last Service</p>
                <p className="text-lg font-semibold">Feb 15, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Service History</h3>
            <div className="space-y-4">
              {serviceHistory.map((service) => (
                <div key={service.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium">{service.services[0].name}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {service.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{service.services[0].description}</p>
                  <p className="text-sm text-gray-500 mt-2">Cost: ${service.services[0].cost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Maintenance Schedule</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-yellow-600">
                <AlertCircle className="w-5 h-5" />
                <div>
                  <p className="font-medium">Oil Change Due</p>
                  <p className="text-sm text-gray-600">In 2 weeks</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="font-medium">Tire Rotation</p>
                  <p className="text-sm text-gray-600">In 2 months</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Create Work Order
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                Update Information
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                View Service History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;