

export default function AdminDashboard() {
  // Mock data
  const stats = [
    { name: 'Total Products', value: 42, change: '+12%' },
    { name: 'Total Orders', value: 128, change: '+8%' },
    { name: 'Revenue', value: '$8,240', change: '+15%' },
    { name: 'Active Users', value: 89, change: '+5%' },
  ];

  // TODO: Replace with API call
  // useEffect(() => {
  //   const fetchStats = async () => {
  //     const res = await fetch('/api/admin/stats');
  //     const data = await res.json();
  //     setStats(data);
  //   };
  //   fetchStats();
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
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        {/* Order table would go here */}
      </div>
    </div>
  );
}

