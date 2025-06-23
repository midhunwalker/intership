import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, Users, DollarSign, Eye } from 'lucide-react';
import Card from '../components/ui/Card';

const Analytics = () => {
  const barData = [
    { name: 'Jan', users: 400, revenue: 2400 },
    { name: 'Feb', users: 300, revenue: 1398 },
    { name: 'Mar', users: 600, revenue: 9800 },
    { name: 'Apr', users: 800, revenue: 3908 },
    { name: 'May', users: 700, revenue: 4800 },
    { name: 'Jun', users: 900, revenue: 3800 },
  ];

  const lineData = [
    { name: 'Week 1', visitors: 1200 },
    { name: 'Week 2', visitors: 1900 },
    { name: 'Week 3', visitors: 1500 },
    { name: 'Week 4', visitors: 2100 },
    { name: 'Week 5', visitors: 1800 },
    { name: 'Week 6', visitors: 2400 },
  ];

  const pieData = [
    { name: 'Desktop', value: 60, color: '#3B82F6' },
    { name: 'Mobile', value: 30, color: '#10B981' },
    { name: 'Tablet', value: 10, color: '#F59E0B' },
  ];

  const metrics = [
    {
      title: 'Views',
      value: '847,392',
      change: '+12.5%',
      icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
    },
    {
      title: 'Visitors',
      value: '23,847',
      change: '+8.2%',
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
    },
    {
      title: 'Revenue',
      value: '$94,847',
      change: '+15.3%',
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
    },
    {
      title: 'Growth Rate',
      value: '18.4%',
      change: '+2.1%',
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
          Track your performance with detailed analytics and insights.
        </p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-3 sm:p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                    {metric.title}
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs sm:text-sm text-green-600 mt-1">
                    {metric.change}
                  </p>
                </div>
                <div className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-700 rounded-lg self-start sm:self-auto">
                  {metric.icon}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Bar Chart */}
        <Card title="Monthly Performance" subtitle="Users and Revenue comparison" className="p-4 sm:p-6">
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Bar dataKey="users" fill="#3B82F6" radius={4} />
                <Bar dataKey="revenue" fill="#10B981" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Line Chart */}
        <Card title="Website Traffic" subtitle="Visitors over time" className="p-4 sm:p-6">
          <div className="h-64 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#6B7280"
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Pie Chart and Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card title="Device Types" subtitle="Traffic by device" className="lg:col-span-1 p-4 sm:p-6">
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Top Pages" subtitle="Most visited pages" className="lg:col-span-2 p-4 sm:p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                    Page
                  </th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                    Views
                  </th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                    Unique
                  </th>
                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                    Bounce Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { page: '/dashboard', views: '12,847', unique: '8,472', bounce: '23%' },
                  { page: '/products', views: '9,234', unique: '6,891', bounce: '31%' },
                  { page: '/analytics', views: '7,432', unique: '5,234', bounce: '28%' },
                  { page: '/settings', views: '4,821', unique: '3,947', bounce: '42%' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-900 dark:text-white text-xs sm:text-sm">
                      {row.page}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      {row.views}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      {row.unique}
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      {row.bounce}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>  
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;