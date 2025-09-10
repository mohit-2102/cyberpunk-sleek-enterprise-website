// app/admin/layout.js

export const metadata = {
  title: 'Admin | CyberPunk',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {children}
    </div>
  );
}
