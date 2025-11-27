'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/learn', label: 'Learn' },
    { href: '/duels', label: 'Duels' },
    { href: '/articles', label: 'Articles' },
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">Break Into Finance</span>
            <span className="font-bold text-lg text-gray-900 sm:hidden">BIF</span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Streak Indicator */}
          <div className="flex items-center gap-2 px-3 py-2 bg-orange-100 rounded-lg">
            <Flame size={18} className="text-orange-600" />
            <span className="font-bold text-orange-700 text-sm">12</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
