"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white w-64 space-y-6 py-5 px-4 absolute md:relative md:translate-x-0 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-64"
                    } md:block`}
            >
                <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
                <nav>
                    <Link href="#" className="block py-2.5 px-4 rounded-lg hover:bg-gray-700">
                        🏠 Dashboard
                    </Link>
                    <Link href="/admin/CreateCourse" className="block py-2.5 px-4 rounded-lg hover:bg-gray-700">
                        Create Course
                    </Link>
                    <Link href="#" className="block py-2.5 px-4 rounded-lg hover:bg-gray-700">
                        📂 Files
                    </Link>
                    <Link href="#" className="block py-2.5 px-4 rounded-lg hover:bg-gray-700">
                        👤 Users
                    </Link>
                    <Link href="#" className="block py-2.5 px-4 rounded-lg hover:bg-gray-700">
                        ⚙️ Settings
                    </Link>
                    <Link href="#" className="block py-2.5 px-4 rounded-lg text-red-400 hover:bg-red-600">
                        🚪 Logout
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 bg-gray-800 text-white rounded-lg mb-4"
                >
                    ☰
                </button>

                {/* Page Content */}
                <h1 className="text-3xl font-bold text-gray-800">Welcome to the Admin Panel</h1>
                <p className="mt-2 text-gray-600">Manage your dashboard with ease.</p>
                {children}
            </div>
        </div>
    );
}
