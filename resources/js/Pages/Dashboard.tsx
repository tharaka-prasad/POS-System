import { usePage } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { BarChart3, Users, MessageSquare, Calendar, FileText } from 'lucide-react';

export default function Dashboard() {
    const { auth } = usePage().props as any;
    const user = auth.user;

    return (
        <AppLayout>
            <div className="p-6 space-y-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 font-Inter">
                        Welcome back, {user.first_name} 👋
                    </h1>
                    <p className="text-sm text-gray-600">
                        Here’s your personalized overview based on your role.
                    </p>
                </div>

                {/* Admin Dashboard */}
                {user.role === 'admin' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <DashboardCard title="Total Users" icon={<Users />} value="128" />
                        <DashboardCard title="Active Pipelines" icon={<BarChart3 />} value="12" />
                        <DashboardCard title="Conversion Rate" icon={<FileText />} value="37%" />
                    </div>
                )}

                {/* Salesperson Dashboard */}
                {user.role === 'salesperson' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <DashboardCard title="My Leads" icon={<Users />} value="24" />
                        <DashboardCard title="Commissions This Month" icon={<BarChart3 />} value="$2,130" />
                        <DashboardCard title="Upcoming Follow-ups" icon={<Calendar />} value="5" />
                    </div>
                )}

                {/* Marketing Dashboard */}
                {user.role === 'marketing' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <DashboardCard title="Campaigns Sent" icon={<MessageSquare />} value="8" />
                        <DashboardCard title="Click Rate" icon={<BarChart3 />} value="52%" />
                        <DashboardCard title="New Subscribers" icon={<Users />} value="132" />
                    </div>
                )}
            </div>


        </AppLayout>
    );
}

function DashboardCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
    return (
        <div className="bg-white rounded-2xl shadow p-5 flex items-center gap-4 hover:shadow-md transition">
            <div className="p-3 bg-primary/10 text-primary rounded-full">
                <div className="w-6 h-6">{icon}</div>
            </div>
            <div>
                <div className="text-sm text-gray-600 font-medium">{title}</div>
                <div className="text-xl font-bold text-gray-800">{value}</div>
            </div>
        </div>
    );
}
