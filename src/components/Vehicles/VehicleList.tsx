import React from 'react';
import { Search, Plus, Car, Tool, Calendar } from 'lucide-react';
import type { Vehicle } from '../../types';

const VehicleList: React.FC = () => {
  const vehicles: Vehicle[] = [
    {
      id: 'v1',
      vin: '1HGCM82633A123456',
      licensePlate: 'ABC123',
      make: 'Honda',
      model: 'Accord',
      year: 2020,
      customerId: '1',
      status: 'in-service'
    },
    {
      id: 'v2',
      vin: '2FMDK48C87BB54789',
      licensePlate: 'XYZ789',
      make: 'Ford',
      model: 'Explorer',
      year: 2019,
      customerId: '2',
      status: 'ready'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-service':
        return 'bg-blue-50 text-blue-700';
      case 'ready':
        return 'bg-green-50 text-green-700';
      case 'delivered':
        return 'bg-gray-50 text-gray-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Vehicles</h1>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by VIN, plate, or model..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Makes</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            <option value="toyota">Toyota</option>
          </select>
          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Statuses</option>
            <option value="in-service">In Service</option>
            <option value="ready">Ready</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <Car className="w-6 h-6 text-gray-400" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="text-sm text-gray-500">{vehicle.licensePlate}</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(vehicle.status)}`}>
                {vehicle.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Tool className="w-4 h-4 mr-2" />
                Last Service: Oil Change
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                Next Service Due: 2 weeks
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View Details
              </button>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-700">
                Create Work Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;