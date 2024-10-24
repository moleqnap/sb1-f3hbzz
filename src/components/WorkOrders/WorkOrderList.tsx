import React from 'react';
import { Search, Plus, Filter, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import type { WorkOrder } from '../../types';

const WorkOrderList: React.FC = () => {
  const workOrders: WorkOrder[] = [
    {
      id: 'wo1',
      vehicleId: 'v1',
      customerId: '1',
      status: 'in-progress',
      services: [
        {
          id: 's1',
          name: 'Oil Change',
          description: 'Full synthetic oil change',
          cost: 89.99,
          estimatedTime: 60
        },
        {
          id: 's2',
          name: 'Brake Inspection',
          description: 'Complete brake system inspection',
          cost: 49.99,
          estimatedTime: 30
        }
      ],
      notes: 'Customer reported squeaking noise during braking',
      createdAt: new Date('2024-03-10'),
      updatedAt: new Date('2024-03-10')
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 text-green-700';
      case 'in-progress':
        return 'bg-blue-50 text-blue-700';
      default:
        return 'bg-yellow-50 text-yellow-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Work Orders</h1>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Work Order
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search work orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button className="px-3 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {workOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(order.status)}
                <div>
                  <h3 className="font-medium text-gray-900">Work Order #{order.id}</h3>
                  <p className="text-sm text-gray-500">
                    Created {order.createdAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Services</h4>
                <div className="space-y-2">
                  {order.services.map((service) => (
                    <div key={service.id} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{service.name}</span>
                      <span className="text-sm font-medium">${service.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Notes</h4>
                <p className="text-sm text-gray-600">{order.notes}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View Details
              </button>
              <button className="text-sm font-medium text-gray-600 hover:text-gray-700">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkOrderList;