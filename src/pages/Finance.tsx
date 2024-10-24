import React from 'react';
import { DollarSign, TrendingUp, CreditCard, BarChart2 } from 'lucide-react';
import StatCard from '../components/Dashboard/StatCard';

const Finance: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Finance</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Export Report
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$64,500"
          icon={DollarSign}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Monthly Growth"
          value="15%"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Pending Payments"
          value="$3,250"
          icon={CreditCard}
          trend={{ value: 2, isPositive: false }}
        />
        <StatCard
          title="Average Order Value"
          value="$285"
          icon={BarChart2}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Service Revenue</p>
                <p className="text-sm text-gray-600">From repairs and maintenance</p>
              </div>
              <p className="text-lg font-semibold text-gray-900">$45,200</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Parts Sales</p>
                <p className="text-sm text-gray-600">From replacement parts</p>
              </div>
              <p className="text-lg font-semibold text-gray-900">$15,800</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Diagnostics</p>
                <p className="text-sm text-gray-600">From inspection fees</p>
              </div>
              <p className="text-lg font-semibold text-gray-900">$3,500</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Invoice #00{i}</p>
                  <p className="text-sm text-gray-600">Oil Change + Brake Service</p>
                  <p className="text-sm text-gray-500">March {i + 9}, 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-900">$289.99</p>
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full">
                    Paid
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;