


// Mock order data
const mockOrders = [
  { id: 'ORD-001', customer: 'John Doe', total: 129.98, status: 'Shipped', date: '2023-05-15' },
  { id: 'ORD-002', customer: 'Jane Smith', total: 79.99, status: 'Processing', date: '2023-05-16' },
];

export default function AdminOrders() {
  // TODO: Replace with API call
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     const res = await fetch('/api/admin/orders');
  //     const data = await res.json();
  //     setOrders(data);
  //   };
  //   fetchOrders();
  // }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">${order.total}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    order.status === 'Shipped' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <button className="text-teal-600 hover:text-teal-800 mr-2">
                    View
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

