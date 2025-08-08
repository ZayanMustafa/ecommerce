

import AdminNav from '@/components/admin/AdminNav';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14">
          {children}
        </div>
      </div>
    </div>
  );
}

