import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Header() {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex items-center space-x-4">
                    <Link href="/dashboard" className="text-xl font-bold text-primary">
                        Pos System
                    </Link>

                    <nav className="hidden md:flex space-x-6">
                        {user.role === 'cashier' && (
                            <Link
                                href="/cashier/cashierPage"
                                className="text-sm text-gray-700 hover:text-primary"
                            >
                                Cashier Page
                            </Link>
                        )}

                        {user.role === 'admin' && (
                            <>
                                <Link href="/pos/dashboard" className="text-sm text-gray-700 hover:text-primary">
                                    Dashboard
                                </Link>
                                <Link href="/pos/customers" className="text-sm text-gray-700 hover:text-primary">
                                    Customers
                                </Link>
                                <Link href="/pos/users" className="text-sm text-gray-700 hover:text-primary">
                                    Users
                                </Link>
                                <Link href="/pos/inventory" className="text-sm text-gray-700 hover:text-primary">
                                    Inventory
                                </Link>
                                <Link href="/pos/calendar" className="text-sm text-gray-700 hover:text-primary">
                                    Calendar
                                </Link>
                                <Link href="/sales/inventory" className="text-sm text-gray-700 hover:text-primary">
                                    Inventory
                                </Link>
                                <Link href="/sales/commissions" className="text-sm text-gray-700 hover:text-primary">
                                    Commissions
                                </Link>
                                <Link href="/sales/tasks" className="text-sm text-gray-700 hover:text-primary">
                                    My Tasks
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
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md py-2 z-50">
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
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
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
