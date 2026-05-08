import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Header() {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-white border-b shadow-sm">
            <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                    <Link href="/dashboard" className="text-xl font-bold text-primary">
                        Crown CRM
                    </Link>

                    <nav className="hidden space-x-6 md:flex">


                        {user.role === 'admin' && (
                            <>
                            <Link href="/admin/users" className="text-sm text-gray-700 hover:text-primary">
                                Users
                            </Link>
                            <Link href='/customers' className="text-sm text-gray-700 hover:text-primary">
                            Customer
                            </Link>
                             <Link href='/chat' className="text-sm text-gray-700 hover:text-primary">
                            Chat
                            </Link>
                             <Link href='/sales/pipeline' className="text-sm text-gray-700 hover:text-primary">
                            Sales Pipeline
                            </Link>
                             <Link href='/calendar' className="text-sm text-gray-700 hover:text-primary">
                            Calendar
                            </Link>
                             <Link href='/sales/inventory' className="text-sm text-gray-700 hover:text-primary">
                            Inventory
                            </Link>
                             <Link href='/reports' className="text-sm text-gray-700 hover:text-primary">
                            Reports
                            </Link>
                            <Link href='/system' className="text-sm text-gray-700 hover:text-primary">
                            System Settings
                            </Link>

                            </>

                        )}

                        {user.role === 'salesperson' && (
                            <>
                                <Link href="/sales/dashboard" className="text-sm text-gray-700 hover:text-primary">
                                    Dashboard
                                </Link>
                                <Link href="/sales/leads" className="text-sm text-gray-700 hover:text-primary">
                                    My Leads
                                </Link>
                                <Link href="/sales/pipeline" className="text-sm text-gray-700 hover:text-primary">
                                    Pipeline
                                </Link>
                                <Link href="/chat" className="text-sm text-gray-700 hover:text-primary">
                                    Chat
                                </Link>
                                <Link href="/calendar" className="text-sm text-gray-700 hover:text-primary">
                                    Calendar
                                </Link>
                                <Link href="/sales/inventory" className="text-sm text-gray-700 hover:text-primary">
                                    Inventory
                                </Link>
                                <Link href="/sales/commissions" className="text-sm text-gray-700 hover:text-primary">
                                    Promotions
                                </Link>

                            </>
                        )}

                        {user.role === 'marketing' && (
                            <>
                                <Link href="/marketing/promotions" className="text-sm text-gray-700 hover:text-primary">
                                    Promotions
                                </Link>
                                <Link href="/sales/leads" className="text-sm text-gray-700 hover:text-primary">
                                    My Leads
                                </Link>
                                 <Link href="/sales/pipeline" className="text-sm text-gray-700 hover:text-primary">
                                    Pipeline
                                </Link>
                                 <Link href="/customers" className="text-sm text-gray-700 hover:text-primary">
                                    Customer List
                                </Link>
                                <Link href="/reports" className="text-sm text-gray-700 hover:text-primary">
                                    Reports
                                </Link>
                                <Link href="/chat" className="text-sm text-gray-700 hover:text-primary">
                                    Chat
                                </Link>
                            </>
                        )}
                    </nav>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-sm font-medium text-gray-700 hover:text-primary"
                    >
                        {user.first_name}
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 z-50 w-40 py-2 mt-2 bg-white border rounded shadow-md">
                            <Link
                                href="/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Profile
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100"
                            >
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
