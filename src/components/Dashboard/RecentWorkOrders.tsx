import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

const RecentWorkOrders: React.FC = () => {
  const workOrders = [
    {
      id: 'WO-001',
      customer: 'John Smith',
      vehicle: '2019 Toyota Camry',
      service: 'Oil Change + Brake Inspection',
      status: 'in-progress',
      timeLeft: '2 hours',
    },
    {
      id: 'WO-002',
      customer: 'Sarah Johnson',
      vehicle: '2020 Honda CR-V',
      service: 'Tire Rotation',
      status: 'completed',
      timeLeft: null,
    },
    {
      id: 'WO-003',
      customer: 'Mike Wilson',
      vehicle: '2018 Ford F-150',
      service: 'Engine Diagnostic',
      status: 'pending',
      timeLeft: '4 hours',
    },
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

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Work Orders</h2>
      <div className="space-y-4">
        {workOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              {getStatusIcon(order.status)}
              <div>
                <p className="font-medium">{order.customer}</p>
                <p className="text-sm text-gray-600">{order.vehicle}</p>
                <p className="text-sm text-gray-500">{order.service}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{order.id}</p>
              {order.timeLeft && (
                <p className="text-sm text-gray-500">Est. {order.timeLeft}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Work Orders →
      </button>
    </div>
  );
};

export default RecentWorkOrders;