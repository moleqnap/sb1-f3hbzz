import React from 'react';
import { Car, Users, Wrench, Clock } from 'lucide-react';
import StatCard from '../components/Dashboard/StatCard';
import RecentWorkOrders from '../components/Dashboard/RecentWorkOrders';
import type { DashboardStats } from '../types';

const Dashboard: React.FC = () => {
  const stats: DashboardStats = {
    activeWorkOrders: 12,
    vehiclesInService: 8,
    completedToday: 15,
    pendingDeliveries: 4,
    revenue: {
      daily: 2450,
      weekly: 15780,
      monthly: 64500,
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            New Work Order
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Work Orders"
          value={stats.activeWorkOrders}
          icon={Wrench}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Vehicles In Service"
          value={stats.vehiclesInService}
          icon={Car}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Completed Today"
          value={stats.completedToday}
          icon={Clock}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Daily Revenue"
          value={`$${stats.revenue.daily.toLocaleString()}`}
          icon={Users}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentWorkOrders />
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Vehicle Status Overview</h2>
          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800&h=400"
            alt="Mechanic working on car"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-semibold text-blue-600">8</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm font-medium text-gray-600">Ready for Pickup</p>
              <p className="text-2xl font-semibold text-green-600">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;