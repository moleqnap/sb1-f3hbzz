import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import type { WorkOrder, Service } from '../../types';

interface WorkOrderFormProps {
  workOrder?: WorkOrder;
  vehicleId?: string;
  customerId?: string;
  onSubmit: (data: Partial<WorkOrder>) => void;
  onCancel: () => void;
}

const WorkOrderForm: React.FC<WorkOrderFormProps> = ({
  workOrder,
  vehicleId,
  customerId,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = React.useState({
    vehicleId: workOrder?.vehicleId || vehicleId || '',
    customerId: workOrder?.customerId || customerId || '',
    services: workOrder?.services || [
      {
        id: crypto.randomUUID(),
        name: '',
        description: '',
        cost: 0,
        estimatedTime: 30,
      },
    ],
    notes: workOrder?.notes || '',
    status: workOrder?.status || 'pending',
  });

  const addService = () => {
    setFormData({
      ...formData,
      services: [
        ...formData.services,
        {
          id: crypto.randomUUID(),
          name: '',
          description: '',
          cost: 0,
          estimatedTime: 30,
        },
      ],
    });
  };

  const removeService = (id: string) => {
    setFormData({
      ...formData,
      services: formData.services.filter((service) => service.id !== id),
    });
  };

  const updateService = (id: string, field: keyof Service, value: string | number) => {
    setFormData({
      ...formData,
      services: formData.services.map((service) =>
        service.id === id ? { ...service, [field]: value } : service
      ),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl my-8">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">
            {workOrder ? 'Edit Work Order' : 'Create New Work Order'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">Services</h3>
            {formData.services.map((service, index) => (
              <div key={service.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Service {index + 1}</span>
                  {formData.services.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeService(service.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Name
                    </label>
                    <input
                      type="text"
                      value={service.name}
                      onChange={(e) => updateService(service.id, 'name', e.target.value)}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cost ($)
                    </label>
                    <input
                      type="number"
                      value={service.cost}
                      onChange={(e) => updateService(service.id, 'cost', parseFloat(e.target.value))}
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <input
                    type="text"
                    value={service.description}
                    onChange={(e) => updateService(service.id, 'description', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={service.estimatedTime}
                    onChange={(e) => updateService(service.id, 'estimatedTime', parseInt(e.target.value))}
                    min="0"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addService}
              className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Another Service
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as WorkOrder['status'] })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              {workOrder ? 'Update Work Order' : 'Create Work Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkOrderForm;