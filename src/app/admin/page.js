export default function AdminDashboard() {
  // Mock data
  const stats = [
    { name: 'Total Products', value: 42, change: '+12%' },
    { name: 'Total Orders', value: 128, change: '+8%' },
    { name: 'Revenue', value: '$8,240', change: '+15%' },
    { name: 'Active Users', value: 89, change: '+5%' },
  ];

  // Mock recent orders data
  const recentOrders = [
    { id: 'ORD-1001', customer: 'Alex Johnson', amount: '$149.98', status: 'Shipped', date: '2023-06-15' },
    { id: 'ORD-1002', customer: 'Sarah Williams', amount: '$79.99', status: 'Processing', date: '2023-06-14' },
    { id: 'ORD-1003', customer: 'Michael Brown', amount: '$229.97', status: 'Delivered', date: '2023-06-13' },
    { id: 'ORD-1004', customer: 'Emily Davis', amount: '$59.99', status: 'Shipped', date: '2023-06-12' },
  ];

  // TODO: Replace with API call
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const [statsRes, ordersRes] = await Promise.all([
  //       fetch('/api/admin/stats'),
  //       fetch('/api/admin/orders/recent')
  //     ]);
  //     const [statsData, ordersData] = await Promise.all([
  //       statsRes.json(),
  //       ordersRes.json()
  //     ]);
  //     setStats(statsData);
  //     setRecentOrders(ordersData);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">{stat.name}</h3>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
            <p className="text-teal-500 text-sm mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Orders</h2>
          <a href="/admin/orders" className="text-teal-600 hover:text-teal-800 text-sm">
            View All Orders →
          </a>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <a href={`/admin/orders/${order.id}`} className="text-teal-600 hover:text-teal-800">
                      {order.id}
                    </a>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.amount}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : order.status === 'Shipped' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}