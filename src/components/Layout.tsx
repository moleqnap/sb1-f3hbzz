import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Car, Users, Clipboard, Package, DollarSign, BarChart3, LogOut } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Customers', path: '/customers' },
    { icon: Car, label: 'Vehicles', path: '/vehicles' },
    { icon: Clipboard, label: 'Work Orders', path: '/work-orders' },
    { icon: DollarSign, label: 'Finance', path: '/finance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white border-r border-gray-200 w-64`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">AutoService Pro</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 group ${
                location.pathname === item.path ? 'bg-blue-50 text-blue-700' : ''
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          <hr className="my-4" />
          <button className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      <div className={`p-4 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="p-4 bg-white rounded-lg shadow-sm min-h-[calc(100vh-2rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;