export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  vehicles: Vehicle[];
  createdAt: Date;
}

export interface Vehicle {
  id: string;
  vin: string;
  licensePlate: string;
  make: string;
  model: string;
  year: number;
  customerId: string;
  status: 'in-service' | 'ready' | 'delivered';
}

export interface WorkOrder {
  id: string;
  vehicleId: string;
  customerId: string;
  status: 'pending' | 'in-progress' | 'completed';
  services: Service[];
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  cost: number;
  estimatedTime: number;
}

export type DashboardStats = {
  activeWorkOrders: number;
  vehiclesInService: number;
  completedToday: number;
  pendingDeliveries: number;
  revenue: {
    daily: number;
    weekly: number;
    monthly: number;
  };
};