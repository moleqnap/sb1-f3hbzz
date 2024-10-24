import React from 'react';
import { Search, Plus, Phone, Mail, Car } from 'lucide-react';
import type { Customer } from '../../types';

const CustomerList: React.FC = () => {
  const customers: Customer[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      address: '123 Main St, Anytown, USA',
      vehicles: [
        {
          id: 'v1',
          vin: '1HGCM82633A123456',
          licensePlate: 'ABC123',
          make: 'Honda',
          model: 'Accord',
          year: 2020,
          customerId: '1',
          status: 'in-service'
        }
      ],
      createdAt: new Date('2023-01-15')
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '(555) 987-6543',
      address: '456 Oak Ave, Somewhere, USA',
      vehicles: [
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
      ],
      createdAt: new Date('2023-02-20')
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm divide-y">
        {customers.map((customer) => (
          <div key={customer.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{customer.name}</h3>
                <div className="mt-1 space-y-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="w-4 h-4 mr-2" />
                    {customer.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="w-4 h-4 mr-2" />
                    {customer.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Car className="w-4 h-4 mr-2" />
                    {customer.vehicles.length} vehicle(s)
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  View Details
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;