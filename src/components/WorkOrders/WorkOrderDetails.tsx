import React from 'react';
import { ArrowLeft, Clock, DollarSign, Car, User, Tool, CheckCircle, MessageSquare } from 'lucide-react';
import type { WorkOrder } from '../../types';

interface WorkOrderDetailsProps {
  workOrder: WorkOrder;
  onBack: () => void;
}

const WorkOrderDetails: React.FC<WorkOrderDetailsProps> = ({ workOrder, onBack }) => {
  const totalCost = workOrder.services.reduce((sum, service) => sum + service.cost, 0);
  const totalTime = workOrder.services.reduce((sum, service) => sum + service.estimatedTime, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Work Order Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Work Order #{workOrder.id}</h2>
                <p className="text-gray-600">Created {workOrder.createdAt.toLocaleDateString()}</p>
              </div>
              <span className={`px-4 py-2 text-sm font-medium rounded-full ${
                workOrder.status === 'completed' ? 'bg-green-50 text-green-700' :
                workOrder.status === 'in-progress' ? 'bg-blue-50 text-blue-700' :
                'bg-yellow-50 text-yellow-700'
              }`}>
                {workOrder.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">Estimated Time</span>
                </div>
                <p className="text-lg font-semibold">{totalTime} minutes</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">Total Cost</span>
                </div>
                <p className="text-lg font-semibold">${totalCost.toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Car className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Vehicle</p>
                  <p className="text-sm text-gray-600">2020 Honda Accord • ABC123</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Customer</p>
                  <p className="text-sm text-gray-600">John Smith • (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {workOrder.services.map((service) => (
                <div key={service.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Tool className="w-5 h-5 text-gray-400" />
                      <span className="font-medium">{service.name}</span>
                    </div>
                    <span className="text-sm font-medium">${service.cost}</span>
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Estimated time: {service.estimatedTime} minutes
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Status Updates</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Service Started</p>
                  <p className="text-xs text-gray-500">March 10, 2024 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Oil Change Completed</p>
                  <p className="text-xs text-gray-500">March 10, 2024 10:30 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Notes</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageSquare className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">{workOrder.notes}</p>
                  <p className="text-xs text-gray-500 mt-1">Added by Technician</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Add a note..."
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <button className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderDetails;